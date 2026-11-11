import React from 'react'
async function userdata(url) {
    const res = await fetch("url")
    return await res.json()
}
export default async function Getdata({ get }) {
    const temp = await userdata( get )
    console.log(temp);

    return (
        <div>getdata</div>
    )
}
