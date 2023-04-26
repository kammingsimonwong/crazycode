import axios from "axios";
import React, { useState } from "react";


const Button = () => {

    const [status, setStatus] = useState("None");

    const apiCall = () => {
        axios.post("https://webhooks.workato.com/webhooks/rest/d726cfa6-fc5f-49c4-beb2-45e59c97b5e3/new-employee", 
            
            {
                "Firstname": "Kam Ming Simon",
                "Lastname" : "Wong",
                "SSN": "626-88-3483",
                "Birthdate": "2022-10-31",
                "Email": "skwongus@gmail.com"
            }
        ).then((res) => {
            console.log(res)
            if (res.data.status === "ok") {
                setStatus("Successful.")
            } else {
                setStatus("Failed to create employee.")
            }
        })
            
    }

    return <>
        <button onClick={apiCall}> Create New Employee </button>
        <p>Api Status : {status}</p>
    </>
}



export default Button;