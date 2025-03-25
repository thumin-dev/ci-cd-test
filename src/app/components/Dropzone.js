import { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDropzone } from "react-dropzone";

const CustomDropzone = ({ handleDrop, uploadProgress }) => {
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      setIsUploading(true);
      await handleDrop(acceptedFiles);
      setIsUploading(false);
    },
    accept: { "image/*": [] },
    multiple: true,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        width: "100%",
        maxWidth: "450px",
        height: "300px",
        border: "2px dashed #ccc",
        borderRadius: "12px",
        textAlign: "center",
        p: 3,
        mt: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      {uploadProgress ? (
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
  );
};

export default CustomDropzone;
