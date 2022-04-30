import { Box } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import MUITextField from "../../mui-components/MUITextField/MUITextField";
import * as styledComp from "./AddProductDetails.style";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Details Form attributes: parent: ProjectDetails, child: NA
 */
export default function AddProjectDetailsForm() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box mb={3}>
      <styledComp.flexRow>
        <MUITextField
          label="Project Name"
          name="projectName"
          control={control}
          defaultValue=""
          required
          errors={errors.email}
        />

        <MUITextField
          label="Project Name 2"
          name="email"
          control={control}
          defaultValue=""
          required
          errors={errors.email}
        />
      </styledComp.flexRow>
    </Box>
  );
}
