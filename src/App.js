import { Provider, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  let isLog = useSelector((state) => state.log.islog);

  // isLog = true

  // console.log(isLog);
  return (
    <>
      <Header />

      {/* <Auth /> */}

      {/* <UserProfile /> */}

      {isLog ? <UserProfile /> : <Auth />}

      <Counter />
    </>
  );
}

export default App;
