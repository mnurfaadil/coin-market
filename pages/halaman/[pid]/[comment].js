import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { pid, comment, foo } = router.query
  if (foo == undefined || foo == "") {
    return <p>Comment: {pid} ini komen : {comment}</p>
  } else {
    return <p>Comment: {pid} ini komen : {comment} with foo : {foo}</p>
  }
}

export default Comment