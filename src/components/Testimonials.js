import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc, paragraph, name }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">{paragraph}</p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <Link
            href="https://github.com/malathidevi"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @malathidevi
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIALS</span>
        <h2 className="title text-center ">Exceed Client Expectations</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Contemporary Aesthetics & Cutting-Edge Design"
            paragraph="Stay ahead with a sleek, modern look that captures the latest design trends. Elevate your brand with visually appealing elements that resonate with today's audience."
            name="Daniel Roy"
            imgSrc="/testimonials/img1.jpg"
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Structured Layout & Layered Organization"
            paragraph="Achieve a well-organized layout with structured layers, ensuring easy navigation and a seamless user experience.Each layer is thoughtfully organized for a seamless."
            name="John Doe"
            imgSrc="/testimonials/img2.jpeg"
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Design Quality & Performance"
            paragraph="Experience top-notch design quality and outstanding performance, tailored to meet your business needs.Stay ahead with a sleek, modern look that captures the latest design trends"
            name="John Samuel"
            imgSrc="/testimonials/img3.jpeg"
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and Organized Layers"
            paragraph="Our design offers a structured layout with organized layers, providing clarity and ease of use for all users."
            name="Emily Johnson"
            imgSrc="/testimonials/img4.jpg"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
