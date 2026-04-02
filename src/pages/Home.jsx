import { useState } from 'react';
import ItemCard from '../components/ItemCard';
import FilterBar from '../components/FilterBar';

function Home({ items }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState('');

  const lostCount = items.filter(i => i.status === "Lost").length;
  const foundCount = items.filter(i => i.status === "Found").length;
  const resolvedCount = items.filter(i => i.status === "Resolved").length;

  const filtered = items.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category ? item.category === category : true;
    const matchStatus = status ? item.status === status : true;
    return matchSearch && matchCategory && matchStatus;
  });

  const sortedItems = [...filtered];

  if (sort === "new") {
    sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sort === "old") {
    sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <div>
      <h2>All Items ({sortedItems.length})</h2>

      <div className="summary">
        <div className="box lost">Lost: {lostCount}</div>
        <div className="box found">Found: {foundCount}</div>
        <div className="box resolved">Resolved: {resolvedCount}</div>
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "0.5rem",
          margin: "1rem 0",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">Sort</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>

      <FilterBar
        search={search} setSearch={setSearch}
        category={category} setCategory={setCategory}
        status={status} setStatus={setStatus}
      />

      <div className="card-grid">
        {sortedItems.length > 0
          ? sortedItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))
          : <p>No items found.</p>
        }
      </div>
    </div>
  );
}

export default Home;