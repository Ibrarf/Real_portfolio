import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();

// White ball, brand-colored text — two lines: name on top, category smaller below
const createSvgDataUrl = (name: string, color: string, sub: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
    <rect width="256" height="256" fill="#ffffff" />
    <text x="50%" y="44%" dominant-baseline="middle" text-anchor="middle"
      fill="${color}" font-size="42" font-weight="800" font-family="Arial,sans-serif">${name}</text>
    <text x="50%" y="68%" dominant-baseline="middle" text-anchor="middle"
      fill="#999999" font-size="24" font-weight="400" font-family="Arial,sans-serif">${sub}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// [name, brandColor, category]
const skillList: [string, string, string][] = [
  ["Python", "#3776AB", "Language"],
  ["JavaScript", "#F0A500", "Language"],
  ["Next.js", "#000000", "Framework"],
  ["OpenAI", "#10A37F", "AI / LLM"],
  ["LangChain", "#1C7C4C", "AI Eng"],
  ["LangGraph", "#1C5C8C", "AI Eng"],
  ["VAPI", "#6C47FF", "Voice AI"],
  ["N8N", "#EA4B71", "Automation"],
  ["Zapier", "#FF4A00", "Automation"],
  ["Make", "#6D00CC", "Automation"],
  ["HubSpot", "#FF7A59", "CRM"],
  ["Salesforce", "#00A1E0", "CRM"],
  ["GoHighLevel", "#0066FF", "CRM"],
  ["UiPath", "#FA4616", "RPA"],
  ["Power Auto", "#0078D4", "Automation"],
  ["WordPress", "#21759B", "Web Dev"],
  ["GitHub", "#181717", "Dev Ops"],
  ["Cursor", "#7C3AED", "Dev Tools"],
  ["Claude", "#CC785C", "AI / LLM"],
  ["Vector DB", "#5A4FCF", "AI Eng"],
  ["MCP Server", "#CC785C", "AI Eng"],
  ["RAG Agents", "#0EA5E9", "AI / LLM"],
  ["SEO", "#34A853", "Marketing"],
  ["Meta Ads", "#0081FB", "Marketing"],
  ["Selenium", "#43B02A", "Automation"],
  ["Google WS", "#4285F4", "Productivity"],
  ["Zoom API", "#2D8CFF", "Comms"],
  ["Webhooks", "#6366F1", "Integration"],
  ["Scraping", "#E34F26", "Data"],
  ["Analytics", "#E37400", "Data"],
];

const imageUrls = skillList.map(([name, color, sub]) =>
  createSvgDataUrl(name, color, sub)
);

const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

// One sphere per skill with slight scale variation
const spheres = skillList.map((_, i) => ({
  scale: [0.75, 0.85, 0.9, 0.95, 1.0][i % 5],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const pos = api.current!.translation();
    const impulse = vec
      .set(pos.x, pos.y + 1.5, pos.z)
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2 - 1.5,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <div className="career-heading-wrapper tech-heading-wrapper">
        <div className="career-subheading">
          <span className="dot pulse-dot"></span>
          Technologies I Use
        </div>
        <h2>TECH STACK</h2>
      </div>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
