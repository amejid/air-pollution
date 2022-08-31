import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/countries/countries';

let isInitial = true;

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(getCountries());
      isInitial = false;
    }
  }, [dispatch]);

  return (
    <ul>
      {countries.map((country) => (
        <li key={country}>
          <Link to={`/${country}`}>{country}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
