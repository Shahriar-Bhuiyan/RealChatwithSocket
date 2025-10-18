import { Box, Typography } from "@mui/material";
import React, { memo } from "react";

import RenderAttachment from "./RenderAttachment";
import { fileFormat } from "../../lib/features";
import { lightBlue } from "../../constants/color";
import moment from "moment";

const MessageComponent = ({ user, message }) => {
  const { sender, content, attachments = [], createAt } = message;

  console.log(attachments)
  const sameSender = sender?._id === user?._id;
  const timeago = moment(createAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        background: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender ? (
        <Typography color={lightBlue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      ) : (
        <Typography color={lightBlue} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((data, index) => {
          const url = data.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{ color: "black" }}
              >{<RenderAttachment file={file} url={url}/>}</a>
            </Box>
          );
        })}

      <Typography variant="caption" color="text.secondary">
        {timeago}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
