import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddCar from "./pages/AddCar";
import DetailsCar from "./pages/DetailsCar";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

export const UserContext = createContext();

function App() {
  const [cars, setCars] = useState({});
  const [search, setSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState("");

  return (
    <UserContext.Provider
      value={{
        cars,
        setCars,
        search,
        setSearch,
        searchBtn,
        setSearchBtn,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard/user/add-car">
            <AddCar />
          </Route>
          <Route path="/dashboard/user/details-car">
            <DetailsCar />
          </Route>
          <Route path="/dashboard/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
