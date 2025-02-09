import Container from "../../../UI/Container";
import TripCard from "./TripCard";
import luxor from "../../../assets/luxor.png";
import giza from "../../../assets/giza.png";
import nile from "../../../assets/nile.png";
import TripSearch from "./TripSearch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TripFilter from "./TripFilter";

// responsible of showing hero components...
export default function Hero() {
  return (
    <div className="flex-col gap-10 bg-gradient-to-b from-general to-[#BAD0B4] pb-10">
      <Container className="space-y-20">
        <HeroTeaser />
        <TripSearch />
        <TripFilter />
        <TripsFeed />
      </Container>
    </div>
  );
}

const HeroTeaser = () => {
  return (
    <div className="space-y-8 text-center">
      <h1 className="md:text-3xl font-semibold font-berkshire md:font-poppins pt-28 text-6xl text-[#C8E677]">
        <span className="text-3xl font-poppins font-semibold text-white">
          You
        </span>
        unforgettable adventure in Egypt
        <span className="text-3xl font-poppins font-semibold text-white">
          begins here.
        </span>
      </h1>
      <p className="md:hidden text-white text-2xl mx-auto max-w-[65%] leading-[160%]">
        Discover Egypt's history and culture with custom trips. Visit the
        Pyramids, sail the Nile, and explore famous sites and hidden spots with
        expert guides.
      </p>
    </div>
  );
};

const TripsFeed = () => {
  const trips = [
    {
      id: 1,
      imgSrc: luxor,
      title: "Luxor Trip",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quasi dolores cum totam sequi nostrum",
    },
    {
      id: 2,
      imgSrc: giza,
      title: "Giza Trip",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quasi dolores cum totam sequi nostrum",
    },
    {
      id: 3,
      imgSrc: nile,
      title: "Nile Trip",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quasi dolores cum totam sequi nostrum",
    },
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 5000, // Change slides every 3 seconds
        disableOnInteraction: false, // Keep autoplay working even after interaction
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay]}
      breakpoints={{
        0: {
          slidesPerView: 1, // For screens smaller than 420px
        },
        420: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      loop={true}
    >
      {trips.map((trip) => (
        <SwiperSlide key={trip.id}>
          <TripCard trip={trip}>
            <TripCard.OverLay>
              <TripCard.H1 />
              <TripCard.P />
            </TripCard.OverLay>
          </TripCard>
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <TripCard
          trip={{
            title: "Black Friday Offer",
            subtitle: "100$ off on all trips during November",
            description:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
          }}
          className="bg-[#095763] text-center px-4"
        >
          <TripCard.H1 className="text-4xl font-berkshire text-[#C6EB20] pt-16" />
          <TripCard.D className="text-xl text-white pt-8" />
          <TripCard.P className="text-gray-300 pt-8 pb-8" />
          <TripCard.Button className="bg-[#dbf17c] hover:bg-[#d9ea8b] text-xl font-semibold text-[#095763]  py-3 px-20 mt-8 rounded-full">
            Book Trip
          </TripCard.Button>
        </TripCard>
      </SwiperSlide>
    </Swiper>
  );
};
