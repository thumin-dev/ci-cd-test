import { Box, Chip, Typography } from "@mui/material";

function ItemCard({ item }) {

  const handleClick = () => {
    console.log("Clicked");

  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {/* Conditional rendering for the screenshot */}
        {item.ScreenShotLink ? (
          <Box
            component="img"
            src={item.ScreenShotLink}
            alt="Payment screenshot"
            sx={{
              width: 40,
              height: 40,
              objectFit: "cover",
              marginRight: 2,
              borderRadius: 2,
            }}
          />
        ) : (
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#f0f0f0",
              marginRight: 2,
              borderRadius: 2,
            }}
          />
        )}
        <Box>
          <Typography variant="body1">{item.HopeFuelID}</Typography>
          <Typography variant="caption">{item.CustomerName}</Typography>
        </Box>
      </Box>
      <Chip label={item.CurrencyCode} color="primary" size="small" />
    </Box>
  );
}

export default ItemCard;
