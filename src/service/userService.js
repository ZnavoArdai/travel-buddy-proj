
export async function getAPI(){

    return await fetch("https://my-json-server.typicode.com/Jeck99/fake-users-api/users").then((res)=>res.json())
}


getAPI().then((res)=>{console.log(res)})

