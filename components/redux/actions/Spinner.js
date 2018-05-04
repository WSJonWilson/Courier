
const Spinner = props => {
  const { isSpinning } = props;
  renderSpinner = (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
  return isSpinning ? renderSpinner : null;
};

export default Spinner;