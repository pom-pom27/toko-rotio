interface ICard {
  title: string;
  number: number;
}

const Card = ({ title, number }: ICard) => {
  return (
    <div
      className={` w-56 rounded-lg h-28 flex justify-evenly items-center flex-wrap text-white ${title.toLowerCase()}`}
    >
      <h1 className="text-lg font-semibold">{title}:</h1>
      <h2 className="text-3xl font-bold">{number}</h2>
    </div>
  );
};

export default Card;
