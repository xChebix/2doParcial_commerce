import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ProductData {
  name: string;
  price: number;
  stock: number;
  image: string;
}

function ProductForm() {
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    price: 0,
    stock: 0,
    image: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción, como enviar los datos a un servidor.
    // Ejemplo: axios.post('/api/create-product', productData)
  };

  return (
    <div className="container">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen (URL):</label>
          <input
            type="url"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
}

export default ProductForm;
