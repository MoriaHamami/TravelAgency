import Services from "@/cmps/services"
import HomeSwiper from "@/cmps/home-swiper"
import HomeAbout from "@/cmps/home-about"

function HomePage() {
    return (
        <div className="home-page">
            <HomeSwiper />
            <Services />
            <HomeAbout />
        </div>
    )
}

export default HomePage