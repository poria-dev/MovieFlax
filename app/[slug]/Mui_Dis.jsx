
"use client"

import React from 'react'
import { Box, Stack, Typography, Button, Chip, Avatar, Divider } from '@mui/material'
import { PlayArrow, Star, AccessTime, ArrowBack, Movie, Language, Public, Person, Groups, Bookmark } from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Mui_Dis({ temp }) {
    const router = useRouter()
    const movie = temp.meta

    const castColors = [
        "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
        "linear-gradient(135deg,#8b5cf6,#312e81)",
        "linear-gradient(135deg,#ec4899,#831843)",
        "linear-gradient(135deg,#14b8a6,#134e4a)"
    ]

    return (

        <Box sx={{
            minHeight: { xs: "100dvh", lg: "100dvh" },
            height: { xs: "auto", lg: "100dvh" },
            bgcolor: "#050914",
            color: "white",
            pb: { xs: 4, md: 6 },
            overflowX: "hidden",
            overflowY: { xs: "auto", lg: "hidden" }
        }}>

            <Box sx={{
                position: "relative",
                minHeight: { xs: "auto", lg: "680px" },
                backgroundImage: `linear-gradient(to bottom, rgba(5,9,20,0.2), #050914 100%), linear-gradient(to right, rgba(5,9,20,0.85), transparent), url(${movie.background || movie.poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                px: { xs: 2, sm: 3, md: 4, lg: 7 },
                py: { xs: 4, sm: 5, md: 6, lg: 7 },
                display: "flex",
                alignItems: "center"
            }}>

                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    spacing={{ xs: 3, sm: 4, lg: 6 }}
                    sx={{
                        maxWidth: "1300px",
                        mx: "auto",
                        width: "100%",
                        alignItems: { xs: "center", lg: "center" }
                    }}
                >

                    <Box
                        component="img"
                        src={movie.poster}
                        alt={movie.name}
                        sx={{
                            width: { xs: 175, sm: 210, md: 240, lg: 300 },
                            maxWidth: "100%",
                            flexShrink: 0,
                            alignSelf: "center",
                            borderRadius: { xs: 3, md: 4 },
                            boxShadow: "0 20px 60px #000",
                            border: "1px solid #ffffff30"
                        }}
                    />

                    <Stack
                        spacing={{ xs: 2, sm: 2.5 }}
                        sx={{
                            width: "100%",
                            maxWidth: 750,
                            minWidth: 0,
                            flex: 1
                        }}
                    >

                        {movie.logo ? (
                            <Box component="img" src={movie.logo}
                                alt={movie.name}
                                sx={{
                                    width: "100%",
                                    maxWidth: { xs: 280, sm: 350 },
                                    maxHeight: { xs: 75, sm: 100 },
                                    objectFit: "contain",
                                    objectPosition: { xs: "center", lg: "left" },
                                    alignSelf: { xs: "center", lg: "flex-start" }
                                }}
                            />
                        ) : (
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                sx={{
                                    fontSize: { xs: 28, sm: 34, md: 40 },
                                    textAlign: { xs: "center", lg: "left" },
                                    overflowWrap: "anywhere",
                                    fontFamily: "var(--font-manrope)"
                                }}
                            >
                                {movie.name}
                            </Typography>
                        )}

                        <Stack
                            direction="row"
                            gap={{ xs: 1.5, sm: 2.5 }}
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent={{ xs: "center", lg: "flex-start" }}
                            className='*:mx-4'
                        >

                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Star sx={{ color: "#facc15", fontSize: 21 }} />
                                <Typography fontWeight="bold">{movie.imdbRating || "N/A"}</Typography>
                                <Typography color="gray" fontSize={13}>IMDb</Typography>
                            </Stack>

                            <Typography fontSize={14}>{movie.releaseInfo}</Typography>

                            <Stack direction="row" gap={0.5} alignItems="center">
                                <AccessTime sx={{ color: "#38bdf8", fontSize: 20 }} />
                                <Typography fontSize={14}>{movie.runtime || "Unknown"}</Typography>
                            </Stack>

                            <Stack direction="row" gap={0.5} alignItems="center">
                                <Language sx={{ color: "#38bdf8", fontSize: 20 }} />
                                <Typography fontSize={14}>{movie.language || "Unknown"}</Typography>
                            </Stack>

                        </Stack>

                        <Stack
                            direction="row"
                            gap={1}
                            flexWrap="wrap"
                            justifyContent={{ xs: "center", lg: "flex-start" }}
                        >
                            {movie.genres?.map((val, index) => (
                                <Chip key={index} label={val}
                                    sx={{
                                        color: "white",
                                        bgcolor: "#ffffff15",
                                        border: "1px solid #ffffff20",
                                        fontSize: 12
                                    }}
                                />
                            ))}
                        </Stack>

                        <Typography
                            color="#cbd5e1"
                            sx={{
                                lineHeight: { xs: 1.8, md: 2 },
                                fontSize: { xs: 13, sm: 14, md: 15 },
                                textAlign: { xs: "justify", lg: "left" },
                                overflowWrap: "anywhere",
                                fontFamily: "var(--font-inter)"
                            }}
                        >
                            {movie.description}
                        </Typography>

                        <Stack spacing={1.5}>

                            <Stack direction="row" gap={1} alignItems="flex-start">
                                <Person sx={{ color: "#38bdf8", fontSize: 20, mt: 0.2 }} />
                                <Typography color="#94a3b8" fontSize={14}>
                                    Director:
                                    <Box component="span" sx={{ color: "#38bdf8", ml: 1 }}>
                                        {movie.director?.join(", ") || "Unknown"}
                                    </Box>
                                </Typography>
                            </Stack>

                            <Stack direction="row" gap={1} alignItems="flex-start">
                                <Public sx={{ color: "#38bdf8", fontSize: 20, mt: 0.2 }} />
                                <Typography color="#94a3b8" fontSize={14}>
                                    Country:
                                    <Box component="span" sx={{ color: "white", ml: 1 }}>
                                        {movie.country || "Unknown"}
                                    </Box>
                                </Typography>
                            </Stack>

                            <Stack direction="row" gap={1} alignItems="center">
                                <Movie sx={{ color: "#38bdf8", fontSize: 20 }} />
                                <Typography color="#94a3b8" fontSize={14}>
                                    Type:
                                    <Box component="span" sx={{ color: "white", ml: 1 }}>
                                        {movie.type || "Movie"}
                                    </Box>
                                </Typography>
                            </Stack>

                            <Typography color="#64748b" fontSize={12}>
                                IMDb ID: {movie.imdb_id || movie.id}
                            </Typography>

                        </Stack>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            gap={1.5}
                            sx={{ pt: 1, width: "100%" }}

                        >

                            <Button
                                variant="contained"
                                startIcon={<PlayArrow />}
                                component="a"
                                href={movie.trailers?.[0]?.source
                                    ? `https://www.youtube.com/watch?v=${movie.trailers[0].source}`
                                    : "https://www.youtube.com"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    bgcolor: "#38bdf8",
                                    color: "#020617",
                                    fontWeight: "bold",
                                    borderRadius: 3,
                                    px: 3,
                                    py: 1.3,
                                    mr: 2,
                                    width: { xs: "100%", sm: "auto" },
                                    "&:hover": { bgcolor: "#7dd3fc" }
                                }}
                            >
                                Watch Trailer
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={() => router.back()}
                                startIcon={<ArrowBack />}
                                sx={{
                                    color: "white",
                                    borderColor: "#38bdf8",
                                    borderRadius: 3,
                                    px: 3,
                                    py: 1.3,
                                    width: { xs: "100%", sm: "auto" },
                                    "&:hover": {
                                        bgcolor: "#38bdf820",
                                        borderColor: "#7dd3fc"
                                    }
                                }}
                            >
                                Back
                            </Button>
                            <Stack sx={{
                                ml: { xs: 0, sm: 1 },
                                mt: { xs: 1, md: 0 },
                                width: { xs: 46, sm: 52 },
                                height: { xs: 46, sm: 52 },
                                minWidth: { xs: 46, sm: 52 },
                                flexShrink: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 3,
                                cursor: "pointer",
                                background: "linear-gradient(145deg, #0c2438, #071525)",
                                border: "1px solid #38bdf860",
                                boxShadow: "0 0 15px #38bdf820, inset 0 0 12px #38bdf810",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    background: "linear-gradient(145deg, #075985, #0c2438)",
                                    borderColor: "#38bdf8",
                                    boxShadow: "0 0 25px #38bdf860",
                                    transform: "translateY(-3px) scale(1.05)"
                                },
                                "&:active": {
                                    transform: "scale(0.92)"
                                }
                            }}>
                                <Bookmark sx={{
                                    fontSize: { xs: 23, sm: 27 },
                                    color: "#38bdf8",
                                    filter: "drop-shadow(0 0 5px #38bdf880)"
                                }} data-status="off" />
                            </Stack>
                        </Stack>



                    </Stack>
                </Stack>
            </Box>

            <Box sx={{
                maxWidth: 1300,
                mx: "auto",
                px: { xs: 2, sm: 3, md: 4 },
                mt: { xs: 4, sm: 5, md: 6 }
            }}>

                <Stack
                    direction="row"
                    alignItems="center"
                    gap={1.5}
                    sx={{ mb: 3 }}
                >
                    <Groups sx={{ color: "#38bdf8", fontSize: { xs: 25, md: 30 } }} />
                    <Typography variant="h5" fontWeight="bold" sx={{ fontSize: { xs: 20, md: 24 } }}>
                        Top Cast
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    gap={{ xs: 2, sm: 3, md: 4 }}
                    sx={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        pb: 2,
                    }}
                >
                    {movie.credits_cast?.slice(0, 4).map((val, index) => (
                        <Stack
                            key={val.id}
                            spacing={1}
                            sx={{
                                width: { xs: 90, sm: 110, md: 150 },
                                flexShrink: 0,
                                alignItems: "center"
                            }}
                        >
                            <Avatar sx={{
                                width: { xs: 72, sm: 85 },
                                height: { xs: 72, sm: 85 },
                                fontSize: { xs: 23, sm: 27 },
                                fontWeight: "bold",
                                background: castColors[index % castColors.length],
                                border: "2px solid #38bdf8",
                                boxShadow: "0 5px 25px #38bdf830",
                                position: "relative"
                            }}>
                                {val.profile_path ? (
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w185${val.profile_path}`}
                                        alt="load"
                                        fill
                                        sizes="85px"
                                        style={{ objectFit: "cover" }}
                                    />
                                ) : (
                                    val.name?.split(" ").map(word => word[0]).slice(0, 2).join("")
                                )}
                            </Avatar>

                            <Typography fontSize={13} fontWeight="bold" textAlign="center"
                                sx={{ width: "100%", lineHeight: 1.4, color: "white" }}>
                                {val.name?.split(" ")[0]}
                            </Typography>


                        </Stack>
                    ))}
                </Stack>

            </Box>

        </Box>
    )
}
