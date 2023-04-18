import img1 from "../imgs/img-1.jpg"
import img2 from "../imgs/img-2.jpg"
import img3 from "../imgs/img-3.jpg"
import Image from 'next/image'

function HomePackage() {
    return (
        <section className="home-package">
            <h1 className="heading">our packages</h1>
            <div className="box-container">
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img1} alt="" />
                    </div>
                    <article>
                        <h3>adventure & tour</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sequi, repudiandae quo ducimus atque soluta omnis quaerat ex dolorem, laboriosam placeat iusto rem voluptate minus. Obcaecati pariatur suscipit ipsam porro.
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img2} alt="" />
                    </div>
                    <article>
                        <h3>travel & trek</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum facilis ab excepturi id quis aspernatur eveniet cupiditate perspiciatis vitae sint!
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
                <div className="box">
                    <div className="img-container">
                        <Image fill src={img3} alt="" />
                    </div>
                    <article>
                        <h3>wilderness & camp</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias quos, ducimus explicabo laudantium dolor minima neque incidunt blanditiis, voluptates quibusdam non quas. Eaque, nulla.
                        </p>
                        <a href="/book" className="btn">book now</a>
                    </article>
                </div>
            </div>

            <div className="load-more">
                <a href="package" className="btn">load more</a>
            </div>
        </section>
    )
}

export default HomePackage