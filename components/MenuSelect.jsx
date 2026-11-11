"use client"
import styled from '@emotion/styled'
import { Favorite, Home, Movie, VideoCameraBack } from '@mui/icons-material'
import { List, ListItem, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const CostumeListItem = styled(ListItem)(({ themeMode }) => ({
    padding: "12px 10px",
    borderRadius: "14px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 0,
    flex: "1 1 0",
    whiteSpace: "nowrap",
    fontWeight: "700",
    fontFamily: "var(--font-manrope)",
    color: themeMode ? "#075985" : "#cbd5e1",
    border: "1px solid rgba(56,189,248,0.2)",
    background: themeMode ? "rgba(56,189,248,0.12)" : "rgba(15,23,42,0.65)",
    transition: "all 0.3s ease",
    "&:hover": {
        background: "rgba(56,189,248,0.2)",
        color: themeMode ? "#0ea5e9" : "#cbd5e1",
        borderColor: "#38bdf8",
        transform: "translateY(-2px)",
        boxShadow: "0 5px 18px rgba(14,165,233,0.15)"
    },
    "& a": {
        color: "inherit",
        textDecoration: "none",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
}))
export default function MenuSelect({ statusday, path }) {
    return (
        <>
            {/* list for select menu item ...  */}

            <Stack
                direction="row"
                justifyContent="center"
                sx={{
                    width: "100%",
                    py: { xs: 2, md: 3 },
                    px: { xs: 1.5, sm: 2 }
                }}
            >
                <List
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 0.8, sm: 1.5, md: 2 },
                        padding: { xs: "6px", sm: "8px" },
                        width: { xs: "100%", sm: "90%", lg: "85%" },
                        maxWidth: "100%",
                        margin: "auto",
                        overflow: "hidden",
                        borderRadius: "20px",
                        background: statusday
                            ? ""
                            : "rgba(15,23,42,0.45)",
                        border: "1px solid rgba(56,189,248,0.15)",
                        backdropFilter: "blur(15px)"
                    }}
                >

                    <CostumeListItem
                        themeMode={statusday}
                        style={{ background: (path == "/") ? "rgba(56,189,248,0.7)" : "" }}
                        sx={{ fontSize: { xs: "11px", sm: "14px", lg: "17px" } }}
                    >
                        <Link href="/">
                            <Stack direction="row" justifyContent="center" gap={{ xs: 0.5, sm: 1 }}>
                                <Home sx={{ fontSize: { xs: 16, sm: 19, lg: 21 } }} />
                                Home
                            </Stack>
                        </Link>
                    </CostumeListItem>

                    <CostumeListItem
                        themeMode={statusday}
                        style={{ background: (path == "/movies") ? "rgba(56,189,248,0.7)" : "" }}
                        sx={{ fontSize: { xs: "11px", sm: "14px", lg: "17px" } }}
                    >
                        <Link href="/movies">
                            <Stack direction="row" justifyContent="center" gap={{ xs: 0.5, sm: 1 }}>
                                <VideoCameraBack sx={{ fontSize: { xs: 16, sm: 19, lg: 21 } }} />
                                Movies
                            </Stack>
                        </Link>
                    </CostumeListItem>

                    <CostumeListItem
                        themeMode={statusday}
                        style={{ background: (path == "/serise") ? "rgba(56,189,248,0.7)" : "" }}
                        sx={{ fontSize: { xs: "11px", sm: "14px", lg: "17px" } }}
                    >
                        <Link href="/serise">
                            <Stack direction="row" justifyContent="center" gap={{ xs: 0.5, sm: 1 }}>
                                <Movie sx={{ fontSize: { xs: 16, sm: 19, lg: 21 } }} />
                                Series
                            </Stack>
                        </Link>
                    </CostumeListItem>

                    <CostumeListItem
                        themeMode={statusday}
                        style={{ background: (path == "/fav") ? "rgba(56,189,248,0.7)" : "" }}
                        sx={{ fontSize: { xs: "11px", sm: "14px", lg: "17px" } }}
                    >
                        <Link href="/fav">
                            <Stack direction="row" justifyContent="center" gap={{ xs: 0.5, sm: 1 }}>
                                <Favorite sx={{ fontSize: { xs: 16, sm: 19, lg: 21 }, color: "#f43f5e" }} />
                                Favorite
                            </Stack>
                        </Link>
                    </CostumeListItem>
                </List>
            </Stack>

            {/* list for select menu item ...  */}
        </>
    )
}
