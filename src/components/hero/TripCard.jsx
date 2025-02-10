import { useContext, createContext } from "react";

const TripContext = createContext({
  imgSrc: "",
  title: "",
  subtitle: "",
  description: "",

});

export default function TripCard({ children, trip, className }) {
  return (
    <TripContext.Provider value={trip}>
      <div
        style={{
          backgroundImage: `url(${trip.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`relative rounded-2xl overflow-hidden h-[450px] cursor-pointer ${className}`}
      >
        {children}
      </div>
    </TripContext.Provider>
  );
}
TripCard.H1 = ({ className }) => {
  const { title } = useTrip();
  return <h1 className={`text-2xl font-semibold  ${className}`}>{title}</h1>;
};
TripCard.H2 = ({ className }) => {
  const { title } = useTrip();
  return <h2 className={className}>{title}</h2>;
};


TripCard.D = ({ className }) => {
  const { subtitle } = useTrip();
  return <h2 className={className}>{subtitle}</h2>;
};
TripCard.P = ({ className }) => {
  const { description } = useTrip();
  return <p className={className}>{description}</p>;
};

TripCard.Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};
TripCard.OverLay = ({ className, children }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full z-[10] bg-gradient-to-t
         from-black/60 via-transparent to-transparent text-white
          flex flex-col justify-end px-8 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export const useTrip = () => {
  return useContext(TripContext);
};
