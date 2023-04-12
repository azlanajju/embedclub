import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import BackgroundVideo from "./components/BackgroundVideo";


function App() {
  return (
    <>

      <Navbar />
      <BackgroundVideo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/achievements" element={<Achievements />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </>
  );
}

export default App;
