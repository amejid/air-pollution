import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStates } from '../redux/states/states';

const States = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const states = useSelector((state) => state.states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStates(country));
  }, [dispatch, country]);

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
            <Link className="cards__link" to={`/${country}/${state}`}>
              {state}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default States;
