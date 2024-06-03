import { useRotioState } from "../globalState";
import Card from "./Card";

interface ICardList {}

const CardList = ({}: ICardList) => {
  const totalCall = useRotioState((state) => state.getPesananCall);
  const totalWhatsapp = useRotioState((state) => state.getPesananWhatsapp);
  const totalEmail = useRotioState((state) => state.getPesananEmail);
  const total = useRotioState((state) => state.pesanan);

  const cards = [
    { name: "Whatsapp", number: totalWhatsapp().length },
    { name: "Call", number: totalCall().length },
    { name: "Email", number: totalEmail().length },
    { name: "Total", number: total.length },
  ];

  return (
    <div className="flex justify-evenly flex-wrap gap-3">
      {cards.map((item) => (
        <Card title={item.name} key={item.name} number={item.number} />
      ))}
    </div>
  );
};

export default CardList;
