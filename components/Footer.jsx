"use client"
import styled from '@emotion/styled'
import { PhoneInTalk, SocialDistance } from '@mui/icons-material'
import { Avatar, Box, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CostBox = styled(Box)({
    width: "85%",
    minHeight: "280px",
    margin: "10px auto",
    padding: "45px 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    borderTop: "1px solid rgba(120,180,255,0.15)",
    transition: "0.3s",
    boxSizing: "border-box",
})

export default function Footer({ statusday }) {
    return (
        <CostBox sx={{
            
            color: statusday ? "black" : "white",
        }}>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 3, sm: 5 }}
                sx={{ width: "100%" }}
            >

                {/* Profile Image */}
                <Avatar sx={{
                    width: { xs: 225, sm: 245 },
                    height: { xs: 225, sm: 245 },
                    border: "3px solid #38bdf8",
                    boxShadow: "0 0 25px rgba(56,189,248,0.2)"
                }}>
                    <Image
                        src="/me.jpg"
                        width={1200}
                        height={800}
                        alt="Pooria"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                    />
                </Avatar>

                {/* Introduction */}
                <Stack
                    spacing={1.5}
                    alignItems={{ xs: "center", sm: "flex-start" }}
                    textAlign={{ xs: "center", sm: "left" }}
                    sx={{ml:10}}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: "#38bdf8",
                            fontWeight: 800,
                            letterSpacing: 3
                        }}
                    >
                        ABOUT THE DEVELOPER
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: "-1px"
                        }}
                    >
                        Hey, I'm Pooria <PhoneInTalk/>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            opacity: 0.7,
                            maxWidth: 420,
                            lineHeight: 1.9,
                            fontSize: { xs: "0.85rem", sm: "0.95rem" }
                        }}
                    >
                        Front-End Developer passionate about creating
                        modern websites and beautiful user experiences.
                    </Typography>

                    <Button
                        component={Link}
                        href="/AboutMe"
                        variant="contained"
                        sx={{
                            mt: 1,
                            borderRadius: "30px",
                            px: 3.5,
                            py: 1,
                            textTransform: "none",
                            fontWeight: 700,
                            background: "linear-gradient(90deg,#0284c7,#6366f1)",
                            boxShadow: "0 5px 20px rgba(14,165,233,0.2)",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                boxShadow: "0 8px 25px rgba(14,165,233,0.35)"
                            }
                        }}
                    >
                        More About Me →
                    </Button>
                </Stack>

            </Stack>

        </CostBox>
    )
}
