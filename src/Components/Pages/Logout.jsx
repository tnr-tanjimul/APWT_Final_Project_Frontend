



import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const Logout = (props) => {
    const {id} = useParams();
    const [apiData, setApidata] = useState([]);
    var token = null;
    if(localStorage.getItem('user')){
    var obj = JSON.parse(localStorage.getItem('user'));
    token = obj.access_token;
    }
    //alert(token);
    //
    useEffect(() => {
        var obj = {token: token};
        axios.post("logout",obj)
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
                var token = resp.data;
                alert(token.message);
                localStorage.removeItem("user"); 
            }).catch(err => {
                console.log(err);
            });
    }, []);

    
    return <Redirect to='/login'/>

}
export default Logout;