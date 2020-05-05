import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    borderRadius: "0rem 0rem 0.5rem 0.5rem",
  },
  paper: {
    padding: "0.5rem",
    backgroundColor: "#0E141D",
  },
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          style={{
            padding: "0",
            borderRadius: "0.5rem 0.5rem 0rem 0rem",
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const langs = ["cURL", "Node.js", "Python", "Java", "PHP"];

const Request = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = langs.map((lang) => (
    <Tab style={{ minWidth: "0", color: "white" }} label={lang} />
  ));

  const codeObjs = [
    {
      language: "powershell",
      code:
        "$ curl -H 'ImageAI-api-key: YOUR_API_KEY'\n-F 'img=@/path/to/file.jpg'\n-F 'format=SELECT_FROM_JPEG_OR_PNG'\n-f https://api.image.ai/colorize -o output.txt",
    },
    {
      language: "javascript",
      code:
        "var request = require('request'); \nvar fs = require('fs');\n \nrequest.post({\n url: 'https://api.image.ai/colorize', \n formData: {\n  img: fs.createReadStream('/path/to/file.jpg'), \n  format: 'SELECT_FROM_JPEG_OR_PNG', \n}, \n headers: {\n  'ImageAI-api-key': 'YOUR_API_KEY'\n }, \n encoding: null\n}, function(error, response, body) {\n if (error) return console.error('Request failed:', error); \n if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8')); \n fs.writeFileSync(\"output.txt\", body); \n});",
    },
    {
      language: "python",
      code:
        "import requests\n\nresponse = requests.post(\n  'https://api.image.ai/colorize',\n  files=('img': open('/path/to/file.jpg', 'rb)},\n  data={'format': 'SELECT_FROM_JPEG_OR_PNG'},\n  headers={'ImageAI-api-key': 'YOUR_API_KEY'},\n)\nif response.status_code == request.codes.ok:\n   with open('output.txt', wb) as out:\n     out.write(response.content)\nelse:\n   print('Error: ', response,status_code, response.text)",
    },
    {
      language: "java",
      code:
        'Response response = Request.Post("https://api.image.ai/colorize")\n  .addHeader("ImageAI-api-key", "YOUR_API_KEY")\n  .body(\n   MultipartEntityBuilder.create()\n     .addBinaryBody("img", new File("/path/to/file.jpg"))\n     .addTextBody("format", "SELECT_FROM_JPEG_OR_PNG"\n     .build()\n   ).execute();\nresponse.saveContent(new File("output.txt));',
    },
    {
      language: "php",
      code:
        "$client = new GuzzleHttpClient();\n$res = $client->post('https://api.image.ai/colorize', [\n    'multipart' => [\n        [\n            'name'      =>  'img',\n            'contents'  =>  fopen('/path/to/file.jpg', 'r')\n        ],\n        [\n            'name'      =>  'format'\n            'contents'  =>  'SELECT_FROM_JPEG_OR_PNG'\n        ]\n    ],\n    'headers' => [\n      'ImageAI-api-key' =>  'YOUR_API_KEY'\n    ]\n]);\n\n$fp = fopen(\"output.txt\", \"wb\");\nfwrite($fp, $res->getBody());\nfclose($fp)",
    },
  ];

  const panels = langs.map((lang, idx) => (
    <TabPanel value={value} index={idx}>
      <SyntaxHighlighter
        language={codeObjs[idx].language}
        style={atomDark}
        customStyle={{ margin: "0", display: "block", width: "720px" }}
      >
        {codeObjs[idx].code}
      </SyntaxHighlighter>
    </TabPanel>
  ));

  return (
    <Grid
      item
      xs={12}
      style={{
        margin: "0rem 4rem 0rem 8rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper style={{ backgroundColor: "#0E141D", borderRadius: ".25rem" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          fullWidth
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
          style={{ backgroundColor: "#0E141D", borderRadius: ".25rem" }}
        >
          {tabs}
        </Tabs>
        {panels}
      </Paper>
    </Grid>
  );
};

export default Request;
