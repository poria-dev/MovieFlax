
import React from 'react'
import Mui_Dis from './Mui_Dis'
import getdata from '@/api/getdata'

export default async function Pro({ params }) {
    const x = await params
    const s = x.slug
    const temp = await getdata(`https://cinemeta-live.strem.io/meta/movie/${s}.json?utm_source=chatgpt.com`)
    return (

        <Mui_Dis temp={temp} />

    )
}
