import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homepage/Home';
import ChatHistory from './pages/chathistorypage/ChatHistory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatHistory" element={<ChatHistory />} />
      </Routes>

    </>
  );
}

export default App;
