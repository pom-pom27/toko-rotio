import { create } from "zustand";

type Store = {
  pesanan: TPesanan[];
  tambahPesanan: (pesananBaru: TPesanan) => void;
  getPesananWhatsapp: () => TPesanan[];
  getPesananCall: () => TPesanan[];
  getPesananEmail: () => TPesanan[];
};

export type TsumberPesanan = "whatsapp" | "call" | "email";

export type TPesanan = {
  nama: string;
  email: string;
  noHp: string;
  jumlahRoti: string;
  sumberPesanan: "whatsapp" | "call" | "email";
  keterangan: string;
};

const dummyPesanan: TPesanan[] = [
  {
    nama: "Selja",
    email: "selja@gmail.com",
    jumlahRoti: "5",
    keterangan: "",
    noHp: "08923727",
    sumberPesanan: "whatsapp",
  },
  {
    nama: "Selja",
    email: "selja@gmail.com",
    jumlahRoti: "5",
    keterangan: "",
    noHp: "08923727",
    sumberPesanan: "call",
  },
  {
    nama: "Selja",
    email: "selja@gmail.com",
    jumlahRoti: "5",
    keterangan: "",
    noHp: "08923727",
    sumberPesanan: "email",
  },
];

export const useRotioState = create<Store>()((set, get) => ({
  pesanan: dummyPesanan,
  tambahPesanan: (pesananBaru: TPesanan) =>
    set((state) => ({ pesanan: [...state.pesanan, pesananBaru] })),
  getPesananCall: () =>
    get().pesanan.filter((item) => item.sumberPesanan === "call"),
  getPesananEmail: () =>
    get().pesanan.filter((item) => item.sumberPesanan === "email"),
  getPesananWhatsapp: () =>
    get().pesanan.filter((item) => item.sumberPesanan === "whatsapp"),
}));
