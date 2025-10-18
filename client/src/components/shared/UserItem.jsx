import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const UserItem = ({ user, handler, handlerIsLoading,isSelected }) => {
  const { _id, name, avatar } = user;

  
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrdinalGroup: "initial",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <IconButton
          sx={{
            bgcolor: isSelected ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isSelected ? "error.dark" : "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >

          {isSelected? <RemoveIcon/> :<AddIcon/>}
          
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default UserItem;
