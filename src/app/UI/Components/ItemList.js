import { Box, Button, Stack, Typography } from "@mui/material";
import ItemCard from "./ItemCard";

function ItemList({ items, onLoadMore, searchQuery }) {
  // Determine if there is a search query
  const hasSearchQuery = searchQuery && searchQuery.trim() !== "";

  return (
    <Box
      sx={{
        width: 280,
        height: "80vh",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        padding: 2,
        overflowY: "auto",
        boxShadow: 2,
      }}
    >
      {/* Render the list of items */}
      {items.length > 0 ? (
        <Stack spacing={2}>
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          No items available
        </Typography>
      )}

      {/* Conditionally render the "Load More..." button only if not searching */}
      {!hasSearchQuery && items.length > 0 && (
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
