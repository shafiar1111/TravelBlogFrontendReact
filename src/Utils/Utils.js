import axios from "axios";

const remote="https://travelblogbackendnodejs.onrender.com";
// const remote="http://localhost:2500";



function cookieReceive()
{
   return fetch(`${remote}/getcookies`,{method:'GET',headers:{'Content-Type':'application/json'},credentials:"include"})
   .then(res=>res.json())
   .then(data=>{
      if(data.cookiePresent)
      {
        localStorage.setItem("cookie",data.cookie);
        return data.cookie;
      }
      else
      {
        localStorage.setItem("cookie","");

        return null;
      }
   })
   .catch(err=>{console.log(err);
    localStorage.setItem("cookie","");
    return null;
});

}

function cookieRemove()
{
   return fetch(`${remote}/removecookies`,{method:'GET',headers:{'Content-Type':'application/json'},credentials:"include"})
   .then(res=>res.json())
   .then(data=>{
      if(data.expired)
      {
        return true;
      }
      else
      {
        return false;
      }
   })
   .catch(err=>{console.log(err);
    return null;
   });
}
async function FetchImage()
{
  try
  {
    const response=await axios.get(`${remote}/image/getImages`,{headers:{'Content-Type':'application/json'},withCredentials:true})
    if(response.data)
    {
     return response.data;
    }
  }
  catch(err)
  {
    throw err;
  }
 
}
export {remote,cookieReceive,cookieRemove,FetchImage};
