import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddItem({ addItem }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', category: 'Other', location: '', date: '', status: 'Lost', description: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.location || !form.date) return alert('Please fill all fields.');
    addItem(form);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Report a Lost / Found Item</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Item Name" value={form.name} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Bags</option>
          <option>Electronics</option>
          <option>Documents</option>
          <option>Clothing</option>
          <option>Other</option>
        </select>
        <input name="location" placeholder="Location Found/Lost" value={form.location} onChange={handleChange} />
        <input name="date" type="date" value={form.date} onChange={handleChange} />
        <select name="status" value={form.status} onChange={handleChange}>
          <option>Lost</option>
          <option>Found</option>
        </select>
        <textarea name="description" placeholder="Description (optional)" value={form.description} onChange={handleChange} />
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
}

export default AddItem;