import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function MAIN0004() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  console.log(query.get('data4'))

  return (
    <div>
      <h1>main0004</h1>
    </div>
  );
}

export default MAIN0004;
