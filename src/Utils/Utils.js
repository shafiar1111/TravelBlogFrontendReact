const remote="http://localhost:3001";


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
export {remote,cookieReceive,cookieRemove};
