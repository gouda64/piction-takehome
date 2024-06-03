import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
    TextField,
} from "@mui/material";
import SubmitFooter from "../components/SubmitFooter";

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setIssue as updateIssue } from '../redux/userSlice' ;

export default function Issue() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const [issue, setIssue] = useState(user.issue);

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/dob"/>

            <Box sx={{my: "auto", px: "4rem", width: "100%"}}>
                <Typography variant="h5" sx={{mb: "2rem"}}>
                    Describe your issue in your own words
                </Typography>
                <TextField 
                    id="name" 
                    placeholder="Start typing here..." 
                    variant="outlined" 
                    color="secondary"
                    sx={{width: "100%",}} 
                    autoComplete="off" 
                    multiline rows={5}
                    defaultValue={user.issue}
                    onChange={(e) => {setIssue(e.target.value)}}
                />
            </Box>

            <SubmitFooter 
                nav="/summary" 
                onClick={() => { dispatch(updateIssue(issue)) }}
                checkDisabled={() => {return issue == null;}} 
            />
        </Box>
    );
}
