"use client";

import { useState } from "react";
import { Typography, TextField, Divider, Button, Paper, Box } from "@mui/material";

const initialRates = [
    { country: "Australia", code: "AUD", rate: 1.59 },
    { country: "China", code: "CNY", rate: 7.28 },
    { country: "Czech Republic", code: "CZK", rate: 24.12 },
    { country: "Finland", code: "EUR", rate: 0.96 },
    { country: "France", code: "EUR", rate: 0.96 },
    { country: "Germany", code: "EUR", rate: 0.96 },
    { country: "Hong Kong", code: "HKD", rate: 7.79 },
    { country: "Indonesia", code: "IDR", rate: 16140.42 },
    { country: "Japan", code: "JPY", rate: 155.69 },
    { country: "Malaysia", code: "MYR", rate: 4.44 },
    { country: "Myanmar", code: "MMK", rate: 4450.00 },
    { country: "Norway", code: "NOK", rate: 11.27 },
    { country: "Netherlands", code: "EUR", rate: 0.96 },
    { country: "New Zealand", code: "NZD", rate: 1.76 },
    { country: "Philippines", code: "PHP", rate: 58.40 },
    { country: "Singapore", code: "SGD", rate: 1.35 },
    { country: "South Korea", code: "KRW", rate: 1480.00 },
    { country: "Taiwan", code: "TWD", rate: 33.00 },
    { country: "Thailand", code: "THB", rate: 34.17 },
    { country: "United Arab Emirates", code: "AED", rate: 3.67 },
    { country: "United Kingdom", code: "GBP", rate: 0.80 },
    { country: "United States", code: "USD", rate: 1.00 },
    { country: "Vietnam", code: "VND", rate: 25258.81 },
    { country: "Canada", code: "CAD", rate: 1.43 },
    { country: "Macau", code: "MOP", rate: 7.90 },
    { country: "Switzerland", code: "CHF", rate: 0.90 },
    { country: "Denmark", code: "DKK", rate: 7.16 },
    { country: "Brunei", code: "BND", rate: 1.34 },
    { country: "India", code: "INR", rate: 85.97 },
    { country: "Sweden", code: "SEK", rate: 11.03 }
];

const half = Math.ceil(initialRates.length / 2);
const leftColumn = initialRates.slice(0, half);
const rightColumn = initialRates.slice(half);

export default function ExchangeRates() {
    const [rates, setRates] = useState(initialRates);

    return (
        <Box sx={{ 
            mt: "20px"
        }}>
            <Typography
                sx={{ 
                    fontSize: "23px",
                    fontWeight: 600
                }}
            >
                March 2025 Exchange Rates (1 USD = )
            </Typography>

            <Box sx={{ mt: 1 }}>
                <Paper sx={{ p: 3 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 4,
                            maxWidth: "100%",
                            margin: "auto 0",
                        }}
                    >

                        {/* Left Column */}
                        <Box sx={{ flex: 1 }}>
                            {leftColumn.map((item, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <Typography sx={{ flex: 1, fontWeight: "bold" }}>{item.country}</Typography>
                                    <Typography sx={{ fontWeight: "bold", minWidth: "50px" }}>{item.code}</Typography>
                                    <TextField
                                        value={item.rate}
                                        size="small"
                                        variant="outlined"
                                        sx={{ width: "80px", ml: 1 }}
                                        inputProps={{ readOnly: true, style: { textAlign: "right" } }}
                                    />
                                </Box>
                            ))}
                        </Box>

                        <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }} />

                        {/* Right Column */}
                        <Box sx={{ flex: 1 }}>
                            {rightColumn.map((item, index) => (
                            <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <Typography sx={{ flex: 1, fontWeight: "bold" }}>{item.country}</Typography>
                                <Typography sx={{ fontWeight: "bold", minWidth: "50px" }}>{item.code}</Typography>
                                <TextField
                                value={item.rate}
                                size="small"
                                variant="outlined"
                                sx={{ width: "80px", ml: 1 }}
                                inputProps={{ readOnly: true, style: { textAlign: "right" } }}
                                />
                            </Box>
                            ))}
                        </Box>
                    </Box>
                </Paper>
                <Button variant="contained" color="error" sx={{ mt: 2 }}>Edit Rates</Button>
            </Box>
        </Box>
    );
}