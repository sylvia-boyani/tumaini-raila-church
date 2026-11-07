
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Welcome />
      </main>
    </>
  );
}

export default App;
