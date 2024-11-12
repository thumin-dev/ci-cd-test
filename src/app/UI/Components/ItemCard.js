import { Box, Typography, Chip } from "@mui/material";

export default function ItemCard({ item, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        borderBottom: "1px solid #f0f0f0",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1">{item.HopeFuelID}</Typography>
        <Typography variant="caption">{item.CustomerName}</Typography>
      </Box>
      <Chip label={item.CurrencyCode} size="small" />
    </Box>
  );
}
