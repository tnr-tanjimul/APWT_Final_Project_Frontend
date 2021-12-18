import  { Redirect } from 'react-router-dom'
const IsLoggegIn = () => {
    if(localStorage.getItem('user') == null){
        //alert('hhh');
        return <Redirect to='/login'/>
    }
    return <></>;
}
export default IsLoggegIn;
