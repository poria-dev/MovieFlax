export default async function getdata(url) {
    
    const res = await fetch(url)
    return await res.json()
}