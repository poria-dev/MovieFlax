import Main from '@/app/Main'
import Mycontext from '@/components/save'


async function userdata(url) {
  "use cache"
  const res = await fetch(url)
  return await res.json()
}

export default async function Page() {

  const temp = await userdata("https://v3-cinemeta.strem.io/catalog/movie/top.json")

  return (
    <Mycontext value={temp.metas ?? []}>
      <Main />
    </Mycontext>
  )
}
