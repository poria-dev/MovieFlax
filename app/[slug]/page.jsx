import React, { Suspense } from 'react'
import Pro from './pro'
import { Box, Stack, Typography } from '@mui/material'

export default function Another({ params }) {
    return (
        <Suspense fallback={
            <Stack sx={{ minHeight: "100vh", bgcolor: "#080e18", alignItems: "center", justifyContent: "center", gap: 3 }}>
                <Box sx={{ position: "relative", width: 75, height: 75 }}>
                    <Box sx={{ position: "absolute", inset: 0, border: "4px solid #1e293b", borderTop: "4px solid #38bdf8", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                    <Box sx={{ position: "absolute", inset: 12, border: "3px solid #1e293b", borderBottom: "3px solid #818cf8", borderRadius: "50%", animation: "spin 1.5s linear infinite reverse" }} />
                </Box>
                <Typography sx={{ color: "#38bdf8", fontSize: 16, fontWeight: "bold", letterSpacing: 3 }}>
                    LOADING
                </Typography>
                <Typography sx={{ color: "#64748b", fontSize: 12 }}>
                    Preparing your movie experience...
                </Typography>
            
            </Stack>
        }>
            <Pro params={params} />
        </Suspense>
    )
}
