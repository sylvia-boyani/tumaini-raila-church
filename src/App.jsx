
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import ChurchStory from "./components/ChurchStory/ChurchStory";
import Ministries from "./components/Ministries/Ministries";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Welcome />
        <ChurchStory />
        <Ministries />
      </main>
    </>
  );
}

export default App;
