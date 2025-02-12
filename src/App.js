import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MainPage/>        
      <Footer />
    </div>
  );
}

export default App;
