import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import ProfileCard from "./components/ProfileCard";
import Slidein from "./components/SlideIn/Slidein";

function App() {
  return (
    <>
      <div className="container">
        <Slidein>
          <ProfileCard />
        </Slidein>
        <div className="details">
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
