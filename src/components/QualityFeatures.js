import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">Product Functionality
      </span>
      <h2 className="title text-center ">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Customization Options"
          desc="Detail personalized services that cater to individual customer preferences.Showcase flexibility in product configurations, packaging, or delivery schedules."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Tailored Solutions"
          desc="Highlight responsive assistance available throughout the shopping journey.Describe channels for inquiries, issue resolution, and post-purchase support"
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Brand Perception"
          desc="Explore how design aesthetics and consistency across platforms strengthen brand identity.Evaluate customer feedback and market perception influenced by design choices."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Performance Metrics"
          desc="Provide insights into the product's efficiency, speed, and reliability.Highlight any unique features or technological advantages that set it apart in the market."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
