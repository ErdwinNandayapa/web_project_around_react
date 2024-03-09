function Input({ type, id, min, max, required = true, classInput }) {
  return (
    <input
      type={type}
      name={`input-${id}`}
      id={`input-${id} `}
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
