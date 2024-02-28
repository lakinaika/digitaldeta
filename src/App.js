import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import PageNotFound from "./Pages/PageNotFound";
import WorkSinglePage from "./Components/WorkSinglePage";
import Academy from "./Pages/Academy";
import ScrollToTop from "./Components/ScrollToTop";
import Webdevelopment from "./Pages/Webdevelopment";
import WebDesign from "./Pages/WebDesign";
import GraphicDesign from "./Pages/GraphicDesign";
import Marketing from "./Pages/Marketing";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkSinglePage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/academy" element={<Academy/>}/>
        <Route path="/program/web-development" element={<Webdevelopment/>}/>
        <Route path="/program/strategic-marketing-using-ai" element={<Marketing/>}/>
        <Route path="/program/graphic-design" element={<GraphicDesign/>}/>
        <Route path="/program/web-design" element={<WebDesign/>}/>
      </Routes>

    </>
  );
}

export default App;
