import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowGreeting from './components/Greeting';
import { fetchGreeting } from './redux/greetings/greetingsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowGreeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;