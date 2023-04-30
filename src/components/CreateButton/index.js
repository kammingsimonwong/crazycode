import axios from "axios";
import React, { useState } from "react";


const CreateButton = ({props}) => {


  //  var [status, setStatus] = useState("None");

    const apiCall = (e) => {
        e.preventDefault();
        var statusText = document.getElementById("HelloWorld");
        if (props.ssn === ""){
            statusText.innerHTML = "<p><b> Invalid input, no API called.</b></p>";
        }
        else {
        axios.post("https://webhooks.workato.com/webhooks/rest/d726cfa6-fc5f-49c4-beb2-45e59c97b5e3/commands", 
            
            {
                "Domain": "Employee",
                "Operation": "Create",
                "Employee_Data": {
                "Firstname": props.firstname,
                "Lastname" : props.surname,
                "SSN": props.ssn,
                "Birthdate": props.birthdate,
                "Email": props.email
                }
            }
            
        ).then((res) => {
            console.log(res)
            

            if (res.data.status === "ok") {

                statusText.innerHTML = "<p><b> API call is Successful.</b></p>";
             //   setStatus("Successful");

            } else {
                statusText.innerHTML = "<p> API call fails.</p>";
               // setStatus("Failure");
            }
        })
    }
        console.log({
            "Firstname": props.firstname,
            "Lastname" : props.surname,
            "SSN": props.ssn,
            "Birthdate": props.birthdate,
            "Email": props.email
        })       
    }

    return <>

        <button className="button" onClick={(e) => apiCall(e)}> Create New Employee </button>
        <div align="left" id="HelloWorld"><p><b>No Api is called yet.</b></p></div>
      
    </>
    var statusText = document.getElementById("HelloWorld");

}

export default CreateButton;