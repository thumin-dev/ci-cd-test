import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Box,
} from "@mui/material";

function ItemCard({ }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "8px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        "&:hover": { backgroundColor: "#f0f0f0" },
        cursor: "pointer",
      }}
    >
      <Avatar
        sx={{
          width: 64,
          height: 64,
          marginRight: "16px",
          backgroundColor: "#c4c4c4",
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          HopeFuelId
        </Typography>
        <Typography variant="body2" color="textSecondary">
          CustomerName
        </Typography>
      </CardContent>
      <Box>
        <Chip label={"Currency"} color="primary" variant="outlined" />
      </Box>
    </Card>
  );
}

export default ItemCard;
