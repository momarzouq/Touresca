import Container from "../../../UI/Container";
import PopularCard from "./PopularCard";
import { useState } from "react";
import { useFilteredTours } from "../../../hooks/useFilteredTours";
import Slider from "../../../UI/Slider";
import { SwiperSlide } from "swiper/react";

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
      </Container>
    </div>
  );
}

const PopularTour = ({ handleFilter, tourType }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-[42px] text-teal-950  font-semibold lg:text-3xl pt-14">
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
