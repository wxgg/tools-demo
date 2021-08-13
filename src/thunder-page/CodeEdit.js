import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

export default function CodeEdit (props) {
  return <>
    <AceEditor
      mode="json"
      theme="github"
      width="100%"
      height="800px"
      onChange={props.onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  </>

}