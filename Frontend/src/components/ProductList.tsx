import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  user_id: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Obtén el user_id del localStorage
    const user_id = localStorage.getItem('user_id');
    
    // Verifica que el user_id exista antes de hacer la solicitud
    if (user_id) {
      // Fetch product data for the logged-in user using their user_id
      fetch(`http://localhost:8081/products?user_id=${user_id}`)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, []);
  
  return (
    <div className="container text-center"> {/* Center align content */}
      <h1 className="mt-5">Productos</h1>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <h2>{product.name}</h2>
            <p className="mb-0">Price: ${product.price}</p>
            <p className="mb-0">Stock: ${product.stock}</p>
            <img
                src={product.image}
                alt={product.name}
                className="img-fluid mt-2"
                style={{ width: '200px', height: '200px' }}
              />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
