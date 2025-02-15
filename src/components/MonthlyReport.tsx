import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import Typography from "@mui/material/Typography";

interface MonthlyReportProps {
  name: string;
  reimbursable?: boolean;
}
const columns: GridColDef[] = [
  { field: "date", headerName: "Date", flex: 20, type: "date" },
  {
    field: "description",
    headerName: "Description",
    flex: 50,
    type: "string",
  },
  { field: "amount", headerName: "Amount", flex: 20, type: "number" },
  { field: "category", headerName: "Category", flex: 15, type: "string" },
  {
    field: "reimbursable",
    headerName: "R",
    flex: 5,
    type: "boolean",
  },
];

const MonthlyReport = ({ name, reimbursable = false }: MonthlyReportProps) => {
  return (
    <Card sx={{ height: "90%" }}>
      <CardContent sx={{ height: "100%" }}>
        <Typography>{name}</Typography>
        <div style={{ height: "95%" }}>
          <DataGrid
            columns={columns}
            initialState={{
              columns: { columnVisibilityModel: { reimbursable } },
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyReport;
