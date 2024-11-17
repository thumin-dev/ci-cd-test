import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";

const AmountDetails = () => (
  <Box sx={{ padding: 3 }}>
    {/* Wallet and Currency Information */}
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      mb={3}
    >
      <Chip label="MMK" color="error" sx={{ fontWeight: "bold" }} />
      <Chip
        label="Testing Wallet"
        sx={{ fontWeight: "bold" }}
      />
    </Stack>

    {/* Total Amount and Total Month */}
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      alignItems="center"
      justifyContent="space-around"
    >
      <Card
        variant="outlined"
        sx={{
          flex: 1,
          minWidth: 180,
          textAlign: "center",
          padding: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Amount
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          100,000.0
        </Typography>
      </Card>

      <Card
        variant="outlined"
        sx={{
          flex: 1,
          minWidth: 180,
          textAlign: "center",
          padding: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Month
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: "bold" }}>
          1
        </Typography>
      </Card>
    </Stack>
  </Box>
);

export default AmountDetails;
