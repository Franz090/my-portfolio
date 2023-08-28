import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <p>This url Not Found. <Link to="/" className='underline '>Go Back Home</Link></p>
  )
}

export default NotFoundPage