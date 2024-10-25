import SearchBar from "../Components/SearchBar";
import Divider from "@mui/material/Divider";
import { Box, Container, Typography } from "@mui/material";

export default function SearchBarForm() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Align content towards the top
        alignItems: "center",
        paddingTop: { xs: "8%", md: "5%" }, // Top padding: 10% for small screens, 8% for medium+ screens
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Search Page
      </Typography>

      <SearchBar />

      <Divider
        sx={{
          width: "100%",
          marginTop: 4, // Add space between the SearchBar and Divider
          borderColor: "rgba(0, 0, 0, 0.12)",
        }}
      />
    </Container>
  );
}
