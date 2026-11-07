
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import ChurchStory from "./components/ChurchStory/ChurchStory";
import Ministries from "./components/Ministries/Ministries";
import Worship from "./components/Worship/Worship";
import ChurchLife from "./components/ChurchLife/ChurchLife";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

import "./styles/global.css";

// Homepage
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Welcome />
        <ChurchStory />
        <Ministries />
        <Worship />
        <ChurchLife />
        <UpcomingEvents />
      </main>
    </>
  );
}

// Main Application
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Homepage */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Separate Gallery Page */}
        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
