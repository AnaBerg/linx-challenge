import './HeaderButton.css';

const HeaderButton = ({ children, onClick }) => {
  return (
    <button className="header-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
