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
import { Box } from "@mui/system";
import { ChangeEvent, useState } from "react";
import FriendAdd from "./components/FriendAdd";

const Friends = (): JSX.Element => {
  const [friendsList, setFriendList] = useState(friends);
  const [open, setOpen] = useState(false);

  const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.currentTarget.value;
    if (inputText.length === 0) {
      setFriendList(friends);
    } else {
      const fillteredFriends = friends.filter((friend) => {
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
