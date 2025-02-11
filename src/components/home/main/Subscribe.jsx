import { Sms } from "iconsax-react";
import Container from "../../../UI/Container";
import plan from "../../../assets/sub-plan.svg";
import plan2 from "../../../assets/sub-plan2.svg";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!email) {
      setError("Email is required.");
    } else if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear error if valid email
      // Submit logic here
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <div className="bg-[#276C76] py-20">
      <Container className="relative flex flex-col items-center gap-8">
        <h2 className="text-5xl text-[#C5FF4A] font-berkshire md:text-4xl">
          Subscribe Now
        </h2>
        <p className="text-2xl text-white text-center md:text-sm">
          Enter your e-mail to Subscribe and get exclusive deals & offer
        </p>

        <div className="flex relative bg-white items-center rounded-full max-w-[600px] md:max-w-[400px] w-full px-3 py-2 gap-2">
          <Sms
            size="24"
            color="#666666"
            variant="Bold"
            className="flex shrink-0"
          />
          <input
            type="email"
            placeholder="E-mail"
            className={`flex-1 py-1 outline-none ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="absolute right-2 bg-[#DBF17C] hover:bg-[#d9ea8b] text-teal-950 rounded-full px-4 py-2"
          >
            Subscribe
          </button>
        </div>

        {error && <p className="text-red-500 text-[18px] mt-2">{error}</p>}

        <img
          src={plan}
          alt="Plan"
          className="absolute left-6 top-20 lg:w-[100px] md:top-1"
        />
        <img
          src={plan2}
          alt="Plan"
          className="absolute right-6 lg:w-[100px]"
        />
      </Container>
    </div>
  );
}
