import './Separator.css';

const Seperator = ({ text }) => {
  return (
    <div className="separator-container">
      <div className="line" />
      <div className="text-separator-container">
        <p>{text}</p>
      </div>
      <div className="line" />
    </div>
  );
};

export default Seperator;
