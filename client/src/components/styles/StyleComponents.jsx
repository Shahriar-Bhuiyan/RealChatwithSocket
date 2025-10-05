import React from 'react'
import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  border:"1px solid red",
  clip:"rect(0 0 0 0)",
  height:10,
  margin:-1,
  overflow:"hidden",
  padding:0,
  position:"absolute",
  whiteSpace:"nowrap",
  width:1 ,

})

