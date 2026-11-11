
"use client"
import styled from "@emotion/styled";
import { Box, List, ListItem, Stack } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Swiper from "./slider/swiper";
import { Favorite, Home, Movie, Person, VideoCameraBack } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuSelect from "@/components/MenuSelect";
import CardHome from "./CardHome/card";
import Card2 from "./CardHome/card2";
import Banner from "@/components/banners";
import Card3 from "./CardHome/card3";
import Card4 from "./CardHome/card4";
import Mycontext from "@/components/save";
import Footer from "@/components/Footer";

const CostumeBox = styled(Box)(({ themeMode }) => ({
  background: themeMode ? "#f0f9ff" : "#080e18",
  width: "100%",
  minHeight: "100dvh",
  overflowX: "hidden",
  color: themeMode ? "#0c4a6e" : "#e0f2fe",
  position: "relative",
  transition: "0.3s",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-200px",
    left: "20%",
    width: "500px",
    height: "500px",
    background: themeMode
      ? "rgba(56,189,248,0.15)"
      : "rgba(14,165,233,0.13)",
    filter: "blur(130px)",
    borderRadius: "50%",
    pointerEvents: "none"
  }
}))


export default function Main() {

  const [statusday, setStatusday] = useState(false)
  const path = usePathname()

  useEffect(() => {
    console.log("Main Render")
  }, [])


  return (
    <>
      <CostumeBox themeMode={statusday}>

        {/* header import from components .. */}

        <Header statusday={statusday} setStatusday={setStatusday} />

        {/* header import from components .. */}




        {/* Menu select import from components ... */}




        <Mycontext.Provider value={statusday}>

          <MenuSelect statusday={statusday} path={path} />

        </Mycontext.Provider>

        {/* Menu select import from components ... */}




        {/* sliders swiper .... */}

        <Swiper />

        {/* sliders swiper .... */}



        <CardHome statusday={statusday} />

        <br />
        <br />
        <br />
        <br />

        <Card2 statusday={statusday} />


        <br />
        <br />


        <Banner statusday={statusday} />

        <br />
        <br />

        <Card3 statusday={statusday} />

        <br />
        <br />

        <Card4 statusday={statusday} />

        <br />
        <Footer statusday={statusday} />


      </CostumeBox>
    </>
  )
}
