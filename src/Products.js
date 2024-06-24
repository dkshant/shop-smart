import useFetch from "./useFetch";
import starIcon from './assets/images/rating-icon.png';
import { Link } from "react-router-dom";

function Products(){

    const {dataContent: items, isLoading, error} = useFetch('https://dummyjson.com/products?limit=8');

    return(
        <section className="our-collections">
            <div className="container">
                <header className="entry-header">
                    <h2 className="entry-title">Our Collections</h2>
                </header>
                <div className="our-collections-content">
                    {isLoading && <p className="loading-msg">Fetching the data...</p>}
                    {error && <p className="fetch-error-msg">{error}</p>}
                    {items && items.products.map(product => (
                        <div className="product-item" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <figure className="featured-image">
                                    <img src={product.thumbnail} alt="product thumbnail" />
                                </figure>
                                <div className="product-detail">
                                    <h4 className="product-title">{product.title}</h4>
                                    <span className="product-rating-wrap">
                                        <img src={starIcon} alt="star-icon" />
                                        <span>{product.rating}</span>
                                    </span>
                                    <span className="price">{product.price + ' $'}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;