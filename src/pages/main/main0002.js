import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function MAIN0002() {
  const location = useLocation();
  console.log(location)

  const { data3 } = useParams();
  console.log(data3)
  return (
    <div>
      <h1>main0002</h1>
    </div>
  );
}

export default MAIN0002;
