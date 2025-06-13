import { Routes, Route } from 'react-router-dom';
import Layout from 'src/layouts';
import Characteristics from 'src/pages/Characteristics';
import Story from 'src/pages/Story';
import Gallery from 'src/pages/Gallery';
import Conservation from 'src/pages/Conservation';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characteristics />} />
        <Route path="characteristics" element={<Characteristics />} />
        <Route path="story" element={<Story />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="conservation" element={<Conservation />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
