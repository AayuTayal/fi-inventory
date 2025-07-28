import React, { useEffect, useState } from 'react';

const AdminProducts = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await fetch('http://localhost:8080/admin/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch products');
        }

        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTopProducts();
  }, [token]);

  return (
    <div className="admin-products">
      <h2>Top Added Products</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <strong>{product.name}</strong> — Added {product.addedCount} times
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminProducts;
