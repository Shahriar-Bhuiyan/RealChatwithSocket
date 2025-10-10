import { Avatar, Stack, Typography } from "@mui/material";
import {
  CalendarMonth as CalendarIcon,
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
} from "@mui/icons-material";

import React from "react";
import moment from 'moment'

const Profile = () => {
  return (
    <Stack spacing={"3rem"} direction={"column"} alignItems={"start"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        heading={"UserName"}
        text={"devShahriar"}
        Icon={<UserNameIcon />}
      />

      <ProfileCard heading={"Name"} text={"Shahriar"} Icon={<FaceIcon />} />

      <ProfileCard
        heading={"Joined"}
        text={moment("2025-10-10T22:15:25.542Z").fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"left"}
    >
      <div>{Icon && Icon}</div>

      <Stack>
        <Typography variant="body1">{heading}</Typography>

        <Typography color="gray" variant="caption">
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
