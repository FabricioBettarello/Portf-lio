import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Particle from "./components/Particle.jsx";

const App = () => {
  return (
    <>
      <Particle />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;