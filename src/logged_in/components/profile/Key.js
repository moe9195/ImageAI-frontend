import React, { useState } from "react";
import { IconButton, Tooltip, InputAdornment } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Visibility from "@material-ui/icons/Visibility";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import CopyToClipboard from "react-copy-to-clipboard";

const Key = ({ profile }) => {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClickShowKey = () => {
    setShowKey(!showKey);
  };

  const handleMouseDownKey = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ padding: "0rem 6rem 0rem 6rem" }}>
      <Alert
        style={{
          marginBottom: "1rem",
          backgroundColor: "#0E141D",
          color: "#00CCD3",
        }}
        severity="info"
        variant="filled"
      >
        Use the following API Key access and make requests to the ImageAI API!
      </Alert>
      <OutlinedInput
        type={showKey ? "text" : "password"}
        disabled
        fullWidth
        style={{ color: "rgb(4, 10, 19)", borderColor: "rgb(4, 10, 19" }}
        value={profile.profile.key}
        labelWidth={60}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowKey}
              onMouseDown={handleMouseDownKey}
            >
              {showKey ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            <CopyToClipboard
              text={profile.profile.key}
              onCopy={() => setCopied(true)}
            >
              <Tooltip
                open={copied}
                title={"Copied to clipboard!"}
                leaveDelay={1500}
                onClose={() => setCopied(false)}
              >
                <IconButton>
                  <FileCopyIcon />
                </IconButton>
              </Tooltip>
            </CopyToClipboard>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Key;
