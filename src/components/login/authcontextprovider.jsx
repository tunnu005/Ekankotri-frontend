import { createContext,useEffect,useState } from "react";
import Cookies from "js-cookie";
import axios from 'axios'
import { server } from '../../states/api'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[isAuthenticated,setIsAuthenticated] = useState(false);
    console.log('AuthProvider1')
    useEffect(()=>{
       
        
            axios.get(`${server}/api/user/verifyToken`, {
               withCredentials: true,
              })
              .then(response => {
                if (response.status === 200) {
                  console.log('AuthProvider2')
                  setIsAuthenticated(true);
                }
              })
              .catch(error => {
                console.error('Token verification failed:', error);
                setIsAuthenticated(false);
              });
        
    },[]);

    return(
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext;
