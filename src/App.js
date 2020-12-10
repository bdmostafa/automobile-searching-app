import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/Home';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [cars, setCars] = useState({});
  const [search, setSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState("");



  return (
    <UserContext.Provider value={{
      cars, setCars, search, setSearch, searchBtn, setSearchBtn
    }}>
    
      <Header />
      <Home />
      <Footer />
    
    </UserContext.Provider>
  );
}

export default App;
