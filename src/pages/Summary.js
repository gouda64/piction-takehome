import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Stack,
    Button,
    Box,
} from "@mui/material";

export default function Summary() {
    return (
        <Box className="flex-layout">
            <CustomAppBar/>

            <Box sx={{mb: "7rem", p: "2rem"}}>
                <Button variant="outlined" color="secondary">Submit</Button>
            </Box>
        </Box>
    );
}
