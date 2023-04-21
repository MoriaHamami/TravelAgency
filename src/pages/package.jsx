import Image from "next/image"
import img1 from "../imgs/img-1.jpg"
import img2 from "../imgs/img-2.jpg"
import img3 from "../imgs/img-3.jpg"
import img4 from "../imgs/img-4.jpg"
import img5 from "../imgs/img-5.jpg"
import img6 from "../imgs/img-6.jpg"
import img7 from "../imgs/img-7.jpg"
import img8 from "../imgs/img-8.jpg"
import img9 from "../imgs/img-9.jpg"
import img10 from "../imgs/img-10.jpg"
import img11 from "../imgs/img-11.jpg"
import img12 from "../imgs/img-12.jpg"
import { useState } from "react"

function Package() {

    const [shownCount, setShownCount] = useState(1)

    function onSetShownCount() {
        // Change later on to 
        if (shownCount >= 12 / 3) setShownCount(1)
        else setShownCount(prevCount => prevCount+1)
    }

    return (
        <div className="package">
            <div className="heading">
                <h1>Packages</h1>
            </div>
            {console.log('shownCount:', shownCount)}
            {/* PackageList: */}
            <section>
                <h1 className="heading-title">top destinations</h1>
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
                    {shownCount > 1 &&
                        <>
                            <div className="box">
                                <div className="img-container">
                                    <Image fill src={img7} alt="" />
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
                                    <Image fill src={img4} alt="" />
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
                                    <Image fill src={img10} alt="" />
                                </div>
                                <article>
                                    <h3>wilderness & camp</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias quos, ducimus explicabo laudantium dolor minima neque incidunt blanditiis, voluptates quibusdam non quas. Eaque, nulla.
                                    </p>
                                    <a href="/book" className="btn">book now</a>
                                </article>
                            </div>
                        </>}
                    {shownCount > 2 &&
                        <>
                            <div className="box">
                                <div className="img-container">
                                    <Image fill src={img8} alt="" />
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
                                    <Image fill src={img5} alt="" />
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
                                    <Image fill src={img11} alt="" />
                                </div>
                                <article>
                                    <h3>wilderness & camp</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias quos, ducimus explicabo laudantium dolor minima neque incidunt blanditiis, voluptates quibusdam non quas. Eaque, nulla.
                                    </p>
                                    <a href="/book" className="btn">book now</a>
                                </article>
                            </div>
                        </>}
                    {shownCount > 3 &&
                        <>
                            <div className="box">
                                <div className="img-container">
                                    <Image fill src={img9} alt="" />
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
                                    <Image fill src={img6} alt="" />
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
                                    <Image fill src={img12} alt="" />
                                </div>
                                <article>
                                    <h3>wilderness & camp</h3>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias quos, ducimus explicabo laudantium dolor minima neque incidunt blanditiis, voluptates quibusdam non quas. Eaque, nulla.
                                    </p>
                                    <a href="/book" className="btn">book now</a>
                                </article>
                            </div>
                        </>}
                </div>
                <div className="load-more" onClick={onSetShownCount}>
                    <span className="btn">
                        {/* Change to database length later on */}
                        {shownCount >= 12 / 3 ? 'show less' : 'load more'}
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Package