import bannerImg1 from '../../assets/Banner/Banner1.jpg'
import bannerImg2 from '../../assets/Banner/Banner2.jpg'
import bannerImg3 from '../../assets/Banner/Banner3.jpg'
import bannerImg4 from '../../assets/Banner/Banner4.jpg'

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item relative w-full">
          <img
            src={bannerImg1}
            className="w-full max-h-svh" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item4" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❮</a>
            <a href="#item2" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❯</a>
          </div>
        </div>
        <div id="item2" className="carousel-item relative w-full">
          <img
            src={bannerImg2}
            className="w-full max-h-svh" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item1" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❮</a>
            <a href="#item3" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❯</a>
          </div>
        </div>
        <div id="item3" className="carousel-item relative w-full">
          <img
            src={bannerImg3}
            className="w-full max-h-svh" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item2" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❮</a>
            <a href="#item4" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❯</a>
          </div>
        </div>
        <div id="item4" className="carousel-item relative w-full">
          <img
            src={bannerImg4}
            className="w-full max-h-svh" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#item3" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❮</a>
            <a href="#item1" className="btn btn-circle bg-orange text-white hover:bg-white hover:text-orange border-orange hover:border-orange">❯</a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn text-white bg-orange border-orange transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white btn-xs">1</a>
        <a href="#item2" className="btn text-white bg-orange border-orange transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white btn-xs">2</a>
        <a href="#item3" className="btn text-white bg-orange border-orange transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white btn-xs">3</a>
        <a href="#item4" className="btn text-white bg-orange border-orange transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white btn-xs">4</a>
      </div>
    </>
  );
};

export default Banner;


// btn mr-10 text-white bg-orange border-2 font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-orange hover:border-orange hover:bg-white