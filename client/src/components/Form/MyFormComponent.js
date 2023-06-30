import React, { useState } from "react";
import "./Form.css";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    select1: "",
    select2: "",
    select3: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Submit form or perform other actions
      console.log(formData);
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        select1: "",
        select2: "",
        select3: "",
      });
      setFormErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="f_sec_1">
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          error={!!formErrors.firstName}
          helperText={formErrors.firstName}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          error={!!formErrors.lastName}
          helperText={formErrors.lastName}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!formErrors.phone}
          helperText={formErrors.phone}
          required
          fullWidth
          margin="normal"
        />
      </div>
      <div className="f_sec_2">
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Select 1</InputLabel>
          <Select
            name="select1"
            value={formData.select1}
            onChange={handleChange}
            error={!!formErrors.select1}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Select 2</InputLabel>
          <Select
            name="select2"
            value={formData.select2}
            onChange={handleChange}
            error={!!formErrors.select2}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Select 3</InputLabel>
          <Select
            name="select3"
            value={formData.select3}
            onChange={handleChange}
            error={!!formErrors.select3}
          >
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default MyFormComponent;
