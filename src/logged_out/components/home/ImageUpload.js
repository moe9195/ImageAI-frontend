import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { setImage, postImage } from "../../../redux/actions";
import Image from "react-graceful-image";

//Card
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

import SearchIcon from "@material-ui/icons/Search";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import CollectionsIcon from "@material-ui/icons/Collections";

// Search
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";

//Tabs
import { withStyles } from "@material-ui/core/styles";

const deepArtStyles = [
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/wave.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/la_muse.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/rain_princess.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/scream.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/udnie.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da-styles/wreck.jpeg",
];

const imageGalleryBW = [
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/cat.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/flower.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/man.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/photobw.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/sea.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/tst.jpeg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/wolfbw.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/woman.jpg",
];

const imageGallerySR = [
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/sr/baboon.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/sr/catsmall.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/sr/flower.png",
];

const imageGalleryDA = [
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/cat.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da/chicago.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da/flower.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da/stata.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/bw/woman.jpg",
  "https://raw.githubusercontent.com/moe9195/Capstone-Backend-Fresh/master/images/da/switzerland.jpg",
];

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800],
    },
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: theme.palette.secondary.main,
  },
  input: {
    display: "none",
  },
  title: {
    color: blue[800],
    fontWeight: "bold",
    fontFamily: "Montserrat",
    align: "center",
  },
  secondaryButton: {
    color: "gray",
    margin: 10,
  },
  typography: {
    margin: theme.spacing.unit * 2,
    backgroundColor: theme.palette.secondary.main,
  },
  infoIcon: {
    color: `#00E9F1 !important`,
    backgroundColor: "#393e46 !important",
    margin: 5,
  },
  deepStyles: {
    margin: 0,
    textAlign: "center",
  },
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null,
  };

  handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
      this.props.setImage(reader.result);
    }.bind(this);

    this.setState({
      mainState: "uploaded",
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  handleSearchClick = (event) => {
    this.setState({
      mainState: "search",
    });
  };

  handleGalleryClick = (event) => {
    this.setState({
      mainState: "gallery",
    });
  };

  renderInitialState = (style, setStyle) => {
    const { classes, theme, method } = this.props;
    const { value } = this.state;

    let artStyles = "";
    if (method === "DeepArt") {
      const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

      artStyles = deepArtStyles.map((img) => {
        const name = img.substring(89, img.length - 5);
        return (
          <div
            style={{ display: "inline" }}
            title={capitalizeFirstLetter(name)}
            onClick={() => setStyle(name)}
          >
            <img
              src={img}
              alt={capitalizeFirstLetter(name)}
              width="80"
              height="80"
              style={
                style === name
                  ? {
                      marginRight: "10px",
                      border: "2px solid #00E9F1",
                      borderRadius: "0.25rem",
                    }
                  : { marginRight: "10px" }
              }
            />
          </div>
        );
      });
    }

    return (
      <React.Fragment>
        <Grid className={classes.deepStyles}>
          <Typography
            style={{
              color: "#00e9f1",
              padding: "0.25rem 0rem 0.25rem 0rem",
            }}
          >
            Choose Style: <br></br>
          </Typography>
          {artStyles}
        </Grid>
        <CardContent>
          <Grid container justify="center" alignItems="center">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUploadClick}
            />
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.infoIcon}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
            <Fab className={classes.infoIcon} onClick={this.handleSearchClick}>
              <SearchIcon />
            </Fab>
            <Fab className={classes.infoIcon} onClick={this.handleGalleryClick}>
              <CollectionsIcon />
            </Fab>
          </Grid>
        </CardContent>
      </React.Fragment>
    );
  };

  handleSearchURL = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
    }.bind(this);
    console.log(url);

    this.setState({
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  handleImageSearch = (url) => {
    this.setState({
      selectedFile: url,
    });
    this.props.setImage(url);
  };

  handleSeachClose = (event) => {
    this.setState({
      mainState: "initial",
    });
  };

  handleSearchSubmit = () => {
    this.setState({
      mainState: "uploaded",
      imageUploaded: true,
    });
    postImage(this.state.selectedFile, this.props.method, this.props.style);
  };

  renderSearchState() {
    const { classes } = this.props;

    return (
      <Paper
        className={classes.searchRoot}
        elevation={1}
        style={{
          backgroundColor: "#00E9F1",
          borderRadius: "0.25rem",
        }}
      >
        <form
          onSubmit={this.handleSearchSubmit}
          style={{
            backgroundColor: "#00E9F1",
            borderRadius: "0.25rem",
          }}
        >
          <InputBase
            value={this.state.selectedFile}
            onChange={(e) => this.handleImageSearch(e.target.value)}
            className={classes.searchInput}
            placeholder="Image URL"
            style={{ paddingLeft: "1rem", width: "10rem" }}
          />
          <IconButton
            className={classes.infoIcon}
            aria-label="Search"
            type="submit"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            color="primary"
            className={classes.infoIcon}
            aria-label="Close"
            onClick={this.handleSeachClose}
          >
            <CloseIcon />
          </IconButton>
        </form>
      </Paper>
    );
  }

  handleAvatarClick(value) {
    var filename = value.url.substring(value.url.lastIndexOf("/") + 1);
    console.log(filename);
    this.setState({
      mainState: "uploaded",
      imageUploaded: true,
      selectedFile: value.url,
      fileReader: undefined,
      filename: filename,
    });
    this.props.setImage(value.url);
  }

  renderGalleryState = () => {
    const { classes } = this.props;
    const method = this.props.method;
    const imageGallery =
      method === "SuperResolution"
        ? imageGallerySR
        : method === "Colorize"
        ? imageGalleryBW
        : method === "DeepArt"
        ? imageGalleryDA
        : imageGallerySR;
    const listItems = imageGallery.map((url) => (
      <div
        onClick={(value) => this.handleAvatarClick({ url })}
        style={{
          padding: "5px 5px 5px 5px",
          cursor: "pointer",
        }}
      >
        <Avatar src={url} />
      </div>
    ));

    return (
      <React.Fragment>
        <Grid>
          {listItems}
          <IconButton
            color="primary"
            className={classes.secondaryButton}
            aria-label="Close"
            onClick={this.handleSeachClose}
          >
            <ReplayIcon />
          </IconButton>
        </Grid>
      </React.Fragment>
    );
  };

  renderUploadedState() {
    const { classes, theme } = this.props;
    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}></CardActionArea>
      </React.Fragment>
    );
  }

  imageResetHandler = (event) => {
    console.log("Click!");
    this.setState({
      mainState: "initial",
      selectedFile: null,
      imageUploaded: 0,
    });
    this.props.setImage(null);
  };

  render() {
    const { classes, theme, style, setStyle } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          {(this.state.mainState == "initial" &&
            this.renderInitialState(style, setStyle)) ||
            (this.state.mainState == "search" && this.renderSearchState()) ||
            (this.state.mainState == "gallery" && this.renderGalleryState()) ||
            (this.state.mainState == "uploaded" && this.renderUploadedState())}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImage: (image) => dispatch(setImage(image)),
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(null, mapDispatchToProps)
)(ImageUploadCard);
