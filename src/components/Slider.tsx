import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <img src="https://images.pexels.com/photos/6792349/pexels-photo-6792349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <img src="https://images.pexels.com/photos/6399508/pexels-photo-6399508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <img src="https://images.pexels.com/photos/6399509/pexels-photo-6399509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </Slider>
  );
}
