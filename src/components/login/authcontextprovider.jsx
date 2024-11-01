import { createContext,useEffect,useState } from "react";
import Cookies from "js-cookie";
import axios from 'axios'
import { server } from '../../states/api'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const[isAuthenticated,setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const token = Cookies.get('token');
        if(token){
            axios.get(`${server}/api/user/verifyToken`, {
               withCredentials: true,
              })
              .then(response => {
                if (response.status === 200) {
                  setIsAuthenticated(true);
                }
              })
              .catch(error => {
                console.error('Token verification failed:', error);
                setIsAuthenticated(false);
              });
        }
    },[]);

    return(
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
      </AuthContext.Provider>
    )
}

export default AuthContext;
