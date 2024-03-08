function Input({ type, id, min, max, required = true, classInput, adicional }) {
  return (
    <input
      type={type}
      name={`input-${id}`}
      id={`input-${id}${adicional} `}
      required={required}
      minLength={min}
      maxLength={max}
      className={`popup__input popup__input-${id}
      } ${classInput ? classInput : ""}`}
      placeholder={id}
    />
  );
}

export default Input;
