"use client";

import { Button } from "@mui/material";

const CustomButton = ({
  width,
  variant,
  onClick,
  text,
  icon = null,
  color,
  fontWeight,
  type,
}) => {
  return (
    <Button
      fullWidth={width ? width : false}
      variant={variant ? variant : "outlined"}
      startIcon={icon ? icon : null} 
      onClick={onClick}
      type={type ? type : "button"}
      sx={{
        color: color,
        borderColor: color,
        borderRadius: "24px",
        padding: "8px 16px",
        textTransform: "none",
        fontWeight: fontWeight ? fontWeight : "bold",
        "&:hover": {
          backgroundColor: `${color}20`, 
          borderColor: color,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
