import { DataGrid, Toolbar, ExportPrint, ExportCsv } from '@mui/x-data-grid';  // only free exports
import { Box } from '@mui/material';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';

import Header from "../../components/Header";
import { useTheme } from "@mui/material/styles";


const CustomToolbar = () => (
  <Toolbar>
    <ExportPrint aria-label="Print grid" />  {/* :contentReference[oaicite:1]{index=1} */}
    <ExportCsv aria-label="Export as CSV" />  {/* :contentReference[oaicite:2]{index=2} */}
  </Toolbar>
);

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns=[
        {field: "id", headerName: "ID", flex: 0.5},
        {field: "registrarId", headerName: "Registrar ID", flex: 0.5},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "city", headerName: "City", flex: 1},
        {field: "zipCode", headerName: "Zip Code", flex: 1}
       
     ];

    return(
        <Box m="20px"> 
            <Header title="CONTACTS" subtitle="List of Contacts for future reference" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{
                        toolbar: CustomToolbar,
                    }}
                 />
            </Box>
        </Box>

    )
}

export default Contacts;
