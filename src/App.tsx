import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper, Tab, Tabs } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import { Box } from "@mui/system";
import Friends from "./pages/Friends";

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>("friends");

  const changeTab = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <section>
      <Box sx={{ pb: 7 }}>{currentTab === "friends" && <Friends />}</Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Tabs centered variant="fullWidth" value={currentTab}>
          <Tab
            icon={<PeopleIcon />}
            label="친구"
            value="friends"
            onClick={() => changeTab("friends")}
          ></Tab>
          <Tab
            icon={<ChatIcon />}
            label="채팅"
            value="chats"
            onClick={() => changeTab("chats")}
          ></Tab>
        </Tabs>
      </Paper>
    </section>
  );
};

export default App;
