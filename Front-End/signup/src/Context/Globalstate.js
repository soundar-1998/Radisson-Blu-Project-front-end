import React,{ createContext, useState } from "react";


export const GlobalContext= createContext();

export const GlobalProvider=({children })=>{
    const [users,setUsers,booking,setFormDatas]=useState([]); //retreive  the  details  from  home  and save


return<GlobalContext.Provider value={{users,setUsers,booking,setFormDatas}}>
    {children}
</GlobalContext.Provider>

}

//globalstate  GC globalcontext
export  default GlobalContext