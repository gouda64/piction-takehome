import {
    Button,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SubmitFooter(props) {
    const navigate = useNavigate();

    return (
        <Box sx={{mb: "5rem", p: "2rem"}}>
            <Button variant="outlined" color="secondary" 
                sx={{ml: "auto", display: "block", width: "40%"}}
                onClick={() => {navigate(props.nav)}}>
                Submit
            </Button>
        </Box>
    );
}