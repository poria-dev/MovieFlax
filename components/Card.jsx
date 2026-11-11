
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

    const [favorite, setFavorite] = useState(false)

    return (
        <MuiCard style={{ background: statusday ? "linear-gradient(145deg, #101e32, #080e18)" : "#25364A" }}
            sx={{
                width: "100%",
                maxWidth: 350,
                overflow: "hidden",
                borderRadius: 4,
                position: "relative",

                border: "1px solid rgba(56,189,248,0.15)",
                color: "white",
                transition: "0.35s",
                "&:hover": {
                    transform: "translateY(-9px)",
                    borderColor: "#38bdf8",
                    boxShadow: "0 15px 40px rgba(14,165,233,0.2)"
                }
            }}
        >



            {/* Poster */}

            <Box sx={{
                height: 340,
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
                        top: 12,
                        left: 12,
                        background: "rgba(0,0,0,0.75)",
                        backdropFilter: "blur(10px)",
                        borderRadius: 2,
                        px: 1.2,
                        py: 0.6
                    }}
                >
                    <StarRounded sx={{ color: "#facc15", fontSize: 19 }} />

                    <Typography fontSize={13} fontWeight="bold">
                        {movie.imdbRating || "N/A"}
                    </Typography>
                </Stack>

                {/* Favorite */}

                <IconButton
                    onClick={() => setFavorite(!favorite)}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        color: favorite ? "#fb7185" : "white",
                        background: "rgba(0,0,0,0.65)",
                        "&:hover": {
                            background: "rgba(0,0,0,0.9)"
                        }
                    }}
                >
                    {favorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>

                {/* Movie Type */}

                <Chip
                    label={movie.type || "Movie"}
                    size="small"
                    sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        color: "white",
                        background: "rgba(14,165,233,0.85)",
                        fontWeight: "bold"
                    }}
                />

            </Box>

            {/* Movie Information */}

            <CardContent sx={{ p: 2 }}>

                <Typography
                    fontWeight="bold"
                    fontSize={17}
                    noWrap
                    sx={{ mb: 1, fontFamily: "var(--font-manrope)" }}
                >
                    {movie.name}
                </Typography>

                {/* Genres */}

                <Stack direction="row" gap={0.7} flexWrap="wrap" sx={{ mb: 1.5 }}>
                    {movie.genres?.slice(0, 2).map(genre => (
                        <Chip
                            key={genre}
                            label={genre}
                            size="small"
                            sx={{
                                color: "#7dd3fc",
                                background: "rgba(56,189,248,0.1)",
                                fontSize: 10
                            }}
                        />
                    ))}
                </Stack>

                {/* Year and Duration */}

                <Stack direction="row" alignItems="center" gap={2} sx={{ mb: 1.5 }}>

                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <CalendarMonthRounded sx={{ fontSize: 16, color: "#38bdf8" }} />
                        <Typography fontSize={12} color="#94a3b8">
                            {movie.releaseInfo || movie.year || "Unknown"}
                        </Typography>
                    </Stack>

                    {movie.runtime && (
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <AccessTimeRounded sx={{ fontSize: 16, color: "#38bdf8" }} />
                            <Typography fontSize={12} color="#94a3b8">
                                {movie.runtime}
                            </Typography>
                        </Stack>
                    )}

                </Stack>


            </CardContent>



        </MuiCard >
    )
}
