import React, { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  CssBaseline,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from '@mui/material';
import LoginPageImage from './LoginPageImage';
import SignUp from './SignUp'; // Import the SignUp component

const Login = ({ onLogin, user, setIsLoggedIn, error, setError }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);
  const [signUpType, setSignUpType] = useState(''); // State to track which sign-up type was selected

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUpClick = (type) => {
    setSignUpType(type);
    setOpenSignUpDialog(true);
  };

  const handleCloseSignUpDialog = () => {
    setOpenSignUpDialog(false);
    setSignUpType(''); // Reset signUpType after closing dialog
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission logic here
    console.log('Logging in with:', formData);
    // Call onLogin function with formData
    onLogin(formData);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container spacing={0}>
          <CssBaseline />
          <Grid item xs={12} sm={6}>
            <LoginPageImage />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: 4,
              }}
              component={Paper}
              elevation={6}
              square
            >
              <Typography component="h1" variant="h5" gutterBottom>
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1, width: '100%' }}
                onSubmit={handleSubmit}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {error && (
                  <Typography variant="body2" color="error" align="center">
                    {error}
                  </Typography>
                )}
                <Grid container sx={{ mt: 2 }}>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography variant="body2">
                      Don't have an account?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => handleSignUpClick('careSeeker')}
                      sx={{ mx: 1 }}
                    >
                      Sign Up as Care Seeker
                    </Link>
                    <Link
                      href="#"
                      variant="body2"
                      onClick={() => handleSignUpClick('careTaker')}
                      sx={{ mx: 1 }}
                    >
                      Sign Up as Care Taker
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Dialog for Care Seeker Sign Up */}
      <SignUp
        open={openSignUpDialog && signUpType === 'careSeeker'}
        onClose={handleCloseSignUpDialog}
        type="careSeeker"
      />

      {/* Dialog for Care Taker Sign Up */}
      <SignUp
        open={openSignUpDialog && signUpType === 'careTaker'}
        onClose={handleCloseSignUpDialog}
        type="careTaker"
      />
    </Container>
  );
};

export default Login;
