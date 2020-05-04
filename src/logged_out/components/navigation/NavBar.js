import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import PropTypes from "prop-types";
import LoginDialog from "../register_login/LoginDialog";
import RegisterDialog from "../register_login/RegisterDialog";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions";
// import { Modal } from "react-bootstrap";
import {
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: 0,
    margin: 0,
    width: "400px",
    border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: "0.5rem",
  },
});

const NavBar = (props) => {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
    user,
    logout,
  } = props;

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    setShowLogin(false);
    setShowSignup(false);
  }, [user]);

  const auth =
    user === null
      ? [
          {
            name: "Login",
            onClick: () => setShowLogin(true),
            icon: <LockOpenIcon className="text-white" />,
          },
          {
            name: "Signup",
            onClick: () => setShowSignup(true),
            icon: <HowToRegIcon className="text-white" />,
          },
        ]
      : [
          {
            name: "Logout",
            onClick: () => logout(),
            icon: <HowToRegIcon className="text-white" />,
          },
          {
            name: "profile",
            link: "/profile",
            icon: <AccountCircleIcon className="text-white" />,
          },
        ];

  const menuItems = [
    {
      link: "/api",
      name: "API",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/how-to-use",
      name: "How to use",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/technology",
      name: "Technology",
      icon: <HowToRegIcon className="text-white" />,
    },
  ].concat(auth);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ background: "#040a13" }}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                style={{ color: "#00adb5" }}
              >
                Image
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                style={{ color: "#FADA5E" }}
              >
                AI
              </Typography>
            </div>
          </Link>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        style={{ color: "#00ccd3" }}
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    style={{ color: "#00ccd3" }}
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showLogin}
        onClose={() => setShowLogin(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showLogin}>
          <Paper className={classes.paper}>
            <Paper
              elevation={3}
              style={{
                padding: "1rem",
                flex: "auto",
                textAlign: "center",
              }}
            >
              <h3>Log In</h3>
            </Paper>

            <p id="transition-modal-description">
              <Paper
                elevation={6}
                style={{
                  padding: "1rem 0.5rem 0rem 1rem",
                  borderRadius: "0.5rem",
                  flex: "auto",
                  textAlign: "center",
                }}
              >
                <LoginDialog />
              </Paper>
            </p>
          </Paper>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showSignup}
        onClose={() => setShowSignup(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showSignup}>
          <Paper className={classes.paper}>
            <Paper
              elevation={3}
              style={{
                padding: "1rem",
                flex: "auto",
                textAlign: "center",
              }}
            >
              <h3>Register</h3>
            </Paper>

            <p id="transition-modal-description">
              <Paper
                elevation={6}
                style={{
                  padding: "1rem 0.5rem 0rem 1rem",
                  borderRadius: "0.5rem",
                  flex: "auto",
                  textAlign: "center",
                }}
              >
                <RegisterDialog />
              </Paper>
            </p>
          </Paper>
        </Fade>
      </Modal>

      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
