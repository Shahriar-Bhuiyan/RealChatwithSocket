import ChatList from "../specific/Chatlist";
import { Grid } from "@mui/material";
import Header from "./Header";
import Profile from "../specific/Profile";
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
            sx={{ display: { xs: "none", sm: "block" } }}
            size={{ xs: 4, md: 2 ,lg:2}}
            height={"100%"}
          >
            <ChatList
              chats={Samplechats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item height={"100%"} size={{ xs: 12, sm: 3, md: 5, lg: 7 }}>
            <WrapperComponent {...props} />
          </Grid>
          <Grid
            size={{ xs: 4, md: 4, lg: 3 }}
            sx={{
              display: { xs: "none", md: "block" },
              bgcolor: "rgba(0,0,0,0.4)",
              display: "flex",
            }}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};
export default AppLayout;
