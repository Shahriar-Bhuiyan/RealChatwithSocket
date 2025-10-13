import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";

import { sampleNotificaiton } from "../../constants/sampleData";

const Notficiations = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log(`your request ${_id} is ${accept ? "accpet" : "rejected"}`);
  };
  return (
    <Dialog open>
      <Stack
        p={{ xs: "1rem", sm: "1rem" }}
        maxWidth={{ sm: "auto", sx: "25rem" }}
      >
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotificaiton?.length > 0 ? (
          sampleNotificaiton?.map((item, i) => (
            <NotificationItem
              key={i}
              sender={item.sender}
              _id={item._id}
              handler={friendRequestHandler}
            />
          ))
        ) : (
          <Typography textAlign={"center"}> 0 notification </Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  console.log(_id)
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />

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
          <>
            <b>{name.split(" ")[0]}</b> sent you a request
          </>
        </Typography>

        <Stack direction={{ sx: "column", sm: "row" }} spacing={"1rem"}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handler({ _id, accept: true })}
          >
            Accecpt
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handler({ _id, accept: false })}
          >
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notficiations;
