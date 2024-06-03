import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
} from "@mui/material";
import { useSelector } from 'react-redux';

export default function Summary() {
    const user = useSelector((state) => state.user);

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/issue"/>

            <Box sx={{mt: "4rem", px: "4rem", width: "100%"}}>
                <Typography variant="h5" sx={{mb: "1rem"}}>
                    Summary
                </Typography>
                <Typography variant="body1" sx={{}}>
                    todo
                </Typography>
            </Box>
        </Box>
    );
}
