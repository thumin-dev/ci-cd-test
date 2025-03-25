"use client";

import { useState } from "react";
import FundraisingForm from "../components/fundraisingForm";
import FundraiserCard from "../components/FundraiserCard";
import { FUNDRAISER_DATA } from "../../variables/const";
import { Box, Container, Grid2, Modal } from "@mui/material";
import FundraiserDetails from "../components/FundraiserDetails";

const CreateFundraisingPage = () => {
  const [openFundraiserDetailsModal, setOpenFundraiserDetailsModal] =
    useState(false);

  const handleOpenFundraiserDetailsModal = (id) => {
    setOpenFundraiserDetailsModal((prev) => !prev);
  };

  const handleCloseFundraiserDetailsModal = () => {
    setOpenFundraiserDetailsModal((prev) => !prev);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {FUNDRAISER_DATA.map((fundraiser, index) => (
            <Grid2 xs={4} sm={4} md={3} lg={3} key={index}>
              <FundraiserCard
                fundraiser={fundraiser}
                onClick={handleOpenFundraiserDetailsModal}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Modal
        open={openFundraiserDetailsModal}
        onClose={handleCloseFundraiserDetailsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignSelf: "center", justifyItems: "center" }}
      >
        <FundraiserDetails />
      </Modal>
    </Box>
  );
};

export default CreateFundraisingPage;
