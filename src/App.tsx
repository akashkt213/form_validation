import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Result from "./components/Result";
import FormComp from "./components/FormComp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="form" element={<FormComp />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
