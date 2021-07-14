import './Button.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type ? type : 'button'} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
