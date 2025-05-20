import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeLinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsLinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsLinedIcon from "@mui/icons-material/SettingsOutlined"; 
import SearchLinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutLinedIcon from "@mui/icons-material/PersonOutlineOutlined";



const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchLinedIcon />
                </IconButton>
            </Box>

            {/* Icons */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <LightModeLinedIcon />
                    ) : (
                        <DarkModeLinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsLinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsLinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutLinedIcon />
                </IconButton>
            </Box>
        </Box>

    );
}
export default Topbar;
// This code defines a functional component called "topbar" that returns a div element with the class "topbar".