import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: { counter: 0 },
  reducers: {
    increment: (state) => {
      // console.log("toolkit");
      state.counter++;
    },
    decrrment: (state, action) => {
      state.counter = state.counter - action.payload;
      console.log(action.payload);
    },
  },
});

const logSlice = createSlice({
  name: "log",
  initialState: { islog: false },
  reducers: {
    login: (state) => {
      state.islog = true;
    },
    logOut: (state) => {
      state.islog = false;
    },
  },
});

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    log: logSlice.reducer,
  },
});

export const countAcion = counterSlice.actions;
export const logActions = logSlice.actions;
export default store;

// import { createStore } from "redux";

// const counterReducer = (state = { counter: 0 }, action) => {
//   console.log('Action Type:', action.type);

//   if (action.type === "inc") {
//     return { counter: state.counter + action.amount };
//   } else if (action.type === "dec") {
//     return { counter: state.counter - 5 };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
