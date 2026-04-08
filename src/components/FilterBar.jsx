function FilterBar({ search, setSearch, category, setCategory, status, setStatus }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Bags">Bags</option>
        <option value="Electronics">Electronics</option>
        <option value="Documents">Documents</option>
        <option value="Clothing">Clothing</option>
        <option value="Other">Other</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="Lost">Lost</option>
        <option value="Found">Found</option>
        <option value="Resolved">Resolved</option>
      </select>
    </div>
  );
}
import PropTypes from 'prop-types';

FilterBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};
export default FilterBar;
