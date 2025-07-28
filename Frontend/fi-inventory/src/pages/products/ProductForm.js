import React, { useState } from 'react';

const ProductForm = ({ token }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    price: '',
    quantity: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Product creation failed');
      }

      setMessage('Product created successfully!');
      setFormData({ name: '', company: '', price: '', quantity: '' });
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="product-form">
      <h2>Create Product</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        /><br />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        /><br />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductForm;
