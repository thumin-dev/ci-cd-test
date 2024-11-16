import React from "react";
import { Stack, Box, Button, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

function ItemList({ items, onItemClick, onLoadMore, hasInput }) {
  console.log("Items are ");
  console.log(JSON.stringify(items) + "hello");
  return (
    <Box
      sx={{
        maxHeight: "80vh", // Set the maximum height for scrolling
        overflowY: "auto", // Enable vertical scrolling
        padding: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 3,
      }}
    >
      {/* List of Items */}
      <Stack spacing={2}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              onClick={() => onItemClick(item.HopeFuelID)}
            />
          ))
        ) : (
          <h1>No items is found </h1>
        )}
      </Stack>

      {/* Conditionally show Load More button if there's no input in the search bar */}
      {!hasInput && items.length > 0 && (
        <Button
          fullWidth
          variant="outlined"
          sx={{ marginTop: 2 }}
          onClick={onLoadMore}
        >
          Load More...
        </Button>
      )}
    </Box>
  );
}

export default ItemList;
