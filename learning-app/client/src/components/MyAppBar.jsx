import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Container, AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router';

function MyAppBar() {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    // Redirect to home page after logout
    navigate("/");
  };

  return (
    <AppBar position="static" className="AppBar">
      <Container>
        <Toolbar disableGutters={true}>
          <Link to="/">
            <Typography variant="h6" component="div">
              Learning
            </Typography>
          </Link>
          <Link to="/tutorials">
            <Typography>Tutorials</Typography>
          </Link>
          <Link to="/form">
            <Typography>Form</Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          {user && (
            <>
              <Typography>{user.name}</Typography>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
          {!user && (
            <>
              <Link to="/register">
                <Typography>Register</Typography>
              </Link>
              <Link to="/login">
                <Typography>Login</Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MyAppBar;
