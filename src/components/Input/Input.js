import './Input.css';

const Input = ({ id, label, type, value, setValue, placeholder }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="input-text"
        id={id}
        name={id}
        type={type ? type : 'text'}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
