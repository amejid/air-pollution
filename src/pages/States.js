import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStates } from '../redux/states/states';
import State from '../components/State';

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
        <State key={state} state={state} />
      ))}
    </div>
  );
};

export default States;
