
"use client"

import Getdata from '@/api/getdata'
import Card from '@/components/Card'
import TitleMovise from '@/components/TitleMovise'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

export default function CardHome({ statusday }) {

    const [status, setStatus] = useState([])

    useEffect(() => {
        fetch("https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json")
            .then(res => res.json())
            .then((data) => {
                setStatus(data.metas)
            })
    }, [])

    const x = status.filter((val) => {
        return val.genres.includes("Thriller")
    })

    return (
        <>
            <TitleMovise fill="Thriller" status={statusday} />

            <Box sx={{
                display: "flex",
                gap: { xs: 1.5, sm: 2 },
                overflowX: "auto",
                overflowY: "hidden",
                px: { xs: 2, sm: 3, md: 6 },
                pb: 2,
                maxWidth: 1450,
                mx: "auto",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                    display: "none"
                },
                "& > *": {
                    flex: {
                        xs: "0 0 calc(50% - 6px)",
                        sm: "0 0 calc(33.333% - 11px)",
                        md: "0 0 320px"
                    },
                    minWidth: 0
                }
            }}>
                {x.slice(4, 8).map(val => (
                    <Box key={val.id} sx={{
                        scrollSnapAlign: "start"
                    }}>
                        <Card movie={val} statusday={statusday} />
                    </Box>
                ))}
            </Box>
        </>
    )
}
