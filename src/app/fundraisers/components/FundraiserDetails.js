import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  IconButton,
  Avatar,
  Link,
  Grid2,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const FundraiserDetails = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 1000,
        minHeight: 900,
        borderRadius: 4,
        overflow: "hidden",
        m: "auto",
      }}
    >
      <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
        <Box>
          <IconButton size="small" sx={{ color: "#f44336" }}>
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton size="small">
            <EditOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mt: 2, mb: 4 }}>
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
          sx={{
            width: 80,
            height: 80,
            m: "auto",
            backgroundColor: "white",
            p: 1,
          }}
        />
        <Typography
          variant="h3"
          sx={{ color: "#0F172A", fontSize: 28, fontWeight: 700 }}
        >
          Starbucks Coffee
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#0F172A", fontSize: 18, fontWeight: 400 }}
        >
          12345678
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          py: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mb: 2,
            width: "100%",
            maxWidth: 400,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{ mr: 1, color: "#000000", fontSize: 14, fontWeight: 400 }}
          >
            Country
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000000", fontSize: 18, fontWeight: 600 }}
          >
            Japan
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            mb: 2,
            width: "100%",
            maxWidth: 400,
            px: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{ mr: 1, color: "#000000", fontSize: 14, fontWeight: 400 }}
          >
            Accepted Currency
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000000", fontSize: 18, fontWeight: 600 }}
          >
            JPY, MMK, USD, SGD
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            px: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 2, color: "#000000", fontSize: 20 }}
          >
            Contact
          </Typography>

          <Box
            sx={{
              display: "flex",
              mb: 2,
              maxWidth: 400,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mr: 2,
                minWidth: "60px",
                color: "#000000",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Email
            </Typography>
            <Link
              href="mailto:starbucksjp@sbcoffee.com"
              sx={{
                color: "#3460DC",
                fontSize: 18,
                fontWeight: 600,
                textDecorationLine: "underline",
                textDecorationColor: "#3460DC",
                textDecorationThickness: 0,
              }}
            >
              starbucksjp@sbcoffee.com
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              mb: 2,
              maxWidth: 400,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mr: 2, minWidth: "60px" }}
            >
              Facebook
            </Typography>
            <Link
              href="https://m.facebook.com/starbucksjp"
              sx={{
                color: "#3460DC",
                fontSize: 18,
                fontWeight: 600,
                textDecorationLine: "underline",
                textDecorationColor: "#3460DC",
                textDecorationThickness: 0,
              }}
            >
              m.facebook.com/starbucksjp
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              mb: 2,
              maxWidth: 400,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mr: 2, minWidth: "60px" }}
            >
              Telegram
            </Typography>
            <Link
              href="https://t.me/starbucksjp"
              sx={{
                color: "#3460DC",
                fontSize: 18,
                fontWeight: 600,
                textDecorationLine: "underline",
                textDecorationColor: "#3460DC",
                textDecorationThickness: 0,
              }}
            >
              t.me/starbucksjp
            </Link>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default FundraiserDetails;
