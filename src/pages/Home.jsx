import {
  Button,
  RadioFilter,
  DropDownFilter,
  Header,
  FoodCard,
} from "../components";

const Home = () => {
  const restaurants = [
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: true,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: false,
    },
    {
      img: "",
      title: "this is title",
      rating: 4,
      resType: "THAI",
      level: "$$$",
      isOpen: true,
    },
  ];

  return (
    <main className="mx-auto w-[896px]">
      {/* Header */}
      <Header title="Restaurants" />

      {/* filters */}
      <section className="border-y-[1px] border-gray-100 flex justify-between gap-3 py-6 mb-20">
        <span className="flex gap-6">
          <p>Filter by: </p>
          <RadioFilter />
          <DropDownFilter />
          <DropDownFilter />
        </span>
        <Button
          text="clear all"
          bgColor="bg-white"
          color="text-accent-blue"
          addClass="border-[1px] border-gray-200"
          clicked={() => {}}
        />
      </section>

      {/* cards */}
      <section>
        <h3 className="mb-6">All Restaurants</h3>
        <ul className="flex flex-wrap gap-6">
          {restaurants.map((item, index) => (
            <FoodCard
              key={index}
              img={item.img}
              title={item.title}
              rating={item.rating}
              level={item.level}
              resType={item.resType}
              isOpen={item.isOpen}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
