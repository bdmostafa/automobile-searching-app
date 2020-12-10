import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
