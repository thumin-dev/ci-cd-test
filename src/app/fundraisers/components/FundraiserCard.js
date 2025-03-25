"use client";

import { Avatar, Box, Card, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const FundraiserCard = ({ fundraiser, onClick }) => {
  return (
    <Card
      onClick={() => onClick(fundraiser.id)}
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        borderRadius: 3,
        boxShadow: "0 2px 3px 2px #0000001C",
        backgroundColor: "white",
        minWidth: 298,
        height: 98,
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Avatar
        src="https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fhelpx.adobe.com%2Fcontent%2Fdam%2Fhelp%2Fen%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white%2Fjcr_content%2Fmain-pars%2Fbefore_and_after%2Fimage-before%2FLandscape-Color.jpg&imgrefurl=https%3A%2F%2Fhelpx.adobe.com%2Fth_th%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white.html&docid=JHNdH3GHMG45hM&tbnid=2DNOEjVi-CBaYM&vet=12ahUKEwiI4pOz-pKMAxWaU2wGHWLRL-IQM3oECHIQAA..i&w=1601&h=664&hcb=2&ved=2ahUKEwiI4pOz-pKMAxWaU2wGHWLRL-IQM3oECHIQAA"
        alt="Logo"
        sx={{
          width: 74,
          height: 74,
          mr: 2,
          border: "1px solid #f0f0f0",
        }}
      />
      <Box sx={{ overflow: "hidden" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#0F172A", fontSize: 14 }}
        >
          {fundraiser.name}
        </Typography>
        <Typography sx={{ color: "#0F172A", fontSize: 14, fontWeight: 400 }}>
          {fundraiser.id}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0.2 }}>
          {fundraiser.tags.map((tag, index) => (
            <Typography
              key={index}
              variant="caption"
              color="text.secondary"
              sx={{
                display: "inline",
                whiteSpace: "nowrap",
                color: "#0F172A",
                fontSize: 12,
                fontWeight: 400,
              }}
            >
              {index > 0 ? "• " : ""}
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default FundraiserCard;
