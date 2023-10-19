import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../components/ProductList";

function Home(){
    return (
        <Fragment>
            <h1 className="text-center">Home</h1>
            <ProductList></ProductList>
        </Fragment>
    );
}
export default Home;