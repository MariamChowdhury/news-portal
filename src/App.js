import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import News from './Components/News/News';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Openings from './Components/Openings/Openings';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <News />
      <Openings />
      <NewsLetter />
    </div>
  );
}

export default App;
