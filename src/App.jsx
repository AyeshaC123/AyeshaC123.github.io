import DarkUndergroundWebsite from './components/DarkUndergroundWebsite';
import MyImage from './assets/images/test.png'; // Adjust path if needed
import MyGif from './assets/images/cat.gif'; // Adjust path if needed
import MyGif1 from './assets/images/border.gif'; // Adjust path if needed
import MyImage1 from './assets/images/Ayesha.png'; // Adjust path if needed
import './App.css';


function App() {
  return (
    <div className="homepage">
      <img src={MyImage} alt="My Image" className="side-image" /> 
      <img src={MyGif} alt="My Image" className="right-image" />
      <img src={MyGif1} alt="Border Ring" className="border-ring" />
      <img src={MyImage1} alt="Ayesha Face" className="face-circle" />
      <DarkUndergroundWebsite />
    </div>
  
    
  );
}

export default App;
