import useSWR from 'swr'
import People from '../../components/People'
import Layout from '../../components/Layout'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout title="People">
      <ul>
        {data.map((p, i) => (
          <People key={i} person={p} />
        ))}
      </ul>
    </Layout>
  )
}