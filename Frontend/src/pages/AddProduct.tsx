import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'; // Importa Axios

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
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Obtén el user_id del localStorage
    const user_id = localStorage.getItem('user_id');

    if (user_id) {
      const product = {
        ...productData,
        user_id: user_id,
      };

      // Realiza la solicitud para agregar un producto con el user_id utilizando Axios
      axios
        .post('http://localhost:8081/add-product', product)
        .then((response) => {
          console.log('Producto agregado exitosamente:', response.data);
          // Limpiar el formulario u hacer cualquier otra acción necesaria
        })
        .catch((error) => {
          console.error('Error al agregar el producto:', error);
        });
    }
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
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
