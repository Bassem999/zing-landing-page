import prod1 from "../assets/prod-1.png";
import prod2 from "../assets/prod-2.png";
import prod3 from "../assets/prod-3.png";
import prod4 from "../assets/prod-4.png";

export default () => {
  const cardData = [
    {
      title: "mission",
      paragraph: "It makes people at ease and feel like they want to open up.",
    },
    {
      title: "motivation",
      paragraph: "The perfect mix of art that complements the room's style.",
    },
    {
      title: "vision",
      paragraph:
        "Along with a healthy dose of negative space to give the eyes spots to rest.",
    },
    {
      title: "goal",
      paragraph: "Art that has meaning to the people who live in the space,",
    },
  ];
  return (
    <section className="container py-20 ">
      <div className="mb-20">
        <h3 className="text-primary text-6xl font-bold mb-6">About us</h3>
        <p className="text-gray-600 w-[470px] text-lg">
          Comfort is key and how you feel about your chair will affect how you
          feel and your mood.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
        <div className="grid grid-cols-2 gap-10 self-start">
          {cardData.map(({ title, paragraph }, i) => (
            <Card key={i} title={title} paragraph={paragraph} n={i + 1} />
          ))}
        </div>
        <div className="flex space-x-6 justify-center">
          <div className="space-y-6 ">
            <img src={prod1} alt="" />
            <img src={prod2} alt="" />
          </div>
          <div className="space-y-6 lg:-translate-y-16">
            <img src={prod3} alt="" />
            <img src={prod4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ n, title, paragraph }) => {
  return (
    <div className="space-y-4">
      <div className="text-6xl text-secondary font-bold">{n}</div>
      <h4 className="text-2xl text-primary font-bold capitalize">{title}</h4>
      <p className="text-gray-400">{paragraph}</p>
    </div>
  );
};
