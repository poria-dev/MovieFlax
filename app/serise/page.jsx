"use client"
import React, { useContext, useEffect, useState } from 'react'
import Main from '../Main'
import MenuSelect from '@/components/MenuSelect'
import { usePathname } from 'next/navigation'
import { Box, Grid } from '@mui/material'
import Card from '@/components/Card'
import Mycontext from '@/components/save'
import Footer from '@/components/Footer'

export default function page() {

  const pathmovis = usePathname()
  const [status, setStatus] = useState([])
  const context = useContext(Mycontext)
  const [xx, setXx] = useState(false)

  useEffect(() => {
    
    fetch("https://cinemeta-catalogs.strem.io/top/catalog/series/top.json")
      .then(res => res.json())
      .then((data) => {
        setStatus(data.metas)
      })

    const x = JSON.parse(localStorage.getItem("unique"))
    setXx(!x ?? false)
  }, [])

  return (
    <Box sx={{ minHeight: "100vh", background: xx ? "#080e18" : "#f0f9ff" }}>

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
            <Card statusday={xx} movie={val} />
          </Grid>
        ))}
      </Grid>
      <Footer statusday={!xx} />
    </Box>
  )
}