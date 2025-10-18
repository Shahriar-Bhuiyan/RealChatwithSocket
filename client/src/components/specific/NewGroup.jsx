import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { SampleUser } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {

  const [user,setUser] = useState(SampleUser)
  const [members,setMembers] = useState([])
  const [selectedMember,setSelectedMembers] = useState([])
  
  const groupName = useInputValidation('')

  const SelectMemberHandler = (id)=>{

    setSelectedMembers(prev=> prev.includes(id)? prev.filter((current)=>current!==id):[...prev,id])

    console.log(selectedMember)
  }
  return (
    <Dialog open>
      <Stack
        p={{ xs: "1rem", sm: "3rem" }}
        maxWidth={{ sm: "auto", sx: "25rem" }}
      >
        <DialogTitle textAlign={'center'} variant="h4">New Group</DialogTitle>
        <TextField label={'Group Name'} value={groupName.value} onChange={groupName.changeHandler}/>

        <Typography variant="body1">Members</Typography>

        <Stack>
          {user.map((user, index) => (
            <UserItem
              key={index}
              user={user}
              handler={SelectMemberHandler}
              isSelected={selectedMember.includes(user._id)}
              
            />
          ))}

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Button variant="text" color="error" size="large"  >Cancel</Button>
            <Button variant="contained" size="large">Create</Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
