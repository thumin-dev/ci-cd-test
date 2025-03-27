import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress, List, ListItem, ListItemText, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";

const CustomDropzone = ({ handleDrop, uploadProgress }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      setIsUploading(true);
      await handleDrop(acceptedFiles);
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      setIsUploading(false);
    },
    accept: { "image/*": [] },
    multiple: true,
  });

  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "450px" }}>
      <Box
        {...getRootProps()}
        sx={{
          width: "100%",
          height: "300px",
          border: "2px dashed #ccc",
          borderRadius: "12px",
          textAlign: "center",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <Typography sx={{ color: "gray", fontSize: "14px", fontWeight: 600 }}>
            Uploading {uploadProgress}%
          </Typography>
        ) : (
          <Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FFD700", color: "black", fontSize: "12px" }}
            >
              <CloudUploadIcon sx={{ mr: 1 }} />
              Upload Screenshot(s)
            </Button>
            <Typography sx={{ mt: 1, color: "gray", fontSize: "12px", fontWeight: 600 }}>
              or drop screenshot(s) here
            </Typography>
          </Box>
        )}
        {isUploading && <CircularProgress sx={{ mt: 2 }} />}
      </Box>
      {files.length > 0 && (
        <List sx={{ mt: 2, maxHeight: "200px", overflowY: "auto" }}>
          {files.map((file, index) => (
            <ListItem key={index} secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(file.name)}>
                <DeleteIcon />
              </IconButton>
            }>
              <ListItemText primary={file.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default CustomDropzone;
