
"use client"

import { useEffect, useState } from "react"
import {
    Box,
    Card as MuiCard,
    CardContent,
    Chip,
    IconButton,
    Stack,
    Typography
} from "@mui/material"

import {
    StarRounded,
    Favorite,
    FavoriteBorder,
    CalendarMonthRounded,
    AccessTimeRounded
} from "@mui/icons-material"

import Link from "next/link"

export default function Card({ movie, statusday }) {

    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const x = JSON.parse(localStorage.getItem("setfav")) || []
        setFavorite(x)
    }, [])

    const para = () => {
        const saved = JSON.parse(localStorage.getItem("setfav")) || []

        const exist = saved.some(item => item.imdb_id === movie.imdb_id)

        const newFavorite = exist
            ? saved.filter(item => item.imdb_id !== movie.imdb_id)
            : [...saved, movie]

        localStorage.setItem("setfav", JSON.stringify(newFavorite))
        setFavorite(newFavorite)
    }


    return (
        <MuiCard
            style={{ background: statusday ? "linear-gradient(145deg, #101e32, #080e18)" : "#25364A" }}
            sx={{
                width: "100%",
                maxWidth: 350,
                flex: "0 0 100%",
                overflow: "hidden",
                borderRadius: { xs: 2.5, sm: 4 },
                position: "relative",
                border: "1px solid rgba(56,189,248,0.15)",
                color: "white",
                transition: "0.35s",
                scrollSnapAlign: "start",
                "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#38bdf8",
                    boxShadow: "0 15px 40px rgba(14,165,233,0.2)"
                }
            }}
        >

            {/* Poster */}

            <Box sx={{
                height: { xs: 220, sm: 280, md: 340 },
                position: "relative",
                overflow: "hidden",
            }}>

                <Link href={movie.imdb_id}>

                    {movie.poster && (
                        <Box
                            component="img"
                            src={movie.poster}
                            alt={movie.name}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "0.5s",
                                "&:hover": {
                                    transform: "scale(1.07)"
                                }
                            }}
                        />
                    )}

                    {/* Image Overlay */}

                    <Box sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, #080e18 0%, transparent 55%)"
                    }} />

                </Link>

                {/* Rating */}

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: "rgba(0,0,0,0.75)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 2,
                        px: 0.8,
                        py: 0.5
                    }}
                >
                    <StarRounded sx={{ color: "#facc15", fontSize: { xs: 15, sm: 19 } }} />

                    <Typography fontSize={{ xs: 11, sm: 13 }} fontWeight="bold">
                        {movie.imdbRating || "N/A"}
                    </Typography>
                </Stack>

                {/* Favorite */}

                <IconButton
                    onClick={para}
                    sx={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        color: favorite.some(item => item.imdb_id === movie.imdb_id) ? "#fb7185" : "white",
                        background: "rgba(0,0,0,0.65)",
                        "&:hover": {
                            background: "rgba(0,0,0,0.9)"
                        }
                    }}
                    size="small"
                >
                    {favorite.some(item => item.imdb_id === movie.imdb_id)
                        ? <Favorite fontSize="small" />
                        : <FavoriteBorder fontSize="small" />
                    }
                </IconButton>

                {/* Movie Type */}

                <Chip
                    label={movie.type || "Movie"}
                    size="small"
                    sx={{
                        position: "absolute",
                        bottom: 8,
                        left: 8,
                        height: { xs: 22, sm: 28 },
                        color: "white",
                        background: "rgba(14,165,233,0.85)",
                        fontWeight: "bold",
                        fontSize: { xs: 9, sm: 12 }
                    }}
                />

            </Box>

            {/* Movie Information */}

            <CardContent sx={{ p: { xs: 1, sm: 2 } }}>

                <Typography
                    fontWeight="bold"
                    fontSize={{ xs: 12, sm: 15, md: 17 }}
                    noWrap
                    sx={{ mb: 1, fontFamily: "var(--font-manrope)" }}
                >
                    {movie.name}
                </Typography>

                {/* Genres */}

                <Stack direction="row" gap={0.5} flexWrap="wrap" sx={{ mb: 1 }}>
                    {movie.genres?.slice(0, 2).map(genre => (
                        <Chip
                            key={genre}
                            label={genre}
                            size="small"
                            sx={{
                                height: { xs: 19, sm: 24 },
                                color: "#7dd3fc",
                                background: "rgba(56,189,248,0.1)",
                                fontSize: { xs: 8, sm: 10 }
                            }}
                        />
                    ))}
                </Stack>

                {/* Year and Duration */}

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems="flex-start"
                    gap={{ xs: 0.5, sm: 2 }}
                    sx={{ mb: 1 }}
                >

                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <CalendarMonthRounded sx={{ fontSize: 14, color: "#38bdf8" }} />

                        <Typography fontSize={{ xs: 10, sm: 12 }} color="#94a3b8">
                            {movie.releaseInfo || movie.year || "Unknown"}
                        </Typography>
                    </Stack>

                    {movie.runtime && (
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <AccessTimeRounded sx={{ fontSize: 14, color: "#38bdf8" }} />

                            <Typography fontSize={{ xs: 10, sm: 12 }} color="#94a3b8">
                                {movie.runtime}
                            </Typography>
                        </Stack>
                    )}

                </Stack>

            </CardContent>

        </MuiCard>
    )
}
