import React from "react";
import {
  Paper,
  Box,
  TextField,
  InputAdornment,
  List,
  ListItem,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = ({
  profiles,
  selectedProfile,
  setSelectedProfile,
  onLoadMore,
}) => {
  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Box sx={{ backgroundColor: "#F1F5F9" }}>
        <TextField
          size="small"
          placeholder="Search..."
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon size={16} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <List sx={{ p: 0 }}>
        {profiles.map((profile, index) => (
          <React.Fragment key={index}>
            <ListItem
              button
              selected={selectedProfile === index}
              onClick={() => setSelectedProfile(index)}
              sx={{
                py: 1,
                bgcolor:
                  selectedProfile === index
                    ? "rgba(0, 0, 0, 0.04)"
                    : "transparent",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  cursor: "pointer",
                },
              }}
            >
              <Box>
                <Typography variant="subtitle2">{profile.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.id}
                </Typography>
              </Box>
            </ListItem>
            {index < profiles.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      <Button
        onClick={() => onLoadMore && onLoadMore()}
        fullWidth
        variant="outlined"
        color="primary"
        sx={{ mt: 2, borderRadius: 18 }}
      >
        Load More...
      </Button>
    </Paper>
  );
};

export default Sidebar;
