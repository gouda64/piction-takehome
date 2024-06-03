import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
} from "@mui/material";
import {
    DatePicker,
} from "@mui/x-date-pickers"
import SubmitFooter from "../components/SubmitFooter";

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setDob as updateDob } from '../redux/userSlice' ;

export default function Birthday() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const [dob, setDob] = useState(user.dob);

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/name"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}} align="center">
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    Great to meet you, {user.name}! What's your date of birth?
                </Typography>
                <DatePicker 
                    id="dob" 
                    sx={{width: "75%"}}
                    onChange={(date) => {setDob(date)}}
                    defaultValue={user.dob}
                />
            </Box>

            <SubmitFooter 
                nav="/issue" 
                onClick={() => { dispatch(updateDob(dob)) }}
                checkDisabled={() => {return dob == null;}} 
            />
        </Box>
    );
}
