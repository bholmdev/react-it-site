import Banner from "../app/assets/img/banner.jpeg"

const BannerImg = () => {
    return (
        <>
            <img className="banner" src={Banner} alt="banner" />
            <div className="text_over_image">

            </div>
        </>
    );
}

export default BannerImg;