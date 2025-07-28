import React, { useEffect, useState } from 'react';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8080/products', {
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

    fetchProducts();
  }, [token]);

  return (
    <div className="product-list">
      <h2>All Products</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              <strong>{p.name}</strong> — {p.company} — ₹{p.price} — Qty: {p.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
