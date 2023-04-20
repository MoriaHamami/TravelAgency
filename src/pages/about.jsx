import aboutImg from "../imgs/about-img.jpg"
import Image from 'next/image'
import { faMap } from "@fortawesome/free-solid-svg-icons"
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons"
import { faHeadset } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Reviews from "@/cmps/reviews"

function About() {
    return (
        <div className="about">
            <div className="heading">
                <h1>about us</h1>
            </div>
            <section className="body">
                <div className="img-container">
                    <Image fill src={aboutImg} alt="" />
                </div>
                <article>
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ea cum rem libero accusantium aut, consectetur modi placeat, culpa beatae qui? Libero quod velit nesciunt! Repellat unde delectus id cupiditate?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam aliquam magni atque laudantium maxime placeat neque rem. Dolore, modi.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <FontAwesomeIcon icon={faMap}></FontAwesomeIcon>
                            <span>top destinations</span>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon>
                            <span>affordable price</span>
                        </div>
                        <div className="icons">
                            <FontAwesomeIcon icon={faHeadset}></FontAwesomeIcon>
                            <span>24/7 guide service</span>
                        </div>
                    </div>
                </article>
                <Reviews />
            </section>
        </div>
    )
}

export default About