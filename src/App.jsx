import DarkUndergroundWebsite from './components/DarkUndergroundWebsite';
import MyImage from './assets/images/test.png'; // Adjust path if needed
import MyGif from './assets/images/cat.gif'; // Adjust path if needed
import './App.css';


function App() {
  return (
    <div className="homepage">
      <img src={MyImage} alt="My Image" className="side-image" />
      <img src={MyGif} alt="My Image" className="right-image" />
      <DarkUndergroundWebsite />
    </div>
  );
}

export default App;
