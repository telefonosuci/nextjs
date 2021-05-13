import Link from 'next/link'

export default function People({ person }) {
  return (
    <li>
      <Link href="/people/[id]" as={`/people/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  )
}