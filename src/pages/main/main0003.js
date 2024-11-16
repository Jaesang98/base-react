import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function MAIN0003() {
  const location = useLocation();
  console.log(location)

  const { data2 } = useParams();
  console.log(data2)
  return (
    <div>
      <h1>main0003</h1>
    </div>
  );
}

export default MAIN0003;
