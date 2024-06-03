import CustomAppBar from "../components/CustomAppBar";
import {
    Typography,
    Box,
} from "@mui/material";
import { useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { CohereClient } from "cohere-ai";

export default function Summary() {
    const cohere = new CohereClient({
        token: process.env.REACT_APP_COHERE_API_KEY,
    });
    const user = useSelector((state) => state.user);
    const [summary, setSummary] = useState("");

    const newSummary = async () => {  
        const stream = await cohere.chatStream({
            model: "command-r-plus",
            message: `Who filled out the form: ${user.forUser ? "Patient being discussed" : "Someone else"}\n 
                    Name: ${user.name}\n
                    Date of Birth: ${user.dob ? user.dob.format("YYYY-MM-DD") : "N/A"}\n
                    Issue: ${user.issue}`,
            preamble: `Summarize, in paragraph form, healthcare information about a patient.
                        Discuss every detail provided, include whether the patient filled out the form themselves.
                        Be concise.`,
            temperature: 0.3,
            frequencyPenalty: 1,
        });
    
        for await (const chat of stream) {
            if (chat.eventType === "text-generation") {
                console.log(chat.text);
                setSummary((state) => state + chat.text);
            }
        }
    }

    useEffect(() => {
        setSummary((state) => "");
        newSummary();
    }, [user]);

    return (
        <Box className="flex-layout">
            <CustomAppBar back="/issue"/>

            <Box sx={{mt: "4rem", px: "4rem", width: "100%"}}>
                <Typography variant="h5" sx={{mb: "1rem"}}>
                    Summary
                </Typography>
                <Typography variant="body1">
                    {summary ? summary : "Loading..."}
                </Typography>
            </Box>
        </Box>
    );
}
