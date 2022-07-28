import PropTypes from "prop-types";

const handleAdd = (event) => {
  console.log(event);
};

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd} type="button" className="btn btn-outline-info"> +1 </button> 
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
