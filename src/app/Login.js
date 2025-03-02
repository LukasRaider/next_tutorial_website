import { useMemo, useState } from "react";

export const metadata = {
    title: "Login Page",
    description: "Detail",
  };

const Login = () => {
    const [Count, setCount] = useState(20);
    const [Data, setData] = useState(20);
    const CountMemo = useMemo(() =>{
        console.log("call");
        return Count * 5 ;
    }, [Count]);
    return (
        <div>
            <h1>Count : {Count}</h1>
            <h1>Data : {Data}</h1>
            <h2>{CountMemo}</h2>
            <button onClick={()=> setCount(count + 20)}>Update Count</button> 
            <button onClick={()=> setData(data * 20)}>Update Data</button> 
        </div>
    )
};
export default Login;