
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

    
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const clearValues = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
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
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>

      <CreateButton props={formValues}/>
      <br></br>

      <button onClick={(e) => clearValues(e)}>Clear</button>

    </form>
  );
};

export default EmployeeForm;
