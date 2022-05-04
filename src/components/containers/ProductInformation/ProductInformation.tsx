import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectDetails from "../ProductDetails/ProductDetails";
import UIConstants from "../../../constants/TextConstants";
import { useEffect } from "react";
import axios from "../../../http-handler/axios-config";

const mdTheme = createTheme();

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */
export default function ProductInformation() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : "");
  };

  let responseData: any;
  const getDemoHTTPData = () => {
    axios
      .get("todos/1")
      .then(
        (response) => {
          responseData = response.data;
        }
        // console.log(`response ==> ${JSON.stringify(response.data)}`)
      )
      .catch((error) => {
        // console.log(`error ==> ${JSON.stringify(error.message)}`);
        // console.error("There was an error!", error);
      });
  };
  useEffect(() => {
    getDemoHTTPData();
    console.log(`responseData ==> ${JSON.stringify(responseData)}`);
  });

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={12}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {UIConstants.projectDetails}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {responseData}
                    <ProjectDetails />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
