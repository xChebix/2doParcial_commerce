import { useState, useEffect } from 'react';

interface Review {
    id: number;
    review: string
  }
const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Fetch product data from your server when the component mounts
    fetch('http://localhost:8081/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container text-center'>
      <h2 className='mt-5'>Customer Reviews</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4 container text-center mt-3">
            <div className="card mb-4">
              <div className="card-body">
                <h4>Review: {review.review}</h4>
                <p className="card-text">User: Anonymous</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
