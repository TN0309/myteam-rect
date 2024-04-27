
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App"> 
    
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/*' element={<h1>404</h1>}/>
    
     </Routes>
     
     <Footer></Footer>
     </div>
  );
}

export default App;
