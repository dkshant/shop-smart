import useFetch from "./useFetch";

function Products(){

    const {dataContent: products, isLoading, error} = useFetch('https://fakestoreapi.com/products/');

    const getImage = (imageName) => {
        return require(`./assets/images/collections/${imageName}`)
    }

    return(
        <section className="our-collections">
            <div className="container">
                <header className="entry-header">
                    <h2 className="entry-title">Our Collections</h2>
                </header>
                <div className="our-collections-content">
                    {isLoading && <p className="loading-msg">Fetching the data...</p>}
                    {error && <p className="fetch-error-msg">{error}</p>}
                    {products && products.map(product => (
                        <div className="product-item" key={product.id}>
                            <figure className="featured-image">
                                <img src={getImage(product.image)} alt="" />
                            </figure>
                            <div className="product-detail">
                                <h3 className="product-title">{product.name}</h3>
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