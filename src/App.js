import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Links from "./components/Links";
import Card from "./components/Card";

function App() {
  return (
    <div className="whole">
      <NavBar></NavBar>
      <div className="body-container">
        <Links className="link-cont" />
        <Card className="card-cont" />
      </div>
    </div>
  );
}

export default App;
