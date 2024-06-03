interface ITextInput {
  title: string;
  value: string;
  setValue: (value: string) => void;
  isRequired?: boolean;
  variant?: "textInput" | "textarea";
  type?: string;
  placeholder?: string;
}

const RotioInput = ({
  title,
  value,
  setValue,
  isRequired = true,
  variant = "textInput",
  type = "text",
  placeholder = "Tulis di sini...",
}: ITextInput) => {
  const returnVariantInput = () => {
    if (variant == "textInput") {
      return (
        <input
          type={type}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="input input-bordered w-full max-w-xs"
        />
      );
    } else {
      return (
        <textarea
          className="textarea textarea-bordered h-24"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      );
    }
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-bold">{title}</span>
        {isRequired && (
          <span className="label-text-alt text-info">*Harus di isi</span>
        )}
      </div>
      {returnVariantInput()}
      <div className="label">
        {/* <span className="label-text-alt">Bottom Left label</span> */}
        {/* <span className="label-text-alt">Bottom Right label</span> */}
      </div>
    </label>
  );
};

export default RotioInput;
