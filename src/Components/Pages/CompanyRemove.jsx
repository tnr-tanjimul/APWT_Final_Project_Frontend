import React from "react";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import  { Redirect } from 'react-router-dom';

const CompanyRemove = (props) => {
    const {id} = useParams();
    const [apiData, setApidata] = useState([]);

    useEffect(() => {
        const url = "company/delete/"+id;
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


    return <Redirect to='/company'/>

}
export default CompanyRemove;