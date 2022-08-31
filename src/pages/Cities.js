import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCities } from '../redux/cities/cities';

const Cities = () => {
  const { country, state: stateName } = useParams();
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    const details = {
      country,
      stateName,
    };

    dispatch(getCities(details));
  }, [dispatch, country, stateName]);

  return (
    <div>
      {cities.map((city) => (
        <Link key={city} to={`/${country}/${stateName}/${city}`}>
          {city}
        </Link>
      ))}
    </div>
  );
};

export default Cities;
