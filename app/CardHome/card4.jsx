"use client"
import Card from '@/components/Card'
import TitleMovise from '@/components/TitleMovise'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Card4({ statusday }) {

    const [status, setStatus] = useState([])

    useEffect(() => {
        fetch("https://cinemeta-catalogs.strem.io/top/catalog/series/top.json")
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

            <Grid
                container
                spacing={2}
                sx={{
                    px: { xs: 2, sm: 3, md: 6 },
                    maxWidth: 1450,
                    mx: "auto",
                    justifyContent: "center",
                }}
            >
                {x.slice(5, 9).map(val => (
                    <Grid key={val.id} size={{ xs: 6, sm: 4, md: 3 }}>
                        <Card movie={val} statusday={statusday} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}