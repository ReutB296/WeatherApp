import './App.css';
import { Header } from './Header';
import { SearchCity } from './SearchCity';
import CityResultProvider from './CityResultContaxt';
import ForecastProvider from './forcastContaxt';
import CurrentProvider from './currentContext';
import  CityResult  from './CityResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Router>
      <div className="App">
        <CityResultProvider>
          <ForecastProvider>
            <CurrentProvider>
              <Header/>
              <SearchCity/>
              <CityResult/>
            </CurrentProvider>
          </ForecastProvider>
        </CityResultProvider>
      </div>
    </Router>
  );
}

export default App;
