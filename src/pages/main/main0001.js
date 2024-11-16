import { useNavigate } from "react-router-dom";

function MAIN0001() {
  let navigate = useNavigate();

  const data2 = "data2";
  const data3 = "data3";
  const data4 = "data4";

  return (
    <div>
      <h1>main0001</h1>
      <button onClick={()=> {navigate('/MAIN0002', {state : data2})}}>페이지 이동</button>
      <br></br>
      <br></br>
      <button onClick={()=> {navigate(`/MAIN0003/${data3}`)}}>페이지 이동(path)</button>
      <br></br>
      <br></br>
      <button onClick={()=> {navigate(`/MAIN0004?data4=${data4}`)}}>페이지 이동(query)</button>
    </div>
  );
}

export default MAIN0001;
