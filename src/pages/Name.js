import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
    TextField,
} from "@mui/material";
import SubmitFooter from "../components/SubmitFooter";

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setName as updateName } from '../redux/userSlice' ;

export default function Name() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const [name, setName] = useState(user.name);

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}} align="center">
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    What's your name?
                </Typography>
                <TextField 
                    id="name" 
                    placeholder="John Doe" 
                    variant="outlined" 
                    color="secondary"
                    sx={{width: "75%",}} 
                    autoComplete="off" 
                    defaultValue={user.name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </Box>

            <SubmitFooter 
                nav="/dob" 
                onClick={() => { dispatch(updateName(name)) }}
                checkDisabled={() => {return name === "";}}
            />
        </Box>
    );
}
