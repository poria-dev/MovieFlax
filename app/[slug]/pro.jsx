
import React from 'react'
import Mui_Dis from './Mui_Dis'

async function userdata(url) {
    "use cache"
    const res = await fetch(url)
    return await res.json()

}

export default async function Pro({ params }) {
    const x = await params
    const s = x.slug
    const temp = await userdata(`https://cinemeta-live.strem.io/meta/movie/${s}.json?utm_source=chatgpt.com`)
    return (

        <Mui_Dis temp={temp} />

    )
}
