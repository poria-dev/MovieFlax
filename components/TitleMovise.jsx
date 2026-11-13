"use client"

import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import Link from 'next/link'

export default function TitleMovise({ fill, status, data }) {

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: {
          xs: "100%",
          md: "80%"
        },
        mb: 3,
        borderLeft: "4px solid #38bdf8",
        pl: 2,
        mx: "auto"
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ letterSpacing: 0.5 }}
        style={{ color: status ? "#0c4a6e" : "#e0f2fe" }}
      >
        {fill}
      </Typography>

      <Button
        href="/movies"
        sx={{
          color: "#38bdf8",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 2,
          "&:hover": {
            bgcolor: "#38bdf815",
            color: "#7dd3fc"
          }
        }}
      >
        Show More
      </Button>
    </Stack>
  )
}