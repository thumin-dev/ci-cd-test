import React from "react";
import { Grid, Card, Typography, Chip, Box, Button } from "@mui/material";

const CardDisplay = ({ id, name, status }) => {
  return (
    <Card
      sx={{
        width: 184,
        height: 229,
        borderRadius: 2,
        padding: 0,
        overflow: "visible",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: 160,
            height: 126,
            backgroundColor: "#CBD5E1",
            borderRadius: 2,
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
            m: 1,
          }}
        />
        <Box
          sx={{
            gap: 1,
            px: 2,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            {id}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
            }}
          >
            {name}
          </Typography>
          <Chip
            label={status}
            sx={{
              backgroundColor: "#ffc107",
              color: "#000",
              height: 24,
              borderRadius: 20,
              width: 114,

              fontSize: "0.75rem",
              "& .MuiChip-label": {
                px: 1,
              },
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default CardDisplay;
