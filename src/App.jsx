import "./App.css";
import Card from "./components/Card";
import Contact from "./components/Contact";

function App() {
  const handleClick = () => {};
  return (
    <>
      <div className="container">
        <div className="personal-details-card">
          <Card>
            <h1 className="name">Eswar Oruganti</h1>
            <a
              href="/Resume_Eswar_Oruganti.pdf"
              download="Eswar_Oruganti_Resume"
              className="downloadLink"
            >
              Download Resume
            </a>
            {/* <button className="contactButton">Contact Me</button> */}
          </Card>
        </div>
        <div className="everything-else">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
