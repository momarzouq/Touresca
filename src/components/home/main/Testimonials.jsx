import elias from "../../../assets/elias.png";
import theresa from "../../../assets/theresa.png";
import wade from "../../../assets/wade.png";
import { Star1 } from "iconsax-react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMemo } from "react";
import Slider from "../../../UI/Slider";
import { Autoplay, Pagination } from "swiper/modules";
export default function Testimonials() {
  const testimonialsData = useMemo(
    () => [
      {
        img: wade,
        rating: 4.75,
        name: "Wade Warren",
        description: "Awesome website and funnel for your business ",
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
      <Slider
        slidesPerView={4}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: function (_, className) {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonialsData.map((feature, index) => (
          <SwiperSlide
            key={index}
            className=" bg-[#FBFEF3] !h-auto min-h-full border rounded-2xl text-center py-8 space-y-2 lg:cursor-pointer"
          >
            <TestimonialsCard {...feature} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
}

const TestimonialsCard = ({ img, rating, name, description }) => {
  return (
    <>
      <div className="flex justify-center protect-img">
        <img
          src={img}
          alt={name}
          className="max-w-[90px] rounded-full border-[3px] border-[#C4EB0D]"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Star1 size="18" color="#FFB800" className="fill-[#FFB800]" />
        <p className="font-semibold text-lg">{rating}</p>
      </div>
      <h1 className="text-xl font-weight text-zinc-500">{name}</h1>
      <p className="text-gray-500 text-sm px-10 lg:px-14">{description}</p>
    </>
  );
};
