import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Stack,
    Button,
    Box,
} from "@mui/material";

import pictionLogo from "../assets/piction-logo.png";

export default function Main() {
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
                    <Button variant="outlined" color="secondary"
                        onClick={() => {
                            
                        }}>
                        Me
                    </Button>
                    <Button variant="outlined" color="secondary">Someone else</Button>
                </Stack>
            </Box>
        </Box>
    );
}
