import {
  Avatar,
  Container,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Grid,
  Modal,
  IconButton,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { friends } from "./data";
import axios from "axios";
import { Box } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import FriendAdd from "./components/FriendAdd";

type FriendType = {
  id: number;
  name: string;
  statusMessage: string;
};

const Friends = (): JSX.Element => {
  const [originalFriends, setOriginalFriends] = useState<FriendType[]>([]);
  const [friendsList, setFriendList] = useState<FriendType[]>([]);
  const [open, setOpen] = useState(false);

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(friends);
    } else {
      const fillteredFriends = originalFriends.filter((friend) => {
        friend.name.includes(inputText);
      });
      setFriendList(fillteredFriends);
    }
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const getFriendList = async () => {
    const { data } = await axios.get<FriendType[]>(
      "http://localhost:5000/friends/1"
    );
    setOriginalFriends(data);
    setFriendList(data);
  };

  useEffect(() => {
    getFriendList();
  }, []); // 함수칸에 함수가 없으면 새로고침할때 한번만 실행함

  return (
    <Container>
      <Modal open={open} onClose={closeModal}>
        <FriendAdd></FriendAdd>
      </Modal>
      <Box>
        <Grid container>
          <Grid item xs={10.5}>
            <TextField
              label="친구 추가"
              variant="outlined"
              fullWidth
              margin="dense"
              onChange={changeSearchText}
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <Box sx={{ p: "8px" }}>
              <IconButton color="primary" size="large" onClick={openModal}>
                <PersonAddIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TextField
          label="친구 검색"
          variant="outlined"
          fullWidth
          margin="dense"
          onChange={changeSearchText}
        ></TextField>
      </Box>
      <List>
        {friendsList.map((friend) => {
          return (
            <ListItemButton key={friend.id}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon></ImageIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={friend.name}
                secondary={friend.statusMessage}
              ></ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default Friends;
