import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  IconButton,
  Avatar,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const FundraiserDetails = ({
  fundraiserDetails,
  onClose,
  onEdit,
  onDelete,
}) => {
  return (
    <Paper
      key={fundraiserDetails.FundraiserID}
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
        <IconButton onClick={() => onClose && onClose()} size="small">
          <CloseIcon />
        </IconButton>
        <Box>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              onDelete && onDelete(fundraiserDetails.FundraiserID);
            }}
            size="small"
            sx={{ color: "#f44336" }}
          >
            <DeleteOutlineIcon />
          </IconButton>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              onEdit && onEdit(fundraiserDetails.FundraiserID);
            }}
            size="small"
          >
            <EditOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", mt: 2, mb: 4 }}>
        <Avatar
          src={fundraiserDetails.FundraiserLogo}
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
          {fundraiserDetails.FundraiserName}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#0F172A", fontSize: 18, fontWeight: 400 }}
        >
          {fundraiserDetails.FundraiserCentralID}
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
            {fundraiserDetails.BaseCountryName}
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
            {fundraiserDetails.AcceptedCurrencies[0]}
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
              {fundraiserDetails.FundraiserEmail}
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
              sx={{
                mr: 2,
                minWidth: "60px",
                color: "#000000",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Facebook
            </Typography>
            <Link
              href={fundraiserDetails.ContactLinks.FacebookLink}
              sx={{
                color: "#3460DC",
                fontSize: 18,
                fontWeight: 600,
                textDecorationLine: "underline",
                textDecorationColor: "#3460DC",
                textDecorationThickness: 0,
              }}
            >
              {fundraiserDetails.ContactLinks.FacebookLink}
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
              sx={{
                mr: 2,
                minWidth: "60px",
                color: "#000000",
                fontSize: 14,
                fontWeight: 400,
              }}
            >
              Telegram
            </Typography>
            <Link
              href={
                fundraiserDetails.ContactLinks.TelegramLink
                  ? fundraiserDetails.ContactLinks.TelegramLink
                  : "https://t.me/"
              }
              sx={{
                color: "#3460DC",
                fontSize: 18,
                fontWeight: 600,
                textDecorationLine: "underline",
                textDecorationColor: "#3460DC",
                textDecorationThickness: 0,
              }}
            >
              {fundraiserDetails.ContactLinks.TelegramLink
                ? fundraiserDetails.ContactLinks.TelegramLink
                : "https://t.me/"}
            </Link>
          </Box>

          {fundraiserDetails.ContactLinks.OtherLink1 && (
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
                OtherLink1
              </Typography>
              <Link
                href={fundraiserDetails.ContactLinks.OtherLink1}
                sx={{
                  color: "#3460DC",
                  fontSize: 18,
                  fontWeight: 600,
                  textDecorationLine: "underline",
                  textDecorationColor: "#3460DC",
                  textDecorationThickness: 0,
                }}
              >
                {fundraiserDetails.ContactLinks.OtherLink1}
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default FundraiserDetails;
