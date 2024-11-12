import React from "react";
import { Stack, Box, Typography, Chip } from "@mui/material";
import ItemCard from "./ItemCard";

function ItemList({ items, searchQuery, onItemClick }) {
  return (
    <Stack spacing={2}>
      {items.map((item) => (
        <ItemCard
          key={item.HopeFuelID}
          item={item}
          onClick={() => onItemClick(item.HopeFuelID)}
        />
      ))}
    </Stack>
  );
}

export default ItemList;
