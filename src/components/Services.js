"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/girl.jpeg"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
          <button className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={"https://www.youtube.com/watch?v=I3jCsVgf564&list=PLhFBHuT4t3aBL59pIGo13H4tUVzS_GlYm"} target="_blank">
            
              <PlayArrowIcon className="w-10 h-10 md:w-20 md:h-20 textblack bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
            Service Offerings
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-center ">
            Design Impact on Business Goals
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Smart Features"
            desc="Smart features in an e-shop leverage technology to enhance user experience and operational efficiency. These may include AI-driven product recommendations, personalized shopping "
          />
          <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Secure Contents"
            desc="Secure content in an e-shop ensures the protection of sensitive customer information, such as payment details and personal data, from unauthorized access."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
