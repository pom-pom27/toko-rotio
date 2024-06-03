import { TsumberPesanan } from "../globalState";

interface IRotioSelecInput {
  title: string;
  value: string;
  setValue: (value: TsumberPesanan) => void;
  isRequired?: boolean;
  options?: string[];
}

const RotioSelecInput = ({
  setValue,
  title,
  value,
  isRequired = true,
  options = ["whatsapp", "call", "email"],
}: IRotioSelecInput) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-bold">{title}</span>
        {/* <span className="label-text-alt">Alt label</span> */}
      </div>
      <select
        className="select select-bordered"
        value={value}
        onChange={(e) => setValue(e.target.value as TsumberPesanan)}
        required={isRequired}
      >
        <option className="capitalize" disabled>
          Pilih salah satu...
        </option>
        {options?.map((item) => (
          <option className="capitalize" key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="label">
        {/* <span className="label-text-alt">Alt label</span>
          <span className="label-text-alt">Alt label</span> */}
      </div>
    </label>
  );
};

export default RotioSelecInput;
