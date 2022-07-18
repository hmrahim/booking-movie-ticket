import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import {Routes,Route} from "react-router-dom"
import MovieDetails from './Components/Pages/MovieDetails';
import BookingForm from './Components/Pages/BookingForm';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<MovieDetails/>} />
        <Route path="/booking/:id" element={<BookingForm/>} />
      </Routes>
     
     
     <Footer/>
     <ToastContainer/>
    </div>
  );
}

export default App;
