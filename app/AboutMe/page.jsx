
"use client"

import React from "react"
import Image from "next/image"
import {
    Box,
    Stack,
    Typography,
    Button
} from "@mui/material"

import {
    GitHub,
    Instagram,
    LinkedIn,
    Code,
    Web,
    Devices,
    DataObject,
    Palette,
    Bolt,
    Storage,
    Terminal
} from "@mui/icons-material"
import { useRouter } from "next/navigation"



const socials = [
    {
        name: "GitHub",
        icon: <GitHub />,
        link: "https://github.com/poria-dev"
    },
    {
        name: "Instagram",
        icon: <Instagram />,
        link: "https://instagram.com/poria.frontend"
    },
    {
        name: "LinkedIn",
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/search/results/people/?keywords=Pooria%20Rezaee"
    }
]

const skills = [
    { name: "HTML", icon: <Web /> },
    { name: "CSS", icon: <Palette /> },
    { name: "JavaScript", icon: <Bolt /> },
    { name: "React", icon: <DataObject /> },
    { name: "Next.js", icon: <Terminal /> },
    { name: "Tailwind CSS", icon: <Code /> },
    { name: "Material UI", icon: <Devices /> },
    { name: "API", icon: <Storage /> }
]




export default function page() {
    const routerFooter = useRouter()
    return (
        <Box sx={{
            minHeight: "100vh",
            background: "#050b14",
            color: "white",
            pb: 8,
            overflow: "hidden"
        }}>

            {/* Background Poster */}
            <Box sx={{
                position: "relative",
                minHeight: { xs: 680, md: 430 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                py: { xs: 5, md: 4 }
            }}>

                <Box sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/me.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 35%",
                    filter: "blur(10px) brightness(0.3)",
                    transform: "scale(1.08)"
                }} />

                <Box sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(5,11,20,0.15), #050b14)"
                }} />

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems="center"
                    justifyContent="center"
                    spacing={{ xs: 3, md: 5 }}
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        maxWidth: 1100,
                        mx: "auto",
                        px: 3
                    }}
                >

                    {/* Profile Poster */}
                    <Box sx={{
                        width: { xs: 170, md: 220 },
                        height: { xs: 215, md: 280 },
                        flexShrink: 0,
                        borderRadius: "18px",
                        overflow: "hidden",
                        border: "2px solid rgba(56,189,248,0.7)",
                        boxShadow: "0 0 45px rgba(14,165,233,0.25)",
                        position: "relative"
                    }}>
                        <Image
                            src="/me.jpg"
                            alt="Pooria"
                            fill
                            priority
                            sizes="(max-width: 600px) 170px, 220px"
                            style={{ objectFit: "cover" }}
                        />
                    </Box>

                    {/* Profile Information */}
                    <Stack
                        spacing={1.5}
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        sx={{ maxWidth: 550, width: "100%" }}
                    >
                        <Typography sx={{
                            color: "#38bdf8",
                            fontWeight: 800,
                            letterSpacing: 4,
                            fontSize: 13
                        }}>
                            ABOUT ME
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: 32, md: 48 },
                            fontWeight: 900,
                            letterSpacing: -1
                        }}>
                            Pooria Rezaee
                        </Typography>

                        <Typography sx={{
                            color: "#38bdf8",
                            fontSize: { xs: 16, md: 19 },
                            fontWeight: 700
                        }}>
                            Front-End Developer
                        </Typography>

                        <Typography sx={{
                            maxWidth: 480,
                            color: "#c1ccda",
                            lineHeight: 1.9,
                            fontSize: 14,
                            textAlign: "center"
                        }}>
                            I love building modern, responsive and interactive
                            websites. I'm always learning new technologies
                            and improving my development skills.
                        </Typography>

                        {/* Social Links */}
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="wrap"
                            gap={1.5}
                            sx={{ pt: 1, width: "100%" }}
                        >
                            {socials.map((item) => (
                                <Button
                                    key={item.name}
                                    component="a"
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    startIcon={item.icon}
                                    sx={{
                                        color: "white",
                                        border: "1px solid rgba(148,163,184,0.3)",
                                        borderRadius: "12px",
                                        px: 2,
                                        py: 1,
                                        textTransform: "none",
                                        justifyContent: "center",
                                        transition: "0.3s",
                                        "& .MuiButton-startIcon": {
                                            margin: 0,
                                            marginRight: "8px"
                                        },
                                        "&:hover": {
                                            color: "#38bdf8",
                                            borderColor: "#38bdf8",
                                            background: "rgba(56,189,248,0.08)",
                                            transform: "translateY(-3px)"
                                        }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Stack>
                        <Button onClick={() => routerFooter.back()} sx={{ border: "1px dashed" }}>Back</Button>
                    </Stack>
                </Stack>
            </Box>

            {/* Skills Section */}
            <Box sx={{
                maxWidth: 1100,
                mx: "auto",
                px: 3,
                mt: 2
            }}>

                <Stack
                    spacing={1}
                    alignItems="center"
                    textAlign="center"
                    sx={{ mb: 4 }}
                >
                    <Typography sx={{
                        color: "#38bdf8",
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: 4
                    }}>
                        WHAT I KNOW
                    </Typography>

                    <Typography sx={{
                        fontSize: { xs: 28, md: 36 },
                        fontWeight: 900
                    }}>
                        My Skills
                    </Typography>

                    <Box sx={{
                        width: 65,
                        height: 4,
                        borderRadius: 5,
                        background: "#38bdf8",
                        mx: "auto"
                    }} />
                </Stack>

                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)"
                    },
                    gap: 2
                }}>
                    {skills.map((skill) => (
                        <Stack
                            key={skill.name}
                            alignItems="center"
                            justifyContent="center"
                            spacing={1.5}
                            sx={{
                                minHeight: 125,
                                width: "100%",
                                borderRadius: "18px",
                                background: "rgba(15,27,43,0.8)",
                                border: "1px solid rgba(56,189,248,0.12)",
                                transition: "0.3s",
                                textAlign: "center",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    borderColor: "#38bdf8",
                                    boxShadow: "0 8px 30px rgba(14,165,233,0.12)"
                                }
                            }}
                        >
                            <Box sx={{
                                color: "#38bdf8",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                "& svg": {
                                    fontSize: 36
                                }
                            }}>
                                {skill.icon}
                            </Box>

                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: 14,
                                textAlign: "center",
                                pb: 2
                            }}>
                                {skill.name}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Box>

        </Box>
    )
}
