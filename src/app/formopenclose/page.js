"use client";

import React, { useState } from "react";
import FormStatus from "./components/FormStatus";
import { HISTORY_DATA } from "../variables/const";

const FormOpenClosePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <FormStatus
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        data={HISTORY_DATA}
      />
    </>
  );
};

export default FormOpenClosePage;
