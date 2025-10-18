import { Link as LinkComponent } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  border: "1px solid red",
  clip: "rect(0 0 0 0)",
  height: 10,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: #f0f0f0;
  }
`;


export const InputBox = styled("input")`
width: 100%;
height: 100%;
border: none;
outline: none;
padding:0rem 3rem;
border-radius: 1.5rem;
background-color:rgba(0,0,0,.1);
font-family: sans-serif;
` 
