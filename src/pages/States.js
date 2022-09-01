import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStates } from '../redux/states/states';

let initial = true;

const States = () => {
  const navigate = useNavigate();
  const states = useSelector((state) => state.states);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      dispatch(getStates());
      initial = false;
    }
  }, [dispatch]);

  return (
    <>
      <div className="btn-container">
        <button className="btn" type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
      <ul className="cards">
        {states.map((state) => (
          <li className="cards__item" key={state}>
            <Link className="cards__link" to={`/${state}`}>
              {state}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default States;
