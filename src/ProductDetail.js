import { useParams } from "react-router-dom";
import useFetch from "./useFetch"

function ProductDetail(){

    const {id} = useParams();
    const {dataContent: item} = useFetch('https://dummyjson.com/products/' + id);

    return(
        <section className="product-detail-section">
            <div className="container">
                {item && (
                    <div className="product-detail-wrap">
                        <figure className="featured-image">
                            <img src={item.images} alt="" />
                        </figure>
                        <div className="product-detail">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="category-wrap">
                                <span>Category: </span>
                                <span className="category">{item.category}</span>
                            </div>
                            <span>Warranty Information: {item.warrantyInformation}</span>
                            <span>Shipping Information: {item.shippingInformation}</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProductDetail;