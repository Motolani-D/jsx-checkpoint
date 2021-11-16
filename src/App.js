import logo from "./logo.svg";
import "./App.css";
import lab from "./images/lab.jpg";
import Player from "react-player";

function App() {
  return (
    <div className="App">
      <Naming />
      <ImageTwo />
      <ImageOne />
      <Player
        width="320"
        height="500"
        controls
        url="https://youtu.be/4x8Q__FOTxU"
      />
    </div>
  );
}

const Naming = () => <h1 className="myTitle">Motolani Akindele</h1>;
const ImageOne = () => <img className="myFirstImage" src={lab} />;
const ImageTwo = () => (
  <img className="mySecondImage" src="./images/motolani.jpg" />
);

export default App;
