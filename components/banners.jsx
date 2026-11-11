
"use client"

import { Box, Stack, Typography, Button, Chip } from "@mui/material"
import { PlayArrowRounded, LocalFireDepartmentRounded, ArrowForwardRounded } from "@mui/icons-material"

export default function Banner({ statusday }) {

    return (
        <Box
            sx={{
                margin: "40px auto",
                width: {
                    xs: "95%",
                    md: "85%"
                },
                height: 200,
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                alignItems: "center",
                px: { xs: 2.5, sm: 4, md: 6 },
                background: "linear-gradient(110deg, #101E32 0%, #25364A 55%, #34465A 100%)",
                border: "1px solid rgba(125,211,252,0.2)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 250,
                    height: 250,
                    borderRadius: "50%",
                    background: "rgba(56,189,248,0.16)",
                    filter: "blur(70px)",
                    right: "15%",
                    top: -100
                }
            }}
        >

            {/* Decorative Circles */}

            <Box sx={{
                position: "absolute",
                right: { xs: -60, md: 100 },
                top: -100,
                width: 320,
                height: 320,
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%"
            }} />

            <Box sx={{
                position: "absolute",
                right: { xs: -100, md: 60 },
                top: -140,
                width: 400,
                height: 400,
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50%"
            }} />

            {/* Content */}

            <Stack spacing={1.2} sx={{ position: "relative", zIndex: 2 }}>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <LocalFireDepartmentRounded sx={{ color: "#7DD3FC", fontSize: 20 }} />

                    <Typography
                        fontSize={11}
                        fontWeight="bold"
                        letterSpacing={2}
                        color="#7DD3FC"
                    >
                        YOUR CINEMATIC WORLD
                    </Typography>

                    <Chip
                        label="TRENDING"
                        size="small"
                        sx={{
                            height: 21,
                            color: "#FDE68A",
                            background: "rgba(250,204,21,0.12)",
                            fontSize: 9,
                            fontWeight: "bold"
                        }}
                    />
                </Stack>

                <Typography
                    sx={{
                        fontSize: { xs: 21, sm: 27, md: 32 },
                        fontWeight: 900,
                        color: "#F5F0E6",
                        letterSpacing: -0.8
                    }}
                >
                    Discover Your Next Favorite
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: 11, sm: 13 },
                        color: "#CBD5E1",
                        maxWidth: 460
                    }}
                >
                    Explore thousands of movies, discover hidden gems and enjoy your cinematic journey.
                </Typography>

            </Stack>



        </Box>
    )
}
