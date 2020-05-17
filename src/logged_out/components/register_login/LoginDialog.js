import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../redux/actions";

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

const LoginDialog = ({ login, history, user }) => {
  const [alert, setAlert] = React.useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //login({ username: values.username, password: values.password }, history);
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
        <Grid container spacing={3}>
          {alert && (
            <Alert severity="error">
              The back-end is not deployed! This feature is unavailable!
            </Alert>
          )}
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{ padding: "2.5rem 0rem 2.5rem 0rem" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: "20rem", width: "50%" }}
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userData, history) => dispatch(login(userData, history)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
