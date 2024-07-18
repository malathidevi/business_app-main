import Image from "next/image";

const Card = ({ imgSrc, title, description, link, btnText }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-rose-600 transition-colors"
      >
        {btnText}
      </a>
    </div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <Card
          imgSrc="/community/img-2.jpeg"
          title="LinkedIn"
          description="Connect with us on LinkedIn."
          link="https://www.linkedin.com/in/t-malathi-devi-5928b3228/"
          btnText="Visit"
        />
        <Card
          imgSrc="/community/img-1.png"
          title="Email"
          description="Send us an email."
          link="mailto:tulasidevi246@gmail.com"
          btnText="Send Email"
        />
        <Card
          imgSrc="/community/3.svg"
          title="Github Access"
          description="Access our projects on Github."
          link="https://github.com/malathidevi"
          btnText="Visit"
        />
      </div>
    </section>
  );
};

export default Community;
