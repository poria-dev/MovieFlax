
"use client"

import styled from '@emotion/styled'
import { Close, DarkMode, Favorite, LightMode, Movie, Search, VideoCameraBack } from '@mui/icons-material'
import { Input, List, ListItem, Stack, IconButton } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'

const CostumeStack = styled(Stack)(({ themeMode }) => ({
    background: themeMode ? "rgba(255,255,255,0.94)" : "rgba(10,18,30,0.94)",
    border: `1px solid ${themeMode ? "#bae6fd" : "#164e63"}`,
    borderRadius: "18px",
    padding: "12px 18px",
    position: "relative",
    zIndex: 9999,
    overflow: "visible",
    color: themeMode ? "#0c4a6e" : "#e0f2fe",
    boxShadow: themeMode ? "0 8px 35px rgba(14,165,233,0.10)" : "0 8px 35px rgba(0,0,0,0.3)",
    transition: "0.3s"
}))

export default function Header({ statusday, setStatusday }) {

    const st = useRef(null)
    const timer = useRef(null)
    const requestId = useRef(0)

    const [save, setSave] = useState(null)

    const validationSchema = Yup.object({
        search: Yup.string()
            .trim()
            .required("Search is required")
            .min(2, "At least 2 characters")
    })

    const change = () => {
        if (st.current) {
            st.current.style.display = "flex"
        }
    }

    const blu = () => {
        if (st.current) {
            st.current.style.display = "none"
            
        }
    }

    const para = () => {
        const newStatus = !statusday
        setStatusday(newStatus)
        localStorage.setItem("unique", JSON.stringify(newStatus))
    }

    const searchData = async (inp, currentRequest) => {
        try {

            await validationSchema.validate({ search: inp })

            const [series, movies] = await Promise.all([
                fetch(`https://v3-cinemeta.strem.io/catalog/series/top/search=${encodeURIComponent(inp)}.json`),
                fetch(`https://v3-cinemeta.strem.io/catalog/movie/top/search=${encodeURIComponent(inp)}.json`)
            ])

            if (!series.ok || !movies.ok) {
                throw new Error("API Error")
            }

            const [data1, data2] = await Promise.all([
                series.json(),
                movies.json()
            ])

            if (currentRequest !== requestId.current) return

            setSave([
                ...(data1.metas || []),
                ...(data2.metas || [])
            ])

            change()

        } catch (err) {

            if (currentRequest !== requestId.current) return

            if (err.name !== "ValidationError") {
                console.log(err)
            }

            setSave([])
        }
    }

    useEffect(() => {

        const x = JSON.parse(localStorage.getItem("unique"))

        if (x == null) {
            setStatusday(false)
        } else {
            setStatusday(x)
        }

        return () => {
            clearTimeout(timer.current)
        }

    }, [])

    return (
        <CostumeStack
            themeMode={statusday}
            direction="row"
            sx={{
                width: { xs: "96%", md: "90%", xl: "85%" },
                margin: "20px auto",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center"
            }}
        >

            <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} direction="row" gap={4}>
                <Stack
                    sx={{
                        background: "linear-gradient(135deg,#38bdf8,#0284c7)",
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "white"
                    }}
                >
                    P
                </Stack>

                <span style={{ fontWeight: "bold", fontSize: "20px", margin: "0 5px" }}>
                    PORIA<span style={{ color: "#0ea5e9", margin: "0 5px" }}>FLIX</span>
                </span>
            </Stack>

            <Stack direction="row" gap={1} sx={{ zIndex: 99999, position: "relative", overflow: "visible" }}>

                <Stack
                    direction="row"
                    sx={{
                        position: "relative",
                        zIndex: 99999,
                        overflow: "visible",
                        background: statusday ? "rgba(240,249,255,0.9)" : "rgba(15,30,48,0.9)",
                        border: `1px solid ${statusday ? "#bae6fd" : "#164e63"}`,
                        borderRadius: "16px",
                        padding: "0 12px",
                        width: { xs: "min(220px, 55vw)", sm: "300px", md: "340px" },
                        height: "48px",
                        justifyContent: "center",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        boxShadow: statusday
                            ? "0 4px 20px rgba(14,165,233,0.07)"
                            : "0 4px 20px rgba(0,0,0,0.2)",
                        "&:hover": {
                            borderColor: "#0ea5e9",
                            boxShadow: "0 0 18px rgba(14,165,233,0.18)"
                        },
                        "&:focus-within": {
                            borderColor: "#0ea5e9",
                            boxShadow: "0 0 0 3px rgba(14,165,233,0.13), 0 0 25px rgba(14,165,233,0.15)"
                        }
                    }}
                >

                    <Search
                        sx={{
                            color: "#0ea5e9",
                            fontSize: 22,
                            flexShrink: 0,
                            mr: 1
                        }}
                    />

                    <Formik
                        initialValues={{ search: "" }}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                        onSubmit={() => { }}
                    >
                        {({ values, handleChange, handleBlur }) => (
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                style={{ width: "100%" }}
                            >
                                <Input
                                    name="search"
                                    value={values.search}
                                    onChange={(e) => {

                                        const value = e.target.value

                                        handleChange(e)

                                        clearTimeout(timer.current)

                                        requestId.current += 1
                                        const currentRequest = requestId.current

                                        if (value.trim().length >= 2) {

                                            timer.current = setTimeout(() => {
                                                searchData(value.trim(), currentRequest)
                                            }, 500)

                                        } else {

                                            setSave(null)
                                            blu()

                                        }
                                    }}
                                    onBlur={handleBlur}
                                    onFocus={change}
                                    placeholder="Search movies & series..."
                                    disableUnderline
                                    fullWidth

                                    sx={{
                                        color: statusday ? "#0c4a6e" : "#f0f9ff",
                                        fontFamily: "var(--font-manrope)",
                                        fontSize: { xs: "11px", sm: "13px" },
                                        fontWeight: 600,
                                        "& input": {
                                            padding: "10px 0",
                                            minWidth: 0
                                        },
                                        "& input::placeholder": {
                                            color: statusday ? "#64748b" : "#94a3b8",
                                            opacity: 1,
                                            fontFamily: "var(--font-manrope)"
                                        }
                                    }}
                                />
                            </form>
                        )}
                    </Formik>
                    <Close onClick={blu} />

                    <Stack
                        ref={st}
                        sx={{
                            position: "absolute",
                            top: "calc(100% + 12px)",
                            left: 0,
                            width: "120%",
                            minHeight: "100px",
                            maxHeight: "300px",
                            overflowY: "auto",
                            zIndex: 999999,
                            display: "none",
                            padding: "10px",
                            borderRadius: "16px",
                            background: statusday
                                ? "rgba(255,255,255,0.98)"
                                : "rgba(10,18,30,0.98)",
                            border: `1px solid ${statusday ? "#bae6fd" : "#164e63"}`,
                            backdropFilter: "blur(25px)",
                            boxShadow: "0 15px 45px rgba(0,0,0,0.3)",
                            "&::-webkit-scrollbar": {
                                width: "5px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#0ea5e9",
                                borderRadius: "10px"
                            }
                        }}
                    >

                        {save?.map((val) => (
                            <Link
                                key={val.id}
                                href={val.imdb_id}
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "14px",
                                    width: "100%",
                                    minWidth: 0,
                                    padding: "10px",
                                    boxSizing: "border-box",
                                    color: statusday ? "#0c4a6e" : "#e0f2fe",
                                    textDecoration: "none",
                                    borderRadius: "12px",
                                    background: statusday ? "#f0f9ff" : "rgba(22,43,64,0.65)",
                                    border: `1px solid ${statusday ? "#e0f2fe" : "#164e63"}`,
                                    transition: "0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = statusday ? "#e0f2fe" : "#164e63";
                                    e.currentTarget.style.borderColor = "#0ea5e9";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = statusday ? "#f0f9ff" : "rgba(22,43,64,0.65)";
                                    e.currentTarget.style.borderColor = statusday ? "#e0f2fe" : "#164e63";
                                }}
                            >
                                <Image
                                    src={val.poster}
                                    width={80}
                                    height={120}
                                    alt={val.name}
                                    sizes="80px"
                                    style={{
                                        width: "64px",
                                        height: "96px",
                                        minWidth: "64px",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        borderRadius: "9px",
                                        display: "block",
                                        background: statusday ? "#bae6fd" : "#0f172a"
                                    }}
                                />

                                <Stack
                                    sx={{
                                        flex: 1,
                                        minWidth: 0,
                                        justifyContent: "center",
                                        gap: 0.7
                                    }}
                                >
                                    <h3 style={{
                                        margin: 0,
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        lineHeight: 1.6,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap"
                                    }}>
                                        {val.name}
                                    </h3>

                                    <span style={{
                                        fontSize: "11px",
                                        color: statusday ? "#64748b" : "#94a3b8"
                                    }}>
                                        {val.type === "series" ? "TV Series" : "Movie"}
                                    </span>
                                </Stack>

                                <span style={{
                                    color: "#0ea5e9",
                                    fontSize: "20px",
                                    flexShrink: 0
                                }}>
                                    ›
                                </span>
                            </Link>
                        ))}

                    </Stack>

                </Stack>

                <IconButton
                    onClick={para}
                    sx={{
                        color: "#0ea5e9",
                        background: statusday ? "#e0f2fe" : "#172b40",
                        border: `1px solid ${statusday ? "#bae6fd" : "#164e63"}`,
                        transition: "0.3s",
                        margin: "0 7px",
                        "&:hover": {
                            background: statusday ? "#bae6fd" : "#164e63",
                            transform: "rotate(20deg)"
                        }
                    }}
                >
                    {statusday ? <LightMode /> : <DarkMode />}
                </IconButton>

            </Stack>

        </CostumeStack>
    )
}
