import { createContext, useEffect, useState } from "react"
//const  AuthContext = createContext()
// 

type AuthProps = {
    children:any 
}

interface ContextType{
    jwt?:string
    login?:object,
    logout?:object
}
export const AuthContext = createContext<ContextType>({});

const AuthProvider:React.FC<AuthProps> = ({children})=>{

    const [jwt, setJwt] = useState("")
    
    useEffect(()=>{
        const jwtStorage  = localStorage.getItem("jwt");
        if(jwtStorage){
            setJwt(jwtStorage)
        }
    },[])

    const login = (tocken:string)=>{
        localStorage.setItem("jwt",tocken);
        setJwt(tocken);
    }

    const logout =()=>{
        localStorage.removeItem("jwt")
        setJwt("")
    }
    
    return (
        <AuthContext.Provider value={{jwt,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;