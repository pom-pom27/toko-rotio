import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RotioInput from "../components/RotioInput";
import RotioSelecInput from "../components/RotioSelecInput";
import { TsumberPesanan, useRotioState } from "../globalState";

interface IPesanan {}

const Pesanan = ({}: IPesanan) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [jumlahRoti, setJumlahRoti] = useState("");
  const [sumberPesanan, setSumberPesanan] =
    useState<TsumberPesanan>("whatsapp");
  const [keterangan, setKeterangan] = useState("");

  const navigate = useNavigate();

  const tambahPesanan = useRotioState((state) => state.tambahPesanan);

  const onSubmit = () => {
    const pesananBaru = {
      nama,
      email,
      noHp,
      jumlahRoti,
      sumberPesanan,
      keterangan,
    };

    tambahPesanan(pesananBaru);

    navigate("/");
  };

  return (
    <form
      className="flex max-w-xl py-4 rounded-lg mx-auto bg-white  justify-center flex-col items-center gap-2"
      onSubmit={onSubmit}
    >
      <h1 className="font-bold text-xl my-1">Pesanan Form</h1>
      <RotioSelecInput
        title="Sumber Pesanan"
        value={sumberPesanan}
        setValue={setSumberPesanan}
      />
      <RotioInput title="Nama" value={nama} setValue={setNama} />
      <RotioInput
        title="Email"
        value={email}
        setValue={setEmail}
        type="email"
      />
      <RotioInput
        type="number"
        title="Nomor Handphone"
        value={noHp}
        placeholder="08..."
        setValue={setNoHp}
      />
      <RotioInput
        title="Jumlah Roti"
        type="number"
        value={jumlahRoti}
        setValue={setJumlahRoti}
      />
      <RotioInput
        title="Keterangan"
        value={keterangan}
        variant="textarea"
        isRequired={false}
        setValue={setKeterangan}
      />

      <button className="btn btn-info text-white mb-3 w-1/3">Submit</button>
    </form>
  );
};

export default Pesanan;
