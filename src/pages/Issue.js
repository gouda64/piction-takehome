import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
    TextField,
} from "@mui/material";
import SubmitFooter from "../components/SubmitFooter";

export default function Issue() {
    return (
        <Box className="flex-layout">
            <CustomAppBar back="/dob"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}}>
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    Describe your issue in your own words
                </Typography>
                <TextField id="name" placeholder="Start typing here..." variant="outlined" color="secondary"
                    sx={{width: "100%",}} autoComplete="off" multiline rows={5}/>
            </Box>

            <SubmitFooter nav="/summary" />
        </Box>
    );
}
