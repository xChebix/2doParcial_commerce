import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SendReview from "../components/SendReview"
import ReviewList from "../components/ReviewsList";
function Reviews(){
    return (
        <Fragment>
            <h1 className="text-center">Reviews</h1>
            <SendReview></SendReview>
            <ReviewList></ReviewList>
        </Fragment>
    );
}
export default Reviews;