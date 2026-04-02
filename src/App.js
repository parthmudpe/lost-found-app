import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import ItemDetail from './pages/ItemDetail';
import { sampleItems } from './data/sampleData';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : sampleItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now(), status: newItem.status || 'Lost' };
    setItems([...items, itemWithId]);
  };

  const resolveItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, status: 'Resolved' } : item
    ));
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home items={items} />} />
            <Route path="/add" element={<AddItem addItem={addItem} />} />
            <Route path="/item/:id" element={<ItemDetail items={items} resolveItem={resolveItem} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;