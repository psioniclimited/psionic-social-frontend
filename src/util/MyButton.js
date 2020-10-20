import React, { Component } from "react";

import {Tooltip,IconButton} from '@material-ui/core'

export default ({children, onClick, tip, btnClassName, tipClassname}) => (
  <Tooltip title={tip} className={tipClassname}>
    <IconButton onClick={onClick} className={btnClassName}>
      {children}
    </IconButton>
  </Tooltip>
);
