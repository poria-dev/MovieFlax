"use client"
import Getdata from '@/api/getdata'
import Card from '@/components/Card'
import TitleMovise from '@/components/TitleMovise'
import { Grid } from '@mui/material'
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
        return val.genres.includes("Adventure")
    })

    return (
        <>
            <TitleMovise fill="Adventure" status={statusday} />
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
                {x.slice(1, 5).map(val => (
                    <Grid key={val.id} size={{ xs: 6, sm: 4, md: 3 }}>
                        <Card movie={val} statusday={statusday} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}