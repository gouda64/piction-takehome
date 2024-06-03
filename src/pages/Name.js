import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Button,
    Box,
    TextField,
} from "@mui/material";
import SubmitFooter from "../components/SubmitFooter";

export default function Name() {
    return (
        <Box className="flex-layout">
            <CustomAppBar back="/"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}} align="center">
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    What's your name?
                </Typography>
                <TextField id="name" placeholder="John Doe" variant="outlined" color="secondary"
                    sx={{width: "75%",}} autoComplete="off"/>
            </Box>

            <SubmitFooter nav="/dob" />
        </Box>
    );
}
