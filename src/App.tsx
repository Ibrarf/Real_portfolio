import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));

const App = () => {
  return (
    <main className="main-body">
      <Suspense>
        <MainContainer />
      </Suspense>
    </main>
  );
};

export default App;
