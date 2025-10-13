import {
  Avatar,
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

import { SampleUser } from "../../constants/sampleData";
import { Search as SearchIcon } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import UserItem from "../shared/UserItem";
import { memo } from "react";
import { useInputValidation } from "6pp";

const Search = () => {
  const search = useInputValidation("");
  const [user, setUser] = useState(SampleUser);

  const isLoadigSendFriendRequest = false
  const addFriendHandler = (id) => {
    console.log("add Friend Handler Called",id);
  };
  return (
    <Dialog open={true}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle>Find People</DialogTitle>

        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <List>
          {user.map((user, index) => (
            <UserItem
              key={index}
              user={user}
              handler={addFriendHandler}
              handlerIsLoading={isLoadigSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default memo(Search);
