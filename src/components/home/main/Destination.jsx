import giza from "../../../assets/giza.png";
import luxor from "../../../assets/luxor.png";
import nile from "../../../assets/nile.png";
export default function Destination() {
  return (
    <div>
      <div className="flex items-center justify-between pb-8">
        <div className="text-[42px] lg:text-2xl text-[#095763] font-semibold">
          <h1>Our Trip Destination</h1>
        </div>
        <div>
          <div className="text-teal-800 font-semibold cursor-pointer lg:text-sm">
            <span className=" underline underline-offset-8">Explore More</span>
          </div>
        </div>
      </div>
      {/* Grid Image */}
      <div className="grid grid-cols-5 grid-rows-2 gap-6 md:grid-cols-1">
        <LocationCard
          tripData={{ img: nile, location: "Cairo", tripsCount: "8 Trips" }}
          className="col-start-1 col-end-2 row-start-1 row-end-2"
        />
        <LocationCard
          tripData={{ img: luxor, location: "Luxor", tripsCount: "8 Trips" }}
          className="col-start-1 col-end-2 row-start-2 row-end-3"
        />
        <LocationCard
          tripData={{ img: giza, location: "Giza", tripsCount: "8 Trips" }}
          className="col-start-2 col-end-4 row-start-1 row-end-3"
        />
        <LocationCard
          tripData={{ img: luxor, location: "Hurgada", tripsCount: "8 Trips" }}
          className="col-start-4 col-end-6 row-start-1 row-end-2"
        />
        <LocationCard
          tripData={{ img: nile, location: "Cairo", tripsCount: "8 Trips" }}
          className="col-start-4 col-end-6 row-start-2 row-end-3"
        />
      </div>
    </div>
  );
}
const LocationCard = ({
  className,
  tripData: { img, location, tripsCount },
}) => {
  return (
    <a
      href="#"
      className={`relative md:col-auto md:row-auto md:max-h-[300px] protect-img  ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t
         from-black/60 via-transparent to-transparent rounded-xl"></div>
      <img src={img} className="rounded-xl w-full h-full object-cover " />
      <div className="absolute  text-white bottom-4 left-5 space-y-2">
        <h1 className="text-xl font-semibold">{location}</h1>
        <p className="bg-[#D6DDE0] text-[#095763] rounded-full text-sm px-4 py-1">
          {tripsCount}
        </p>
      </div>
    </a>
  );
};
