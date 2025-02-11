import Logo from "../../assets/logo-footer.svg";
import Container from "../../UI/Container";
import {
  Sms,
  Call,
  Location,
  ArrowRight2,
  Facebook,
  Instagram,
  Whatsapp,
  Twitch,
} from "iconsax-react";
export default function Footer() {
  const footLinks = [
    "Home",
    "Destinations",
    "About us",
    "FAQ",
    "Top Destinations",
  ];
  return (
    <div className="bg-[#06414A] py-40">
      <Container>
        <div className="flex md:flex-col md:items-start md:pl-6 items-center gap-x-40 gap-y-20">
          <div>
            <img src={Logo} className="w-70 h-20" />
          </div>
          <div>
            <h3 className="text-[#C3FD4A] text-xl pb-4">Contact</h3>
            <div className="text-lg text-white space-y-2 pb-6">
              <div className="flex items-center space-x-4">
                <Sms size="24" color="#E1E8EA" variant="Bold" />
                <p>Info@Touresca.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Call size="24" color="#E1E8EA" variant="Bold" />
                <p>+20108598345678</p>
              </div>
              <div className="flex items-center space-x-4">
                <Location size="24" color="#E1E8EA" variant="Bold" />
                <p>Lorem ipsum,Lorem ipsum</p>
              </div>
            </div>
            <div className="flex gap-x-4 pl-4">
              <Facebook
                size="30"
                color="#E1E8EA"
                variant="Bold"
                className="cursor-pointer"
              />
              <Instagram
                size="30"
                color="#E1E8EA"
                variant="Bold"
                className="cursor-pointer"
              />
              <Whatsapp
                size="30"
                color="#E1E8EA"
                variant="Bold"
                className="cursor-pointer"
              />
              <Twitch
                size="30"
                color="#E1E8EA"
                variant="Bold"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <ul className="text-lg text-white space-y-2 ">
              {footLinks.map((link, index) => (
                <div className="flex">
                  <ArrowRight2 size="24" color="#E1E8EA" variant="Bold" />
                  <li
                    key={index}
                    className="hover:text-[#C3FD4A] cursor-pointer"
                  >
                    {link}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
