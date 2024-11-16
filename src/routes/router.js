import { Route, Routes } from 'react-router-dom';
import MAIN0001 from '../pages/main/main0001';
import MAIN0002 from '../pages/main/main0002';
import MAIN0003 from '../pages/main/main0003';
import MAIN0004 from '../pages/main/main0004';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MAIN0001/>} />
      <Route path="/MAIN0002" element={<MAIN0002/>} />
      <Route path="/MAIN0003/:data" element={<MAIN0003/>} />
      <Route path="/MAIN0004" element={<MAIN0004/>} />
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default Router;