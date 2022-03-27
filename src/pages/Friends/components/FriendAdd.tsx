import { Container, Grid, IconButton, List, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

const FriendAdd = (): JSX.Element => {
  return (
    <Container sx={{ p: 5 }}>
      <Box sx={{ background: "#f3f3f3", p: 3, borderRadius: "10px" }}>
        <Grid container>
          <TextField fullWidth label="전화번호"></TextField>
        </Grid>
        <Grid item xs={1.5}>
          <IconButton sx={{ p: 2 }}>
            <SearchIcon></SearchIcon>
          </IconButton>
        </Grid>
        <List></List>
      </Box>
    </Container>
  );
};

export default FriendAdd;
