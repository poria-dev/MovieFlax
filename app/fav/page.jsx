"use client"

import { useEffect, useState } from "react"
import Card from "@/components/Card"
import {
    Box,
    Stack,
    Typography,
    Button,
    Container
} from "@mui/material"
import {
    FavoriteRounded,
    MovieFilterRounded,
    FavoriteBorderRounded,
    ExploreRounded
} from "@mui/icons-material"
import Link from "next/link"

export default function FavoritePage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const x = JSON.parse(localStorage.getItem("setfav")) || []
        setMovies(x)
    }, [movies])

    return (
        <Box sx={{
            minHeight: "100dvh",
            width: "100%",
            background: "linear-gradient(145deg, #080e18 0%, #0c1728 55%, #080e18 100%)",
            color: "white",
            pb: 8,
            overflow: "hidden",
            position: "relative"
        }}>

            {/* Background Glow */}
            <Box sx={{
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "rgba(14,165,233,0.10)",
                filter: "blur(110px)",
                top: -100,
                right: -100,
                pointerEvents: "none"
            }} />

            <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>

                {/* Header */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        pt: { xs: 4, md: 6 },
                        pb: 4,
                        borderBottom: "1px solid rgba(148,163,184,0.12)"
                    }}
                >

                    <Stack direction="row" alignItems="center" spacing={1.5}>

                        <Box sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 3,
                            display: "grid",
                            placeItems: "center",
                            background: "rgba(244,63,94,0.12)",
                            border: "1px solid rgba(244,63,94,0.2)"
                        }}>
                            <FavoriteRounded sx={{ color: "#fb7185", fontSize: 25 }} />
                        </Box>

                        <Box>
                            <Typography fontSize={{ xs: 22, md: 30 }} fontWeight={900}>
                                My Favorites
                            </Typography>
                            <Typography fontSize={12} color="#94a3b8">
                                Your personal movie collection
                            </Typography>
                        </Box>

                    </Stack>

                    <Box sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 3,
                        background: "rgba(56,189,248,0.08)",
                        border: "1px solid rgba(56,189,248,0.18)"
                    }}>
                        <Typography fontWeight={800} color="#38bdf8">
                            {movies.length} Movies
                        </Typography>
                    </Box>

                </Stack>

                {/* Collection Title */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: 5, mb: 3 }}
                >
                    <Box>
                        <Typography fontSize={{ xs: 19, md: 24 }} fontWeight={800}>
                            Saved Collection
                        </Typography>
                        <Typography fontSize={12} color="#64748b" mt={0.5}>
                            Movies you've added to your favorites
                        </Typography>
                    </Box>

                    <MovieFilterRounded sx={{
                        fontSize: 30,
                        color: "#38bdf8"
                    }} />
                </Stack>

                {/* Movies */}
                {movies.length > 0 ? (

                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, minmax(0, 1fr))",
                            sm: "repeat(3, minmax(0, 1fr))",
                            md: "repeat(4, minmax(0, 1fr))",
                            lg: "repeat(5, minmax(0, 1fr))",
                            xl: "repeat(6, minmax(0, 1fr))"
                        },
                        gap: { xs: 1.5, sm: 2.5, md: 3 },
                        alignItems: "start"
                    }}>

                        {movies.map(movie => (
                            <Card
                                key={movie.imdb_id}
                                movie={movie}
                            />
                        ))}

                    </Box>

                ) : (

                    /* Empty State */
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            minHeight: { xs: "55vh", md: "60vh" },
                            textAlign: "center",
                            px: 2
                        }}
                    >

                        <Box sx={{
                            width: 110,
                            height: 110,
                            borderRadius: "35px",
                            display: "grid",
                            placeItems: "center",
                            background: "rgba(244,63,94,0.08)",
                            border: "1px solid rgba(244,63,94,0.18)",
                            mb: 3,
                            boxShadow: "0 0 60px rgba(244,63,94,0.08)"
                        }}>
                            <FavoriteBorderRounded sx={{
                                fontSize: 55,
                                color: "#fb7185"
                            }} />
                        </Box>

                        <Typography fontSize={{ xs: 22, md: 28 }} fontWeight={900}>
                            Your Collection is Empty
                        </Typography>

                        <Typography
                            color="#94a3b8"
                            fontSize={14}
                            sx={{ mt: 1, maxWidth: 340, lineHeight: 2 }}
                        >
                            You haven't saved any movies yet. Explore the collection and add your favorite movies here.
                        </Typography>

                        <Button
                            component={Link}
                            href="/"
                            startIcon={<ExploreRounded />}
                            variant="contained"
                            sx={{
                                mt: 3,
                                px: 3,
                                py: 1.3,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 800,
                                background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
                                boxShadow: "0 8px 25px rgba(14,165,233,0.2)",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #0284c7, #1d4ed8)",
                                    transform: "translateY(-2px)"
                                }
                            }}
                        >
                            Explore Movies
                        </Button>

                    </Stack>

                )}

            </Container>
        </Box>
    )
}