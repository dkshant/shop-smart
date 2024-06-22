import useFetch from "./useFetch"

function Blogs(){

    const {dataContent: blogs, isLoading, error} = useFetch('http://localhost:5000/blogs');

    return(
        <section className="blogs-section">
            <div className="container">
                <header className="entry-header">
                    <h2 className="entry-title">Blog Posts</h2>
                </header>
                <div className="blogs-content">
                    {blogs && blogs.map(blog => (
                        <div className="blog-item" key={blog.id}>
                            <figure className="featured-image">
                                <img src={blog.image} alt="" />
                            </figure>
                            <div className="blog-detail">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p>{blog.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs;