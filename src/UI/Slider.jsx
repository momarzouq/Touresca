import { Swiper} from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

export default function Slider({ children, ...props }) {
  return (
    <Swiper
      {...props}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
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
      className="mySwiper !pb-16 items-stretch"
    >
      {children}
    </Swiper>
  );
}

