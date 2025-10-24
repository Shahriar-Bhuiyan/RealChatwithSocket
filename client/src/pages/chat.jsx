import { AttachFile, Send as SendIcon } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { Fragment, useRef } from "react";

import AppLayout from "../components/layout/AppLayout";
import FileMenu from "../components/dialog/FileMenu";
import { InputBox } from "../components/styles/StyleComponents";
import MessageComponent from "../components/shared/MessageComponent";
import { SampleMessage } from "../constants/sampleData";
import { orange } from "../constants/color";

const user = {
  _id: "1212",
  name: "Abir Bhai",
};

function Chat() {
  const containerRef = useRef(null);

  const fileMenuRef = useRef(null);
  return (
    <Fragment>
      <Stack
        boxSizing={"border-box"}
        padding={"1rem .5rem"}
        spacing={"1rem"}
        bgcolor={"gray"}
        height={"90%"}
        ref={containerRef}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {SampleMessage.map((i, k) => (
          <MessageComponent key={k} message={i} user={user} />
        ))}
      </Stack>

      <form style={{ height: "10%" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
          spacing={".25rem"}
        >
          <IconButton
            sx={{ position: "absolute", left: "1.5rem" }}
            ref={fileMenuRef}
          >
            <AttachFile />
          </IconButton>

          <InputBox placeholder="Type Message Here" />

          <IconButton
            type="submit"
            sx={{
              rotate: "-34deg",
              background: orange,
              color: "white",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </Fragment>
  );
}

export default AppLayout(Chat);
