import { Route, Routes } from 'react-router-dom';
import MAIN0001 from '../pages/main/main0001';
import MAIN0002 from '../pages/main/main0002';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MAIN0001/>} />
      <Route path="/MAIN0002" element={<MAIN0002/>} />
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default Router;