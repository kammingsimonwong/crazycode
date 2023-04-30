
import React, { useState } from 'react';
import CreateButton from '../CreateButton';
import "./EmployeeForm.css";

const EmployeeForm = () => {

    const initialFormValues = {
        firstname: '',
        surname: '',
        ssn: '',
        birthdate: '',
        email: '',
    };
  const initalStatusValue = '<p><b>Api call status is reset. </b></p>';

  const [formValues, setFormValues] = useState(initialFormValues);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };



  const clearValues = (e) => {
    var statusText1 = document.getElementById("HelloWorld");
    e.preventDefault();
    setFormValues(initialFormValues);
    statusText1.innerHTML = initalStatusValue;
   
  }

  return (
    <form >
      <div className="form-group">
        <label htmlFor="firstname">First Name: </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formValues.firstname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Last Name: </label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formValues.surname}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ssn">SSN: </label>
        <input
          type="text"
          id="ssn"
          name="ssn"
          value={formValues.ssn}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="birthdate">Birthdate: </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formValues.birthdate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input className=''
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <table align="right" width="100%">
      <td align="left"><CreateButton props={formValues}/></td>
      <td align="right"><button className='button' onClick={(e) => clearValues(e)}>Clear</button>
      </td>
      </table>
      <br></br>
    </form>
  );
};

export default EmployeeForm;
