import './App.css';
import { Header } from './Header';
import { SearchCity } from './SearchCity';
import CityResultProvider from './CityResultContaxt';
import ForecastProvider from './forcastContaxt';
import CurrentProvider from './currentContext';
import FavoritesProvider from './FavoritsContext';
import  CityResult  from './CityResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './Favorites';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  return (
    <Router>
      <div className="App">
        <CityResultProvider>
          <ForecastProvider>
            <CurrentProvider>
            <FavoritesProvider>
              <Header/>
              <Switch>
                <Route path="/Home">
                  <SearchCity/>
                  <CityResult/>
                </Route>
                <Route path="/Favorites">
                  <Favorites/>
                </Route>
              </Switch>
            </FavoritesProvider>
            </CurrentProvider>
          </ForecastProvider>
        </CityResultProvider>
      </div>
    </Router>
  );
}

export default App;
