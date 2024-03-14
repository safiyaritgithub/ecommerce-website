import { Navbar } from "./common/navbar";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { Meetus } from "./pages/meetUs/meetUs";
import { Recipes } from "./pages/recipes/recipes";
import { Contact } from "./pages/contact/contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="font-poppin bg-customlightbrown">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/meetus" element={<Meetus />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
