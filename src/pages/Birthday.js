import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
} from "@mui/material";
import {
    DatePicker,
} from "@mui/x-date-pickers"
import SubmitFooter from "../components/SubmitFooter";

export default function Birthday() {
    const name = "todo";

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/name"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}} align="center">
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    Great to meet you, {name}! What's your date of birth?
                </Typography>
                <DatePicker id="dob" sx={{width: "75%"}}/>
            </Box>

            <SubmitFooter nav="/issue" />
        </Box>
    );
}
