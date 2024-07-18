import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Product Features Showcase
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="It ensures quick loading times and smooth user experiences, leading to higher customer satisfaction and retention. It also reduces bounce rates and boosts conversion rates,"
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Partnership deal"
          desc="A partnership deal in an e-shop can expand market reach, enhance product offerings, and improve brand visibility. And also provide access to new customer bases and shared marketing efforts."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="A Pro Subscription in an e-shop offers exclusive benefits like premium content, faster shipping, and special discounts. This enhances customer loyalty and provides a steady revenue stream."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Customer support in an e-shop is essential for resolving issues quickly, enhancing customer satisfaction, and building trust.Effective support services can lead to higher customer retention rates."
        />
      </div>
    </section>
  );
};

export default Features;
