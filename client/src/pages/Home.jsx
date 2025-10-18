import { Box, Typography } from "@mui/material";

import AppLayout from "../components/layout/AppLayout";
import React from "react";

function Home() {
  return <Box bgcolor={'gray'} height={"100%"}>
    <Typography p={'2rem'} variant="h5" textAlign={'center'}>
      Select a Friend to Chat
    </Typography>
  </Box>;
}

export default AppLayout(Home);
