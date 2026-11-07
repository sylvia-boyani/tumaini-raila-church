
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import ChurchStory from "./components/ChurchStory/ChurchStory";
import Ministries from "./components/Ministries/Ministries";
import Worship from "./components/Worship/Worship";
import ChurchLife from "./components/ChurchLife/ChurchLife";

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
        <Worship />
        <ChurchLife />
      </main>
    </>
  );
}

export default App;
