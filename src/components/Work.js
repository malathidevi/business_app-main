import Image from "next/image";

const WorkCard = ({ num, title }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-1xl w-fit font-bold text-rose-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
    </div>
  );
};

const Work = () => {
  return (
    <section className="w-full bg-blue-400 text-rose ">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-black-200">
            WHATS THE FUNCTION
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Let&apos;s see how it works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <WorkCard num="01" title="Fund Distribution Guidelines" />
            <p className="leading-loose">
              Detailed instructions on how to appropriately allocate and distribute funds.including required documentation.
            </p>
          </div>

          <div className="relative">
            <WorkCard num="02" title="Assembly Fund Retrieval Process" />
            <p className="leading-loose">
              Assembly retrieves funds from your account. It covers the specific steps, including authorization requirements.
            </p>
          </div>

          <div className="relative">
            <WorkCard num="03" title="Initiating Assembly Payments" />
            <p className="leading-loose">
              Assembly begins the process of making payments. It covers how payments are initiated.
            </p>
          </div>

          <div className="relative">
            <WorkCard num="04" title="Customer Fund Receipt Process" />
            <p className="leading-loose">
              It covers the procedures and timelines involved in fund disbursement, including notification methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
