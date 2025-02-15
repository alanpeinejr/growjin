import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

function App() {
  return (
    <>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            height: "100vh",
            overflow: "hidden",
            width: "100vw",
          }}
        >
          <RouterProvider router={createBrowserRouter(routes)} />
        </Container>
      </LocalizationProvider>
    </>
  );
}

export default App;
