import getdata from '@/api/getdata'
import Main from '@/app/Main'
import Mycontext from '@/components/save'


export default async function Page() {

  const temp = await getdata("https://v3-cinemeta.strem.io/catalog/movie/top.json")

  return (
    <Mycontext value={temp.metas ?? []}>
      <Main />
    </Mycontext>
  )
}
