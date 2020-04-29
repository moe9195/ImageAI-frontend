import React from "react";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { setImage, postImage } from "../../../redux/actions";

//Card
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

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
import TextField from "@material-ui/core/TextField";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";

//Tabs
import { withStyles } from "@material-ui/core/styles";

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
    margin: 10,
  },
});

class ImageUploadCard extends React.Component {
  state = {
    mainState: "initial", // initial, search, gallery, uploaded
    imageUploaded: 0,
    selectedFile: null,
  };

  handleUploadClick = (event) => {
    console.log();
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
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

  renderInitialState() {
    const { classes, them } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
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
  }

  handleSearchURL = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        selectedFile: [reader.result],
      });
    }.bind(this);
    console.log(url); // Would see a path?

    this.setState({
      selectedFile: event.target.files[0],
      imageUploaded: 1,
    });
  };

  handleImageSearch = (url) => {
    // var filename = url.substring(url.lastIndexOf("/") + 1);
    // console.log(filename);
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
    postImage(this.state.selectedFile, this.props.method);
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
            style={{ paddingLeft: "1rem", width: "60%" }}
          />
          <IconButton
            className={classes.infoIcon}
            aria-label="Search"
            type="submit"
          >
            <SearchIcon />
          </IconButton>
          {/* <Divider className={classes.searchDivider} /> */}
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

  renderGalleryState() {
    const { classes } = this.props;
    const method = this.props.method;
    const imageGallery =
      method === "SuperResolution"
        ? imageGallerySR
        : method === "Colorize"
        ? imageGalleryBW
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
  }

  renderUploadedState() {
    const { classes, theme } = this.props;
    return (
      <React.Fragment>
        <CardActionArea onClick={this.imageResetHandler}>
          {/* <img width="100%" src={this.state.selectedFile} /> */}
        </CardActionArea>
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
    const { classes, theme } = this.props;

    /**
     * The condition below can be made into an object:
     * {
     *  initial: this.renderInitialState,
     * ...
     * }
     *
     * then in the return below you'd just have:
     *
     * {theObjAbove[this.state.mainState]()}
     */
    return (
      <React.Fragment>
        <div className={classes.root}>
          {(this.state.mainState == "initial" && this.renderInitialState()) ||
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
