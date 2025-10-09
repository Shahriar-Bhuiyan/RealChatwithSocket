import ChatList from "../specific/Chatlist";
import { Grid } from "@mui/material";
import Header from "./Header";
import React from "react";
import SEO from "../shared/SEO";
import { Samplechats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";

const AppLayout = (WrapperComponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };
    return (
      <>
        <SEO />
        <Header />
        <Grid container height="calc(100vh - 4rem)" direction={"column"}>
          <Grid
            item
            xs={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <ChatList
              chats={Samplechats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              bgcolor: "rgba(0,0,0,0.4)",
            }}
            height={"100%"}
          >
            THird
          </Grid>
        </Grid>
      </>
    );
  };
};
export default AppLayout;
