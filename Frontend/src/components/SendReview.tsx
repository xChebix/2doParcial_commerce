import  { useState,FormEvent } from 'react';
import axios from 'axios'; // Import axios

const ReviewForm = () => {
  const [values, setValues] = useState({
    review: ""
  });


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // You can access the review data in values.review
    const reviewData = {
      review: values.review
    };
    
    // Use axios to send the reviewData to your server for further processing
    axios.post('http://localhost:8081/add-review', reviewData)
      .then((response) => {
        if (response.status === 200) {
          // Review added successfully, you can handle this as needed
          setValues({
            ...values,
            review: ""
          });
          console.log('Review added successfully');
        } else {
          // Handle the error in adding the review
          console.error('Error adding review');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Write your review here..."
            name="review"
            value={values.review}
            onChange={e=>setValues({review:e.target.value})} 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
