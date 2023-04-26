import axios from "axios";
import React, { useState } from "react";


const CreateButton = ({props}) => {

    const [status, setStatus] = useState("None");

    const apiCall = (e) => {
        e.preventDefault();
        axios.post("https://webhooks.workato.com/webhooks/rest/d726cfa6-fc5f-49c4-beb2-45e59c97b5e3/new-employee", 
            
            {
                "Firstname": props.firstname,
                "Lastname" : props.surname,
                "SSN": props.ssn,
                "Birthdate": props.birthdate,
                "Email": props.email
            }
            
        ).then((res) => {
            console.log(res)
            if (res.data.status === "ok") {
                setStatus("Successful.")
            } else {
                setStatus("Failed to create employee.")
            }
        })

        console.log({
            "Firstname": props.firstname,
            "Lastname" : props.surname,
            "SSN": props.ssn,
            "Birthdate": props.birthdate,
            "Email": props.email
        })       
    }

    return <>
        <button onClick={(e) => apiCall(e)}> Create New Employee </button>
        <p>Api Status : {status}</p>
    </>
}

export default CreateButton;