import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "../Components/SearchBar";
import Divider from "@mui/material/Divider";
import { Container, Typography, CircularProgress } from "@mui/material";
import ItemList from "../Components/ItemList";

export default function SearchBarForm() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Function to fetch data from the API
  const handleSearch = async (HopeFuelID) => {
    setLoading(true);
    setError(null);
    setNoResults(false);

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

      if (data.length === 0) {
        setNoResults(true);
      } else {
        setItems(data);
      }
    } catch (error) {
      console.error("Search Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  // Fetch initial data on mount
  useEffect(() => {
    handleSearch(""); // Fetch all data initially
  }, []);

  // Navigate to the PaymentDetails page when an item is clicked
  const handleItemClick = (HopeFuelID) => {
    router.push(`/details/${HopeFuelID}`);
  };

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
      <SearchBar onSearch={handleSearchChange} />

      <Divider
        sx={{
          width: "100%",
          marginTop: 4,
          borderColor: "rgba(0, 0, 0, 0.12)",
          marginBottom: 4,
        }}
      />

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : noResults ? (
        <Typography variant="body1" color="textSecondary">
          No matching items found. Please try a different search term.
        </Typography>
      ) : (
        <ItemList
          items={items}
          searchQuery={searchQuery}
          onItemClick={handleItemClick}
        />
      )}
    </Container>
  );
}
