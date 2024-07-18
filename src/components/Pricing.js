"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-rose-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail, onClick }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="Html & CSS" />
        <Plan title="Javascript" />
        <Plan title="Mern Stack" />
        <Plan title="MySql & UI/UX" />
      </div>
      <div className="mx-auto">
        <h2 className="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span className="text-lg ml-1 font-normal text-neutral-500">/Weekly</span>
        </h2>
        <button 
          className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full"
          onClick={onClick}
        >
          {btnText}
        </button>
        {trail && (
          <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
            {trail}
          </span>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Weekly Plan");
  const [showModal, setShowModal] = useState(false);
  const [formDetails, setFormDetails] = useState({ name: '', email: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formDetails.name === '' || formDetails.email === '') {
      setFormError('Please enter valid values');
      setFormSuccess('');
    } else {
      setFormError('');
      setFormSuccess('Account created successfully');
    }
  };

  const handleButtonClick = () => {
    setShowModal(true);
    setFormError('');
    setFormSuccess('');
  };

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center ">Subscription Plans</span>
        <h2 className="title text-center ">Select Your Pricing Strategy</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${
            plan === "Weekly Plan" ? "left-2" : "left-[150px] w-[128px]"
          } transition-all duration-500 absolute top-[.37rem] h-[55px] w-[138px] rounded-full bg-rose-600`}
        ></div>
        <button
          onClick={() => setPlan("Weekly Plan")}
          className={`
          ${plan === "Weekly Plan" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Weekly Plan
        </button>
        <button
          onClick={() => setPlan("Monthly Plan")}
          className={`
          ${plan === "Monthly Plan" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Monthly Plan
        </button>
      </div>

      {plan === "Weekly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Basic developer"
            title="For Small teams or office"
            price="10"
            btnText="Start Free Trial"
            onClick={handleButtonClick}
          />
          <PricingCard
            name="Intermediate Developer"
            title="For intermediate developers"
            price="20"
            btnText="Create Account"
            trail="Or Start 14 Days trial"
            onClick={handleButtonClick}
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Advanced Developer"
              title="For pro level developers"
              price="50"
              btnText="Create Account"
              trail="Or Start 14 Days trial"
              onClick={handleButtonClick}
            />
          </div>
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Free Plan"
            title="For Small teams or office"
            price="30"
            btnText="Start Free Trial"
            onClick={handleButtonClick}
          />
          <PricingCard
            name="Business/Company"
            title="For Enterprise business"
            price="25"
            btnText="Create Account"
            trail="Or Start 10 Days trial"
            onClick={handleButtonClick}
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Pro Master"
              title="For pro level developers"
              price="40"
              btnText="Create Account"
              trail="Or Start 10 Days trial"
              onClick={handleButtonClick}
            />
          </div>
        </Carousel>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
                value={formDetails.name}
                onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={formDetails.email}
                onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
              />
              <button 
                type="submit" 
                className="bg-rose-600 text-white p-2 rounded hover:bg-rose-700 transition">
                Submit
              </button>
            </form>
            {formError && <p className="text-red-500 mt-4">{formError}</p>}
            {formSuccess && <p className="text-green-500 mt-4">{formSuccess}</p>}
            <button 
              className="mt-4 text-gray-500 hover:text-gray-700 transition"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;

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
