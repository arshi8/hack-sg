import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const SignUp = ({ open, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    relativeNumber: '',
    bloodType: '',
    careSeeker: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up form submission logic here
    console.log('Form submitted for:', type, formData);
    onClose(); // Close dialog after form submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up as {type === 'careSeeker' ? 'Care Seeker' : 'Care Taker'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="contactNumber"
            label="Contact Number"
            name="contactNumber"
            autoComplete="tel"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {type === 'careSeeker' && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="relativeNumber"
              label="Relative Number"
              name="relativeNumber"
              autoComplete="tel"
              value={formData.relativeNumber}
              onChange={handleChange}
            />
          )}
          {type === 'careSeeker' && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="bloodType"
              label="Blood Type"
              name="bloodType"
              autoComplete="off"
              value={formData.bloodType}
              onChange={handleChange}
            />
          )}
          {type === 'careTaker' && (
            <FormControl fullWidth margin="normal" required>
              <InputLabel id="careSeekerLabel">Care Seeker</InputLabel>
              <Select
                labelId="careSeekerLabel"
                id="careSeeker"
                label="Care Seeker"
                name="careSeeker"
                value={formData.careSeeker}
                onChange={handleChange}
              >
                <MenuItem value="careSeeker1">Care Seeker 1</MenuItem>
                <MenuItem value="careSeeker2">Care Seeker 2</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
