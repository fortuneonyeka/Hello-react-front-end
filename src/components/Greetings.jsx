import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import loadGreatings from '../Redux/greetings/greetings'


const Grettings = () => {
  const dispatch = useDispatch();
  const loadGreetingAction = bindActionCreators(loadGreatings,dispatch)
  const greeting = useSelector((state) => state.greeting)


  useEffect(() => {
    loadGreetingAction();
    return () => null;
  }, [])

  return (
    <h2 style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      backgroundColor: 'gray',
      margin: 0,
    }}>{greeting.message}</h2>
  );
}
 
export default Grettings;