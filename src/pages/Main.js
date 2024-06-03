import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Stack,
    Button,
    Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setForUser } from '../redux/userSlice' ;

import pictionLogo from "../assets/piction-logo.png";

export default function Main() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nextPage = (forUser) => {
        setTimeout(() => {
            dispatch(setForUser(forUser));
            navigate("/name");
        }, 300);
    }

    return (
        <Box className="flex-layout">
            <CustomAppBar/>
            
            <Box sx={{flexGrow: 1}}/>

            <Box sx={{mb: "7rem", p: "2rem"}}>
                <img src={pictionLogo} alt="Logo of Piction Health" style={{maxWidth: "50%",}}/>

                <Typography variant="h5" sx={{mt: "1rem", mb: "2rem"}}>
                    Who is this visit for?
                </Typography>
                <Stack direction="column" spacing={2} sx={{pl: "60%"}}>
                    <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={() => nextPage(true)}
                    >
                        Me
                    </Button>
                    <Button 
                        variant="outlined"
                        color="secondary"
                        onClick={() => nextPage(false)}
                    >
                        Someone else
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
