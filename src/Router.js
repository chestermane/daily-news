import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Header from "./components/header";
import Home from "./components/home";
import Contact from "./components/contact";
import PostComponent from "./components/post";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/article/:id" element={<PostComponent />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Router;
