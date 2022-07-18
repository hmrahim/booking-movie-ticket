import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import {Routes,Route} from "react-router-dom"
import MovieDetails from './Components/Pages/MovieDetails';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<MovieDetails/>} />
      </Routes>
     
     
     <Footer/>
    </div>
  );
}

export default App;
