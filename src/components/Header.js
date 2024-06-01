import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { logActions } from '../store';

const Header = () => {
  const dispatch = useDispatch()
  const isLog = useSelector((store) => store.log.islog)
  // let isLog = useSelector((state) => state.log.islog);

  console.log(isLog)



  const logOutHandle = (event) =>{
    event.preventDefault()
    dispatch(logActions.logOut());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
          {isLog && (<a href='/'>My Products</a>)}  
          </li>
          <li>
            {isLog && (  <a href='/'>My Sales</a>)} 
          </li>
          <li>
            {/* <button onClick={logOutHandle}>Logout</button> */}
            {isLog && ( <button onClick={logOutHandle}>Logout</button>)} 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
