import { useParams, useNavigate } from 'react-router-dom';

function ItemDetail({ items, resolveItem }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find(i => i.id === Number(id));

  if (!item) return <p>Item not found.</p>;

  return (
    <div className="detail-card">
      <button onClick={() => navigate('/')}>← Back</button>
      <h2>{item.name}</h2>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Date:</strong> {item.date}</p>
      <p><strong>Status:</strong> <span className={`badge status-${item.status.toLowerCase()}`}>{item.status}</span></p>
      <p><strong>Description:</strong> {item.description || 'No description provided.'}</p>
      {item.status !== 'Resolved' && (
        <button className="resolve-btn" onClick={() => { resolveItem(item.id); navigate('/'); }}>
          ✅ Mark as Resolved
        </button>
      )}
    </div>
  );
}
import PropTypes from 'prop-types';

ItemDetail.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
  resolveItem: PropTypes.func.isRequired,
};
export default ItemDetail;
