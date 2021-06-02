import './App.css';
import LinkBlock1 from './linkBlock1.js';
import LinkBlock2 from './linkBlock2.js';
import Search from './search';
import Top5 from './top5';
import TimeAndWeather from './timeAndWeather';
import Buttons from './buttons.js';
import Stocks from './stocks.js';
import Charts from './charts';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
      
    <Router>
    <header>
    <h4 className="name">Dominykas</h4>
    <Buttons/>
    </header>
    <TimeAndWeather/>
    <Route exact path="/startpage" component={Top5}/>
    <Route exact path="/" component={Top5}/>
    <Search/>
    <Route path="/stocks" component={Stocks}/>
    <section className="blockSection">
    <Route exact path="/" component={LinkBlock1}/>
    <Route exact path="/" component={LinkBlock2}/>
    <Route exact path="/startpage" component={LinkBlock1}/>
    <Route exact path="/startpage" component={LinkBlock2}/>
    </section>
    </Router>
    
    

  );
}

export default App;

