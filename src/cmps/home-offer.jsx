// import aboutImg from "../imgs/about-img.jpg"
// import Image from 'next/image'

function HomeOffer() {
    return (
        <section className="home-offer">
            <article>
                <h3>up to 50% off</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam explicabo nihil commodi excepturi laborum cum quaerat totam ipsa animi praesentium!</p>
                <a href="/book" className="btn">book now</a>
            </article>
            {/* <div className="img-container">
                <Image fill src={aboutImg} alt="" />
            </div> */}
        </section>
    )
}

export default HomeOffer