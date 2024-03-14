
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Mealstarters } from "./meal-starters";
import { Combopacks } from "./combopacks";
import { Othergoodies } from "./othergoodies";

export const Shop = () => {
  return (
    <Router>
      <Routes>
     
        <Route path="/meal-starters" element={<Mealstarters />} />
        <Route path="/combo-packs" element={<Combopacks />} />
        <Route path="/other-goodies" element={<Othergoodies />} />
      </Routes>
    </Router>
  );
}


