import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cities from './pages/Cities';
import City from './pages/City';
import Countries from './pages/Countries';
import States from './pages/States';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:country" element={<States />} />
      <Route path="/:country/:state" element={<Cities />} />
      <Route path="/:country/:state/:city" element={<City />} />
    </Routes>
  </>
);

export default App;
