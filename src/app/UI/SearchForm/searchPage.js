import React, { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import {
  Container,
  Typography,
  CircularProgress,
  TextField,
} from "@mui/material";
import ItemList from "../Components/ItemList";

export default function SearchBarForm() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputText, setInputText] = useState("");
  const [page, setPage] = useState(1);

  // Function to fetch data from the API
  const handleSearch = async (HopeFuelID) => {
    setLoading(true);
    setError(null);
    setNoResults(false);

    try {
      const url = HopeFuelID
        ? `/api/searchDB?HopeFuelID=${HopeFuelID}&page=${page}`
        : `/api/searchDB?page=${page}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched Data:", data);

      if (data.length === 0 && page === 1) {
        setNoResults(true);
      } else {
        setItems((prevItems) => (page === 1 ? data : [...prevItems, ...data]));
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
    setPage(1); // Reset to first page on new search
    handleSearch(query);
  };

  // Load More items
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Fetch initial data
  useEffect(() => {
    if (page > 1 || searchQuery === "") {
      handleSearch(searchQuery);
    }
  }, [page]);

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
      {/* Search Bar */}
      <SearchBar onSearch={handleSearchChange} />

      {/* Conditional Rendering */}
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
          hasInput={searchQuery.length > 0 || inputText.length > 0}
          onLoadMore={handleLoadMore}
          onItemClick={(HopeFuelID) => console.log("Item clicked:", HopeFuelID)}
        />
      )}
    </Container>
  );
}
