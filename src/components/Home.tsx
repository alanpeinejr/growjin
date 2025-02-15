import NavBar from "./NavBar";
import BudgetReport from "./BudgetReport";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack display={"contents"}>
      <NavBar />

      <Stack sx={{ height: "100%" }} flexGrow={1}>
        <BudgetReport />
      </Stack>
    </Stack>
  );
};
export default Home;
