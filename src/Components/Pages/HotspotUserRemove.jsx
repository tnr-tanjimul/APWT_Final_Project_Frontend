import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import {useState, useEffect} from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom'

const HotspotUserRemove = (props) => {
    const {serverId} = useParams();
    const {name} = useParams();
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        const url = "hotspot/users/remove/"+serverId+"/"+name;
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
                var token = resp.data;
                alert(token.message);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    
    return <Redirect to='/hotspot/users'/>
    
}
export default HotspotUserRemove;