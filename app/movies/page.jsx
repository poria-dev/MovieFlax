"use client"
import React, { useContext, useEffect, useState } from 'react'
import Main from '../Main'
import MenuSelect from '@/components/MenuSelect'
import { usePathname } from 'next/navigation'
import { Box, Grid } from '@mui/material'
import Card from '@/components/Card'
import Mycontext from '@/components/save'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function page() {

  const pathmovis = usePathname()
  const [status, setStatus] = useState([])
  const context = useContext(Mycontext)
  const [give, setGive] = useState(false)

  useEffect(() => {
    fetch("https://cinemeta-catalogs.strem.io/top/catalog/movie/top.json")
      .then(res => res.json())
      .then((data) => {
        setStatus(data.metas)
      })

    const getloc = JSON.parse(localStorage.getItem("unique"))
    setGive(!getloc ?? false)
  }, [])

  return (
    <Box sx={{ minHeight: "100vh", background: give ? "#080e18" : "#f0f9ff" }}>

      <MenuSelect statusday={context} path={pathmovis} />

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
        {status.map(val => (
          <Grid key={val.id} size={{ xs: 6, sm: 4, md: 3 }}>
            <Card statusday={give} movie={val} />
          </Grid>
        ))}
      </Grid>

      <Footer statusday={!give} />
    </Box>


  )
}