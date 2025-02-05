import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

const HopeFuelIDListItem = ({ data }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Refunded":
        return "#03fc73";
      case "Pending":
        return "#FBBF24";
      default:
        return "#B91C1C";
    }
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item) => (
          <>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                mx: { xs: "1rem", sm: "2rem", md: "2rem" },
                py: "1rem",
                px: "1rem",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
                my: { xs: "1rem", sm: "1.5rem" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: { xs: "flex-start", sm: "space-between" },
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
                  {item.HopeFuelID}
                </Typography>
                <Box sx={{ minWidth: "200px" }}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    {item.Name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    {item.Email}
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
                    Card ID - {item.CardID}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.TransactionDate} 09:55:00
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
                    {item.Amount}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.CurrencyCode}
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
                    {item.Month}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.Month > 1 ? "Months" : "Month"}
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
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    Merchant ID
                  </Typography>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.ManyChatId}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    minWidth: "140px",
                    width: "140px",
                    backgroundColor: getStatusColor(item.TransactionStatus),
                    color: "#000000",
                    px: "1rem",
                    py: ".5rem",
                    borderRadius: "18px",
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.TransactionStatus}
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
                  maxWidth: "65%",
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
          </>
        ))}
    </>
  );
};

export default HopeFuelIDListItem;
