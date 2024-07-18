import Image from "next/image";
import Link from "next/link";

const CoreFeatures = () => {
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-rose-600 uppercase block font-semibold tracking-widest">
          Essential E-Shop Capabilities
        </span>
        <h2 className="capitalize text-2xl md:text-3xl xl:text-3xl font-bold my-3">
          Must-Have E-Shop Features You Can Rely On Anytime, Anywhere
        </h2>
        <p className="text-lg leading-loose">
          An e-commerce business, ensuring efficient product management, secure payment processing, and effective customer relationship management. They enable streamlined operations, enhance customer satisfaction,
        </p>
        <Link href="https://pickbazar-graphql.redq.io/clothing" target="_blank">
          <button className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-blue-600 hover:bg-blue-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="flex-1 relative w-full">
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"/features/women.avif"}
            width={500}
            height={400}
            alt="core features"
            className="object-cover w-full md:w-[100%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
