import elias from "../../../assets/elias.png";
import theresa from "../../../assets/theresa.png";
import wade from "../../../assets/wade.png";
import { Star1 } from "iconsax-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import React from "react";
export default function Testimonials() {
  const testimonialsData = React.useMemo(
    () => [
      {
        img: wade,
        rating: 4.75,
        name: "Wade Warren",
        description: "Awesome website and funnel for your business",
      },
      {
        img: theresa,
        rating: 4.95,
        name: "Nicole Champlin",
        description: "Couldn’t agree more to this product! ",
      },
      {
        img: theresa,
        rating: 4.5,
        name: "Theresa Conroy",
        description: "I cannot believe my eyes, this is real!",
      },
      {
        img: elias,
        rating: 5,
        name: "Elias Watisca",
        description: "Super recommended product. You have to try!",
      },
    ],
    []
  );

  return (
    <div className="py-16">
      <div className="text-[40px] lg:text-2xl font-semibold text-[#095763]  pb-12">
        Testimonials
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonialsData.map((feature, index) => (
          <SwiperSlide key={index} className="!h-auto min-h-full">
            <TestimonialsCard {...feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const TestimonialsCard = ({ img, rating, name, description }) => {
  return (
    <div className=" bg-[#FBFEF3] shadow-lg rounded-2xl text-center py-6 space-y-2 ">
      <div className="flex justify-center protect-img">
        <img
          src={img}
          alt={name}
          className="max-w-[80px] rounded-full"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Star1 size="18" color="#FFB800" className="fill-[#FFB800]" />
        <p className="font-semibold text-lg">{rating}</p>
      </div>
      <h1 className="text-xl font-weight text-zinc-500">{name}</h1>
      <p className="text-gray-500 text-sm px-10 lg:px-14">{description}</p>
    </div>
  );
};
