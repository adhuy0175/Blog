import {createContext, useReducer} from 'react'
import {authReducer} from '../reducers/AuthReducer'
import  {apiUrl,LOCAL_STORAGE_TOKEN} from '../contexts/constants'
import axios from 'axios'


export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true, 
        isAuthenticated: false,
        user: null,
    })

    //Login 
    const loginUser = async userForm=>{
        try{
            const response = await axios.post(`${apiUrl}/auth/login`, userForm)
            if (response.data.success) {
                 localStorage.setItem(LOCAL_STORAGE_TOKEN,response.data.accessToken)
                 return response.data
            }
        }catch(err){
            if (err.response.data) {
                return err.response.data
            }
            else return {success:false, message:err.message}
        }
    }
    //Context data
    const authContext = {loginUser}
    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
 }
export default AuthContextProvider