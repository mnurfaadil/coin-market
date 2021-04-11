import { useRouter } from 'next/router'

const PID = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Dynamic ROUTE : {pid}</p>
}

export default PID