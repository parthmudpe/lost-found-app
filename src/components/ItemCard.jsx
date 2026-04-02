import { useNavigate } from 'react-router-dom';

function ItemCard({ item }) {
  const navigate = useNavigate();
  const isNew = new Date() - new Date(item.date) < 86400000;

  return (
    <div className={`card status-${item.status.toLowerCase()}`}>
      <span className={`badge ${item.status.toLowerCase()}`}>
        {item.status}
      </span>

      <h3>
        {item.name} {isNew && <span style={{ fontSize: "12px" }}>🆕</span>}
      </h3>

      <p>📂 {item.category}</p>
      <p>📍 {item.location}</p>
      <p>📅 {item.date}</p>

      <button
        className="view-btn"
        onClick={() => navigate(`/item/${item.id}`)}
      >
        View Details
      </button>
    </div>
  );
}

export default ItemCard;