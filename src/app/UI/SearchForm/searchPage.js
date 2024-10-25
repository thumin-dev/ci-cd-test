import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import Divider from "@mui/material/Divider";
import { Container, Typography, CircularProgress } from "@mui/material";
import ItemList from "../Components/ItemList";

export default function SearchBarForm() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState(null); // Manage error state

  // Function to fetch data from the API
  const handleSearch = async (HopeFuelID) => {
    setLoading(true); 
    setError(null); 

    try {
      const url = HopeFuelID
        ? `/api/searchDB?HopeFuelID=${HopeFuelID}`
        : `/api/searchDB`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);
      setItems(data); // Update items state with fetched data
    } catch (error) {
      console.error("Search Error:", error);
      setError(error.message); // Update error state
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetch initial data for October transactions on component mount
  useEffect(() => {
    handleSearch(); // Fetch all October transactions
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: { xs: "8%", md: "5%" },
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Search Page
      </Typography>

      {/* Search Bar with search handler */}
      <SearchBar onSearch={handleSearch} />

      <Divider
        sx={{
          width: "100%",
          marginTop: 4,
          borderColor: "rgba(0, 0, 0, 0.12)",
          marginBottom: 4,
        }}
      />

      {/* Conditional Rendering */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
}
