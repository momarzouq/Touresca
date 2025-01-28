import {
  Location,
  Timer1,
  DollarCircle,
  SearchNormal1,
  Calendar,
  ArrowDown2,
} from "iconsax-react";
export default function TripSearch() {
  return (
    <div className=" w-full max-w-6xl mx-auto px-4">
      <div className=" lg:hidden overflow-hidden bg-white/90 backdrop-blur-lg rounded-[30px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(200,230,119,0.3)] transition-all duration-500 border border-white/20">
        <form className=" flex items-center justify-between py-4 px-6 bg-white/90 text-teal-900">
          {/* Location */}
          <div className="relative select  flex items-center">
            <div className="absolute left-2">
              <Location size="24" />
            </div>
            <select className="pl-8 rounded-xl py-3 px-6 hover:bg-lime-50">
              <option value="cairo"> Cairo</option>
              <option value="luxor">Luxor</option>
              <option value="alexandria">Alexandria</option>
              <option value="aswan">Aswan</option>
            </select>
          </div>
          {/* Date */}
          <div className="relative select flex items-center px-4 hover:bg-lime-50 gap-2">
            <Calendar size="26" />
            <div className="absolute right-5">
              <ArrowDown2  size="18" />
            </div>
            <input type="date" className="bg-transparent rounded-xl py-3 " />
          </div>
          {/* Deuration */}
          <div className="relative select flex items-center">
            <div className="absolute left-2">
              <Timer1 size="26" />
            </div>
            <select className="pl-8 rounded-xl py-3 px-6 hover:bg-lime-50">
              <option value="duration">Duration</option>
              <option value="3">3 Day</option>
              <option value="5">5 Day</option>
              <option value="7">7 Day</option>
              <option value="10">10 Day</option>
            </select>
          </div>
          {/* Price */}
          <div className="relative select flex items-center">
            <div className="absolute left-1">
              <DollarCircle size="24" />
            </div>
            <select className="pl-8 rounded-xl py-3 px-6 hover:bg-lime-50">
              <option value> Price</option>
              <option value="luxor">Budget</option>
              <option value="alexandria">Comfort</option>
              <option value="aswan">Luxury</option>
            </select>
          </div>
          <button className="flex items-center bg-gradient-to-r from-[#C8E677] to-[#9BE677] py-[14px] px-8 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
            <span>Search</span>
            <SearchNormal1 className="pl-2" size="26" />
          </button>
        </form>
      </div>
    </div>
  );
}
