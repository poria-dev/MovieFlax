
"use client"

import Mycontext from '@/components/save'
import React, { useContext, useEffect, useState } from 'react'
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function Swiper() {

    const x = useContext(Mycontext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-full h-[300px] sm:h-[380px] lg:h-[570px]" />

    return (
        <div className="w-full max-w-[1500px] mx-auto px-3 sm:px-6 lg:px-10 py-4 overflow-hidden">

            <SwiperCore
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1.08}
                spaceBetween={12}
                centeredSlides={false}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={900}
                loop={x.length > 1}
                breakpoints={{
                    640: {
                        slidesPerView: 1.15,
                        spaceBetween: 18
                    },
                    1024: {
                        slidesPerView: 1.20000000,
                        spaceBetween: 24
                    }
                }}
                className="pb-12!"
            >

                {x.slice(2, 12).map((val, index) => (

                    <SwiperSlide key={val.id}>

                        <div className="group relative w-full h-[300px] sm:h-[380px] lg:h-[570px] overflow-hidden rounded-2xl sm:rounded-3xl bg-[#101827]">

                            <img
                                src={val.background || val.poster}
                                alt={val.name}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-[#080e18] via-[#080e18]/80 to-transparent" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#080e18]/90 via-transparent to-transparent" />

                            <div className="relative z-10 flex flex-col justify-center items-start h-full w-full sm:w-[75%] lg:w-[65%] p-5 sm:p-10 lg:p-14">

                                <span className="bg-sky-400/15 border border-sky-400/40 text-sky-300 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest mb-4">
                                    TOP FEATURED #{index + 1}
                                </span>

                                <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-black leading-tight line-clamp-2 max-w-[650px]">
                                    {val.name}
                                </h2>

                                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs sm:text-sm">

                                    <span className="text-yellow-400 font-bold">
                                        ★ {val.imdbRating || "N/A"}
                                    </span>

                                    <span className="text-slate-300">
                                        {val.year || val.releaseInfo || "Unknown"}
                                    </span>

                                    <span className="text-sky-300">
                                        {val.genres?.slice(0, 2).join(" • ")}
                                    </span>

                                </div>

                                <p className="text-slate-300 text-xs sm:text-sm leading-6 mt-5 max-w-[520px] line-clamp-3">
                                    {val.description || "Discover this featured movie on PORIAFLIX."}
                                </p>

                                <div className="flex items-center gap-3 mt-6">

                                    <button className="bg-sky-400 hover:bg-sky-300 text-[#080e18] font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 rounded-xl transition duration-300">
                                        <Link href={val.imdb_id}>Explore Movie</Link>
                                    </button>
                                </div>

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </SwiperCore>

        </div>
    )
}
