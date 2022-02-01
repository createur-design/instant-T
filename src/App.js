import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Home } from "./templates/pages/Home";
import { Footer } from "./templates/Footer";
import { Header } from "./templates/Header";
import { Gallery } from "./templates/pages/Gallery";
import { Profil } from "./templates/pages/Profil";
import { HallOfFame } from "./templates/pages/HallOfFame";

function App() {
  const user = {
    connected: false,
    isAdmin: false,
  };
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className="App">
      {location !== "/" ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route
          path="/stats"
          element={user.connected ? <HallOfFame /> : <Navigate to="/profil" />}
        ></Route>
        <Route path="/profil" element={<Profil />}></Route>
      </Routes>
      {location !== "/" ? <Footer /> : ""}
    </div>
  );
}

export default App;
