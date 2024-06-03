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
                onClick={() => {
                    setTimeout(() => {
                        navigate(props.nav)
                        if (props.onClick) props.onClick();
                    }, 300);
                }}
                disabled={props.checkDisabled ? props.checkDisabled() : false}>
                Submit
            </Button>
        </Box>
    );
}