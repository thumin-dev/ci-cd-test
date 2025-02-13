import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const InfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
}));

const Value = styled(Typography)({
  fontSize: "1rem",
  textAlign: "right",
});

const ScrollableImageContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  gap: "8px",
  padding: "4px",
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "3px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

const ImageItem = styled("img")({
  width: "239px",
  height: "239px",
  objectFit: "cover",
  borderRadius: "8px",
  flexShrink: 0,
});

const HopeFuelIDListDetails = ({ data }) => {
  return (
    <Container>
      {data?.map((data, index) => (
        <Box sx={{ maxWidth: 600, margin: "40px auto" }}>
          <InfoRow>
            <Typography
              sx={{
                fontSize: "28px",
                lineHeight: "34px",
                color: "#000000",
                fontWeight: 700,
              }}
              variant="h4"
              component="h1"
            >
              {data?.hopeId}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#FFB800",
                padding: "4px 12px",
                borderRadius: "16px",
              }}
            >
              <Typography
                sx={{
                  color: "#000000",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: "18px",
                }}
              >
                ဝယ်ထားသည့်ပွိုင့်
              </Typography>
            </Box>
          </InfoRow>

          <Divider sx={{ my: 2 }} />

          <InfoRow sx={{ mb: 3 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "28px",
                  lineHeight: "34px",
                  color: "#000000",
                  fontWeight: 700,
                }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "22px",
                }}
              >
                {data.email}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                  lineHeight: "22px",
                }}
              >
                Card ID
              </Typography>
              <Typography
                sx={{
                  fontSize: "28px",
                  lineHeight: "34px",
                  color: "#000000",
                  fontWeight: 700,
                }}
              >
                12345678
              </Typography>
            </Box>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Create Time
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
              }}
            >
              {data.createTime}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Month
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
              }}
            >
              {data.month}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Amount
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
              }}
            >{`${data.amount.toLocaleString()} `}</Value>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Currency
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
              }}
            >
              {data.currency}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Form Filling Person
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
                maxWidth: "50%",
              }}
            >
              {data.formFillingPerson}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label
              sx={{
                color: "#000000",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "17px",
              }}
            >
              Manychat ID
            </Label>
            <Value
              sx={{
                color: "#000000",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: 600,
              }}
            >
              {data.manychatId}
            </Value>
          </InfoRow>
          <Box mt={3}>
            <ScrollableImageContainer>
              {data.images?.map((image, idx) => (
                <>
                  <ImageItem key={idx} src={image} loading="lazy" />
                </>
              ))}
            </ScrollableImageContainer>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default HopeFuelIDListDetails;
