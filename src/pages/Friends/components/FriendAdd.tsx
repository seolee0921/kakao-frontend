import {
  Container,
  Grid,
  IconButton,
  List,
  TextField,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Box } from "@mui/system";
import ImageIcon from "@mui/icons-material/Image";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

type SearchResultType = {
  id: number;
  name: string;
  statusMessage: string;
};

const FriendAdd = (): JSX.Element => {
  const [phone, setPhone] = useState<string>("");
  const [user, setUser] = useState<SearchResultType>();

  const searchUser = async () => {
    const { data } = await axios.get<SearchResultType>(
      "http://localhost:5000/friends/search",
      {
        params: {
          phone,
        },
      }
    );
    setUser(data);
  };

  const updatePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  };

  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              fullWidth
              label="전화번호"
              value={phone}
              onChange={updatePhone}
            ></TextField>
          </Grid>
          <Grid item xs={1.5} sx={{ position: "relative", left: 10 }}>
            <IconButton sx={{ p: 2 }} onClick={searchUser}>
              <SearchIcon></SearchIcon>
            </IconButton>
          </Grid>
        </Grid>
        <List>
          {user && (
            <ListItem
              secondaryAction={
                <IconButton>
                  <PersonAddIcon></PersonAddIcon>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon></ImageIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.statusMessage}
              ></ListItemText>
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default FriendAdd;
