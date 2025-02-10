import badge from "../../../assets/badge.svg";
import bag from "../../../assets/bag.svg";
import tourguide from "../../../assets/tourguide.svg";
export default function Features() {
  const featuresData = [
    {
      img: badge,
      title: "Quality and Safety",
      description:
        "From flights, stays, to sights, just count on our complete products.",
    },
    {
      img: bag,
      title: "Quality and Safety",
      description:
        "From flights, stays, to sights, just count on our complete products.",
    },
    {
      img: tourguide,
      title: "Quality and Safety",
      description:
        "From flights, stays, to sights, just count on our complete products.",
    },
  ];
  return (
    <div className="py-16">
      <div className="text-[40px] lg:text-2xl font-semibold text-[#095763] text-center pb-12">
        Why to choose{" "}
        <span className="font-berkshire text-6xl lg:text-3xl text-[#C8EC1F]">Touresca</span>
      </div>
      <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
        {featuresData.map((feature, index) => (
          <FeaturesCard
            key={index}
            featureDate={{
              img: feature.img,
              title: feature.title,
              description: feature.description,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const FeaturesCard = ({ featureDate: { img, title, description } }) => {
  return (
    <div className=" bg-[#F4F8F3] rounded-xl text-center py-6">
      <div className="flex justify-center pb-4 protect-img">
        <img src={img} />
      </div>
      <h1 className="text-xl font-weight text-[#105C68]">{title}</h1>
      <p className="text-gray-600 text-lg py-4 px-10 md:px-14">{description}</p>
    </div>
  );
};
