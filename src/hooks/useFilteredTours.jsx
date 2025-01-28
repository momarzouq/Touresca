import luxor from "../assets/luxor.png";
import giza from "../assets/giza.png";
import nile from "../assets/nile.png";

export function useFilteredTours(tourType) {
  const popcards = [
    {
      id: 1,
      image: [luxor, giza, nile],
      rating: 5,
      hint: "Best seller",
      title: "Luxor Trips",
      duration: "Day",
      description:
        "Explore the beauty of Aswan. Discover its historical and cultural heritage.",
      budget: "Start from $100",
    },
    {
      id: 2,
      image: [luxor, giza, nile],
      rating: 5,
      hint: "Best seller",
      title: "Aswan Trips",
      duration: "Day",
      description:
        "Explore the beauty of Aswan. Discover its historical and cultural heritage.",
      budget: "Start from $100",
    },
    {
      id: 3,
      image: [luxor, giza, nile],
      rating: 4.8,
      hint: "NEW",
      title: "Cairo Tours",
      duration: "Multi-Day",
      description:
        "Experience the capital's vibrancy with guided tours of iconic landmarks.",
      budget: "Start from $100",
    },
    {
      id: 4,
      image: [luxor, giza, nile],
      rating: 4.8,
      hint: "NEW",
      title: "Nile Cruises",
      duration: "Multi-Day",
      description:
        "Sail along the Nile River and enjoy breathtaking views and ancient sites.",
      budget: "Start from $100",
    },
    {
      id: 5,
      image: [luxor, giza, nile],
      rating: 5,
      hint: "Best seller",
      title: "Siwa Oasiss",
      duration: "Day",
      description:
        "Relax in the serene beauty of Siwa Oasis, surrounded by nature.Relax in the serene beauty of Siwa Oasis, surrounded by nature.",
      budget: "Start from $100",
    },
  ];

  return {
    tours: popcards.filter((tour) => {
      if (tourType === "All") return true;
      return tour.duration === tourType;
    }),
  };
}
