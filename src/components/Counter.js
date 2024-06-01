import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { countAcion } from "../store";

const Counter = () => {
  // const dispatch = useDispatch();

  // const toggleCounterHandler = () => {};

  // const incHandler = () => {
  //   dispatch({ type: "inc", amount: 5 });
  // };

  // const decHandler = () => {
  //   dispatch({ type: "dec" });
  // };

  // const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

    const toggleCounterHandler = () => {};

  const incHandler = () => {
    // console.log("inc")
    dispatch(countAcion.increment());
  };


  const {counter} = useSelector((xyz)=> xyz.count);

  const decHandler = () => {
  //   dispatch({ type: "dec" });
  dispatch(countAcion.decrrment(5))
  };

  
  // console.log(counter);


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <div>
          <button onClick={incHandler}>Increment By 5</button>
        </div>
        <div>
          <button onClick={decHandler}>Decremenen by 5</button>
        </div>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


