import { BrowserRouter, Route, Routes } from "react-router-dom";
//import SayfaninTamami from './SayfaninTamami';
import Sayfalar from "./Sayfalar";
import BirKismi from './BirKismi';
import BaskaKismi from './BaskaKismi';
import Standart from './Standart';
import Deneme from './Deneme';
import Istanbul from './Istanbul';
import Sivas from './Sivas';



function Router() {
  return (
   <>
    <BrowserRouter>
      <Routes>
          <Route path="Sayfalar" element={<Sayfalar/>}/>
          <Route path="BirKismi" element={<BirKismi/>}/>
          <Route path="BaskaKismi" element={<BaskaKismi/>}/>
          <Route path="Standart" element={<Standart/>}/>
          <Route path="Deneme" element={<Deneme/>}/>
          <Route path="Istanbul" element={<Istanbul/>}/>
          <Route path="Sivas" element={<Sivas/>}/>
      </Routes>
      <Routes>
          
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
