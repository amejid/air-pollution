import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMetrics } from '../redux/metrics/metrics';

const City = () => {
  const { country, state: stateName, city } = useParams();
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics);

  useEffect(() => {
    const details = {
      country,
      stateName,
      city,
    };

    dispatch(getMetrics(details));
  }, [dispatch, country, city, stateName]);

  return (
    <div>
      <h1>{metrics.city}</h1>
      <h1>{metrics.state}</h1>
      <h1>{metrics.country}</h1>
    </div>
  );
};

export default City;
