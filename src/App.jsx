import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import ProfileCard from "./components/ProfileCard";
import SlideIn from "./components/SlideIn/Slidein";

function App() {
  return (
    <>
      <SlideIn>
        <div className="container">
          <ProfileCard />
          <div className="details">
            <Experience />
            <Contact />
          </div>
        </div>
      </SlideIn>
    </>
  );
}

export default App;
