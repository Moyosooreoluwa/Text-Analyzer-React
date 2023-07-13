import './App.css';
import BottomAnalysis from './components/Bottom-Analysis/BottomAnalysis';
import Nav from './components/Navbar/Navigation';
import TextBox from './components/TextBox/TextBox';
import TopAnalysis from './components/Top-Analysis/TopAnalysis';

function App() {
  return (
    <div>
      <Nav />
      <TopAnalysis />
      <TextBox />
      <BottomAnalysis />
    </div>
  );
}

export default App;
