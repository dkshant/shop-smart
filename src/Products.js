import useFetch from "./useFetch";

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
                            <figure className="featured-image">
                                <img src={product.thumbnail} alt="" />
                            </figure>
                            <div className="product-detail">
                                <h4 className="product-title">{product.title}</h4>
                                <span className="product-rating">Rating: {product.rating}</span>
                                <span className="price">{product.price + ' $'}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;