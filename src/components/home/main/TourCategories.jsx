import giza from "../../../assets/giza.png";
import luxor from "../../../assets/luxor.png";
export default function TourCategories() {
  return (
    <div className="relative">
      <div className="pb-8">
        <h1 className="text-[40px] font-semibold text-[#095763] lg:text-2xl">
          Tour Categories
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
        <div className="relative rounded-xl cursor-pointer overflow-hidden group">
          <img
            src={giza}
            className="w-full h-full object-cover max-h-[350px]  transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white text-3xl font-semibold">One Day Tour</span>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden cursor-pointer group">
          <img
            src={luxor}
            className="w-full h-full object-cover max-h-[350px] transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="text-white text-3xl font-semibold">Multi Days Tour</span>
          </div>
        </div>
      </div>
    </div>
  );
}
