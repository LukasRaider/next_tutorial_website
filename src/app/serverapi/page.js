import { useStyleRegistry } from "styled-jsx";

export const metadata = {
    title: "Server API Page",
    description: "Detail server API",
  };

async function useList(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export default async function Page() {
    let users = await useList();
    return (
        <div>
            <h1>SERVER API</h1>
            {users.map((item)=>(
                <h3 key={item.id}>Name:{item.firstName}</h3>
            ))}
        </div>
    );
}