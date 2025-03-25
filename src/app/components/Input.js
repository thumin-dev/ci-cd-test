import React from "react";
import { TextField, Select, MenuItem, InputAdornment, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CustomInput = ({ type, options, value, onChange, error, helperText, readOnly, min, step, endAdornment, ...props }) => {
  const commonStyles = {
    mb: 2,
    borderRadius: "12px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      height: "48px",
    },
    "& .MuiInputBase-input": {
      height: "100%",
      padding: "0px 0px 0px 12px",
      fontSize: "14px",
    },
  };

  if (type === "select") {
    return (
      <Select
        fullWidth
        sx={{
          ...commonStyles,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1976d2",
          },
          "& .MuiSelect-select": {
            padding: "12px",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
          },
        }}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    );
  }

  return (
    <TextField
      fullWidth
      sx={commonStyles}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      InputProps={{
        readOnly: readOnly,
        min: min,
        step: step,
        endAdornment: endAdornment && (
          <InputAdornment position="end">
            <IconButton onClick={endAdornment.decrease}><RemoveIcon /></IconButton>
            <IconButton onClick={endAdornment.increase}><AddIcon /></IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default CustomInput;