import bannerImg from './assets/images/banner-img.jpeg';

function Banner(){
    return(
        <section className="banner">
            <div className="container">
                <div className="banner-content-wrap">
                    <figure className="featured-image">
                        <img src={bannerImg} alt="" />
                    </figure>
                    <div className="banner-content">
                        <h2 className="entry-title">
                        Every day is unique, just like our tea
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
                        </p>
                        <button className="btn-primary">Browse More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;