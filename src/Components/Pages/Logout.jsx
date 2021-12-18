import  { Redirect } from 'react-router-dom'
const Logout = () => {
    localStorage.removeItem("user"); 
    return <Redirect to='/login'/>
    
}
export default Logout;