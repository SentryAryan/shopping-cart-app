import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setPosts } from './redux/slices/postSlice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { setTotalAmount } from './redux/slices/totalSlice';

function App() {
  console.log("App.jsx called");
  
  const API_URL = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  async function fetchShopItems() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch(setPosts(data));
    }
    catch (error) {
      toast.error("Error in fetching data");
      dispatch(setPosts([]));
    }

    dispatch(setLoading(false));
  }
  
  useEffect(() => {
    fetchShopItems();
  }, []);

  useEffect(() => {
    dispatch(setTotalAmount(cart.reduce((sum, item) => sum + item.price, 0)));
  }, [cart]);

  return (
    <div className='max-w-[100vw] min-h-screen flex flex-col items-center'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
