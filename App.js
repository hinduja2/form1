import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './Components/Content/content';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Forgot from './Forgot/Forgot';



function App() {
  return (
    <>

    {/* <Content /> */}
    <Forgot/>
    </>
  //   <div>
  //   <BrowserRouter>
  //   <Routes>
  //     <Route>
  //       <Route index element={<Content />} />
  //       <Route path="forgetpass" element={<Forgot />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  // </div>
  );
}

export default App;
