import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStates } from '../redux/states/states';

const States = () => {
  const { country } = useParams();
  const states = useSelector((state) => state.states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStates(country));
  }, [dispatch, country]);

  return (
    <div>
      {states.map((state) => (
        <Link key={state} to={`/${country}/${state}`}>
          {state}
        </Link>
      ))}
    </div>
  );
};

export default States;
