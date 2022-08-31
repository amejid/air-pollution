import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../components/Country';
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

  return countries.map((country) => <Country key={country} country={country} />);
};

export default Countries;
