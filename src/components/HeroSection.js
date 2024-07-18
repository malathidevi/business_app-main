import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/ container px-5 md:px-12 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-4xl  font-bold">
          <p>Welcome to Creatorships </p>
          <p>products to explore</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-6 md:my-6">
        It enables creators to turn attention into long-term returns and provides businesses with innovative marketing opportunities.
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-transparent hover:text-rose-600 rounded-full">
          <Link href="https://pickbazar-graphql.redq.io/clothing" target="_blank">
            Explore
          </Link>
        </button>
      </div>
      <div className="w-full relative">
        <div className>
          <Image
            src={"/eshop.jpg"}
            width={1300}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
