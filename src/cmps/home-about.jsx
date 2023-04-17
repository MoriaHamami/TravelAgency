import aboutImg from "../imgs/about-img.jpg"
import Image from 'next/image'

function HomeAbout() {
    return (
        <section className="home-about">
            <div className="img-container">
                <Image fill src={aboutImg} alt="" />
            </div>
            <article>
                <h3>about us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit necessitatibus sint similique nostrum dicta, earum laborum, exercitationem rem nemo fuga sed repellat cumque qui blanditiis voluptatum tenetur commodi molestiae! Blanditiis.
                </p>
                <a href="/about" className="btn">read more</a>
            </article>
        </section>
    )
}

export default HomeAbout