import { useNavigate } from "react-router-dom";

function MAIN0001() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>main0001</h1>
      <button onClick={()=> {navigate('/MAIN0002')}}>페이지 이동</button>
    </div>
  );
}

export default MAIN0001;
