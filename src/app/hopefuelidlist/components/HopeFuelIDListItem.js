import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const HopeFuelIDListItem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        mx: { xs: "1rem", sm: "2rem", md: "4rem" },
        p: "1rem",
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
        my: { xs: "1rem", sm: "1.5rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: { xs: "flex-start", sm: "space-around" },
          gap: { xs: "1rem", sm: "0.8rem", md: "1rem" },
          overflowX: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
            minWidth: "fit-content",
          }}
        >
          HOPED-1024
        </Typography>
        <Box sx={{ minWidth: "200px" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Geek Squad Studio
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            geeksquadstudio@gmail.com
          </Typography>
        </Box>

        <Box sx={{ minWidth: "150px" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Card ID - 12345678
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            28-11-2024 09:55:00
          </Typography>
        </Box>

        <Box sx={{ minWidth: "80px" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            600,000
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            MMK
          </Typography>
        </Box>

        <Box sx={{ minWidth: "60px" }}>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            3
          </Typography>
          <Typography
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Month
          </Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#B91C1C",
            color: "white",
            textTransform: "none",
            borderRadius: "18px",
            px: 2,
            py: 0.5,
            minWidth: "120px",
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#B91C1C",
            },
          }}
        >
          View Screenshot
        </Button>

        <Box sx={{ minWidth: "100px" }}>
          <Typography sx={{ fontSize: "14px" }}>Merchant ID</Typography>
          <Typography sx={{ fontSize: "14px" }}>7777777</Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#FBBF24",
            color: "#000000",
            px: 2,
            py: 0.5,
            borderRadius: "12px",
            fontSize: "14px",
            minWidth: "fit-content",
          }}
        >
          ဖောင်တင်သွင်းခြင်း
        </Box>
      </Box>

      <Divider sx={{ my: "0.5rem", borderColor: "#CBD5E1" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 1,
          maxWidth: "50%",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
            minWidth: "fit-content",
          }}
        >
          AWS-1837446g-8760-27274yn-f49888-ch98879-888
        </Typography>
        <Typography
          sx={{
            color: "#000000",
            fontSize: "14px",
            fontWeight: 400,
            minWidth: "fit-content",
          }}
        >
          Note: Transaction approved.
        </Typography>
      </Box>
    </Box>
  );
};

export default HopeFuelIDListItem;
