"use client";

import { useEffect } from "react";

export const metadata = {
    title: "API page",
    description: "Detail api",
  };

export default function Page(){
    const[users, setUsers] = useState([]);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setUsers(data.users);
            }
            catch (error){
                console.error('Error fetching data: ', error);
            }
        };
    });
return (
    <div>
        <h1>API</h1>
        {
            users.map((item)=> (
                <h3 key={item.id}>{item.firstName}
                <br />
                lastname:{item.lastname}
                age: {item.age}
                </h3>
            ))
        }
    </div>
);
}