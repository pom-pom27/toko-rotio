import { useRotioState } from "../globalState";

interface ITable {}

const Table = ({}: ITable) => {
  const pesanan = useRotioState((state) => state.pesanan);
  return (
    <div className="w-full rounded-lg p-4  bg-white">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nomor HP</th>
              <th>Jumlah Roti</th>
              <th>Sumber Pesanan</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {pesanan.map((pesananItem, idx) => (
              <tr className="text-center" key={idx}>
                <th>{idx + 1}</th>
                <td className="capitalize">{pesananItem.nama} </td>
                <td>{pesananItem.email}</td>
                <td>{pesananItem.noHp}</td>
                <td>{pesananItem.jumlahRoti}</td>
                <td className="capitalize">{pesananItem.sumberPesanan}</td>
                <td className="capitalize">
                  {pesananItem.keterangan.length !== 0
                    ? pesananItem.keterangan
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
