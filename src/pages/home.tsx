import CardList from "../components/CardList";
import Table from "../components/Table";

interface IHomepage {}

const Homepage = ({}: IHomepage) => {
  return (
    <div className="w-full flex flex-col gap-10">
      <CardList />
      <Table />
    </div>
  );
};

export default Homepage;
