import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../../redux/actions";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const Signup = ({ signup, history, user, errors }) => {
  const [alert, setAlert] = React.useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // signup(
    //   {
    //     username: values.username,
    //     password: values.password,
    //     first_name: values.firstName,
    //     last_name: values.lastName,
    //     email: values.email,
    //   },
    //   history
    // );
    setTimeout(() => {
      setAlert(true);
    }, 500);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {user ? (
        <Redirect to="/profile" />
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {alert && (
              <Alert severity="error">
                The back-end is not deployed! This feature is unavailable!
              </Alert>
            )}
            <Grid item xs={6} style={{ paddingTop: "2rem" }}>
              <FormControl>
                <TextField
                  label="First Name"
                  id="first-name"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} style={{ paddingTop: "2rem" }}>
              <FormControl>
                <TextField
                  label="Last Name"
                  id="last-name"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} style={{ paddingTop: "2rem" }}>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "2rem" }}>
              <FormControl fullWidth>
                <TextField
                  label="Username"
                  id="username"
                  value={values.username}
                  onChange={handleChange("username")}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "2rem" }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ padding: "2.5rem 0rem 2.5rem 0rem" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ borderRadius: "20rem", width: "50%" }}
                // onClick={(e) => handleSubmit(e)}
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData, history) => dispatch(signup(userData, history)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
