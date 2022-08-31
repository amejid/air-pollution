import { Routes, Route } from 'react-router-dom';
import Cities from './pages/Cities';
import City from './pages/City';
import Countries from './pages/Countries';
import States from './pages/States';

const App = () => (
  <Routes>
    <Route path="/" element={<Countries />} />
    <Route path="/:country" element={<States />} />
    <Route path="/:country/:state" element={<Cities />} />
    <Route path="/:country/:state/:city" element={<City />} />
  </Routes>
);

export default App;
