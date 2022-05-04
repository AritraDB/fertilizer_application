import * as React from "react";
import Paper from "@mui/material/Paper";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import AddProjectDetailsForm from "../AddProductDetails/AddProductDetails";
import { projectDetailsValidationSchema } from "../../../validations/projectDetailsValidation";
import * as styledComp from "./ProductDetails.style";
import UIConstants from "../../../constants/TextConstants";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Details (yupResolver and submit button) screen: parent: ProductInformation, child: AddProjectDetailsForm
 */

export default function ProjectDetails() {
  const formMethods = useForm({
    resolver: yupResolver(projectDetailsValidationSchema),
    mode: "all",
  });

  const formSubmit = () => {
    // prop:  data: any
    // console.log(data);
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        // height: 240,
      }}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(formSubmit)}>
          <AddProjectDetailsForm />
          <styledComp.submitButtonArea>
            <Button type="submit" variant="contained">
              {UIConstants.projectDetailsSubmit}
            </Button>
          </styledComp.submitButtonArea>
        </form>
      </FormProvider>
    </Paper>
  );
}
