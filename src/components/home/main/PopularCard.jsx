import {
  TimerStart,
  ArrowCircleRight2,
  DollarCircle,
  Star1,
  ArrowLeft2,
  ArrowRight2,
} from "iconsax-react";
import { useState } from "react";

export default function PopularCard({ popular }) {
  const [swip, setSwip] = useState(0);

  const prev = () => {
    setSwip((prevSwip) =>
      prevSwip === 0 ? popular.image.length - 1 : prevSwip - 1
    );
  };

  const next = () => {
    setSwip((prevSwip) =>
      prevSwip === popular.image.length - 1 ? 0 : prevSwip + 1
    );
  };

  return (
    <div className="h-full border rounded-2xl overflow-hidden cursor-pointer space-y-6 pb-4 flex flex-col justify-between">
      {/* Image slider */}
      <div className="relative flex items-end max-h-[270px] overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${swip * 100}%)`,
          }}
        >
          {popular.image.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Navigation buttons */}
        <div className="absolute bottom-2 right-2 bg-[#F8ECDF]/70 py-1 px-2 rounded-lg flex gap-2 items-center">
          <button onClick={prev} >
            <ArrowLeft2 size="20" color="#267680"/>
          </button>
          <span className="text-[15px] text-teal-950">
            {swip + 1}/{popular.image.length}
          </span>
          <button onClick={next}>
            <ArrowRight2 size="20" color="#267680"/>
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-0 pt-3 pl-4 flex justify-between w-full pr-4">
          <span className="bg-[#C0E622] text-[12px] font-weight text-teal-900 rounded-full py-1 px-3">
            {popular.hint}
          </span>
          <span className="bg-[#F8ECDF] text-[12px] font-weight text-teal-900 rounded-full py-1 px-3">
            <div className="flex gap-1 items-center">
              <Star1 size="16" color="#FFB800" /> {popular.rating}
            </div>
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="pl-4">
        <h1 className="text-xl font-semibold">{popular.title}</h1>
        <p className="pt-2 text-sm text-gray-600">{popular.description}</p>
        {/* Duration */}
        <div className="relative flex items-end ">
          <div className="pr-2 text-gray-600">
            <TimerStart size="22" />
          </div>
          <p className="pt-4 text-gray-600">{popular.duration}</p>
        </div>
        {/* Budget */}
        <div className="relative flex items-end">
          <div className="pr-2 text-gray-600">
            <DollarCircle size="22" />
          </div>
          <p className="pt-4 text-gray-600">{popular.budget}</p>
        </div>
      </div>

      {/* Book now */}
      <div className="relative flex items-center justify-end pt-2 pr-4 group">
        <button className="pr-2 text-teal-800 font-semibold ">Book now</button>
        <ArrowCircleRight2
          className="text-teal-600 transition-transform duration-300 transform group-hover:translate-x-1"
          size="26"
        />
      </div>
    </div>
  );
}
