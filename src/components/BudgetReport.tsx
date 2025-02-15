import Grid from "@mui/material/Grid2";
import MonthlyReport from "./MonthlyReport";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
const BudgetReport = () => {
  return (
    <Grid
      container
      gap={2}
      flexGrow={1}
      flexDirection={"column"}
      spacing={1}
      sx={{ margin: 1.5 }}
    >
      <Grid container size={12} gap={1}>
        <Grid>
          <Autocomplete
            sx={{ minWidth: 175 }}
            options={[2021, 2022, 2023, 2024, 2025]}
            defaultValue={2025}
            renderInput={(params) => <TextField {...params} label="Year" />}
          />
        </Grid>
        <Grid>Total: 3000</Grid>
        <Grid>Total: 4000</Grid>
      </Grid>
      <Grid container size={12} gap={1}>
        <Grid>
          <Autocomplete
            sx={{ minWidth: 175 }}
            options={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            defaultValue={"June"}
            renderInput={(params) => <TextField {...params} label="Month" />}
          />
        </Grid>
        <Grid>Total: 1000</Grid>
        <Grid>Total: 2000</Grid>
      </Grid>
      <Grid container size={12} spacing={1} flexGrow={1}>
        <Grid container size={12}>
          <Grid size={6}>
            <MonthlyReport name="Xiangli" reimbursable />
          </Grid>
          <Grid size={6}>
            <MonthlyReport name="Alan" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BudgetReport;
