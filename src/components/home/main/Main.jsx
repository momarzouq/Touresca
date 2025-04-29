import Container from "../../../UI/Container";
import PopularCard from "./PopularCard";
import { useState } from "react";
import { useFilteredTours } from "../../../hooks/useFilteredTours";
import Slider from "../../../UI/Slider";
import { SwiperSlide } from "swiper/react";
import Destination from "./Destination";
import Features from "./Features";
import TourCategories from "./TourCategories";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import OurPartners from "./OurPartners";
import sale from '../../../assets/sale.svg'

export default function Main() {
  const [tourType, setTourType] = useState("All");
  const handleFilter = (type) => {
    setTourType(type);
  };
  return (
    <div className="pb-20">
      <Container className="space-y-8">
        <PopularTour handleFilter={handleFilter} tourType={tourType} />
        <PopularFeed tourType={tourType} />
        <TripSale />
        <Destination />
        <Features />
        <TourCategories />
        <Testimonials />
      </Container>
      <Subscribe />
      <OurPartners />
    </div>
  );
}

const PopularTour = ({ handleFilter, tourType }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-[42px] text-[#095763]  font-semibold lg:text-3xl pt-14">
        Popular tours
      </h1>
      <div className="flex items-baseline justify-between text-white">
        <div className="space-x-2 grid grid-cols-3 lg:grid-cols-1 gap-2">
          {[
            { name: "All", filter: "All" },
            { name: "Single day tour", filter: "Day" },
            { name: "Multi days tour", filter: "Multi-Day" },
          ].map(({ filter, name }) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`hover:bg-[#095763] text-teal-900 hover:text-white py-3 px-10 rounded-full ${
                tourType === filter ? "bg-[#095763] text-white" : "bg-[#E0EAEB]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="text-teal-800 font-semibold cursor-pointer flex justify-between ">
          <span className=" underline underline-offset-8">Explore More</span>
        </div>
      </div>
    </div>
  );
};

const PopularFeed = ({ tourType }) => {
  const { tours } = useFilteredTours(tourType);
  return (
    <Slider
      pagination={{
        clickable: true,
        renderBullet: function (_, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      }}
    >
      {tours.map((popcard) => (
        <SwiperSlide key={popcard.id} className="!h-auto min-h-full">
          <PopularCard popular={popcard} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

const TripSale = () => {
  return (
    <section className="py-10">
      <div className="bg-[#276C76] px-16 py-12 lg:px-4 rounded-2xl text-white ">
        <div className="flex lg:flex-col lg:text-center items-center justify-between gap-y-4 xl:gap-x-4">
          <div>
           <img src={sale} alt="sale" className="w-[70px]"loading="lazy"/>
          </div>
          <div>
            <h1 className="text-4xl lg:text-3xl font-semibold pb-2">
              20% Sale
            </h1>
            <p className="text-2xl lg:text-xl pt-2">
              Enjoy Our Summer sale on trips to Hurgada and Sharm el Sheikh.
            </p>
          </div>
          <div>
            <button className="bg-[#dbf17c] hover:bg-[#d9ea8b] text-xl font-semibold text-[#095763]  py-3 px-16 lg:py-2 lg:px-10 rounded-full">
              Get offer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
