export const utilService = {
    isFromTwoWeeksAgo,
    getSliderSettings
}

function isFromTwoWeeksAgo(date) {
    let twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return +date >= twoWeeksAgo.getTime()
}

function getSliderSettings() {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            }
        ]
    }
    return settings
}
