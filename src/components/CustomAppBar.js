import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { 
    Container,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

export default function CustomAppBar(props) {
    const navigate = useNavigate();

    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl" sx={{padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant="h5">New assessment</Typography>
                
                { props.back !== undefined ?
                    <IconButton sx={{mr: "auto"}} onClick={() => {navigate(props.back)}}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                    : <></>
                }
            </Container>
        </AppBar>
    );
}
