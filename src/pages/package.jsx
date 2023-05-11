import PackageList from "@/cmps/package-list"
import { packageService } from "@/services/package.service"
import Image from "next/image"
import { useEffect, useState } from "react"

function Package() {

    const [shownCount, setShownCount] = useState(3)
    const [packages, setPackages] = useState([])

    useEffect(()=>{
        loadPackages()
    }, [shownCount])

    async function loadPackages(){
        try{
            const filterBy = { amount: shownCount}
            const packages = await packageService.query(filterBy)
            setPackages(packages)
        }catch(err){
            console.log('err:', err)
        }
    }

    function onSetShownCount() {
        setShownCount(prevCount => {
            if(prevCount >= 12) return 3
            return prevCount+3
        })
    }

    // const [shownCount, setShownCount] = useState(1)

    // function onSetShownCount() {
    //     // Change later on to 
    //     if (shownCount >= 12 / 3) setShownCount(1)
    //     else setShownCount(prevCount => prevCount+1)
    // }

    return (
        <div className="package">
            <div className="heading">
                <h1>Packages</h1>
            </div>
            {/* {console.log('shownCount:', shownCount)} */}
            {/* PackageList: */}
            <PackageList packages={packages} onSetShownCount={onSetShownCount} shownCount={shownCount}/>
            {/* <section>
                <h1 className="heading-title">top destinations</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="img-container">
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327862/travelagency/img-1_q6cjin.jpg" alt="" />
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
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327862/travelagency/img-2_xunxx9.jpg" alt="" />
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
                            <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327862/travelagency/img-3_itnsww.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-7_t3gq4n.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327862/travelagency/img-4_vyqf8g.webp" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-10_uryntg.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-8_qfvwpx.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-5_opexyl.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327864/travelagency/img-11_fdpzpe.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-9_khngky.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327863/travelagency/img-6_mv0rrw.jpg" alt="" />
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
                                    <Image fill src="https://res.cloudinary.com/dslabmwf7/image/upload/v1682327861/travelagency/img-12_ndidok.jpg" alt="" />
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
                        {shownCount >= 12 / 3 ? 'show less' : 'load more'}
                    </span>
                </div>
            </section> */}
        </div>
    )
}

export default Package