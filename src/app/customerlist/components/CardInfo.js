import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../UI/theme";
import moment from "moment-timezone";

const CardInfo = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: 500,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ alignItems: "center" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: 14, fontWeight: 600, lineHeight: "22px" }}
          >
            Expire Date
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400, lineHeight: "18px" }}
          >
            12/31/2025
          </Typography>
        </Box>
        <Box sx={{ mt: theme.spacing(2) }}>
          <Typography
            variant="h6"
            sx={{ fontSize: 14, fontWeight: 600, lineHeight: "22px" }}
          >
            Card ID
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400, lineHeight: "18px" }}
          >
            8888888
          </Typography>
        </Box>
      </Box>
      <Box sx={{ alignItems: "center" }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: 14, fontWeight: 600, lineHeight: "22px" }}
          >
            Manychat ID
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400, lineHeight: "18px" }}
          >
            8888888
          </Typography>
        </Box>
        <Box sx={{ mt: theme.spacing(2) }}>
          <Typography
            variant="h6"
            sx={{ fontSize: 14, fontWeight: 600, lineHeight: "22px" }}
          >
            Expire Date Rollup
          </Typography>
          <Typography
            sx={{ fontSize: 12, fontWeight: 400, lineHeight: "18px" }}
          >
            {moment("2024-10-31T00:00:00.000Z").format("YYYY-MM-DD HH:mm")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardInfo;
