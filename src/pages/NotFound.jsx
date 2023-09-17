import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <p>This url Not Found. <Link to="/" className='underline md:px-10 sm:px-10 xl:px-28'>Go Back Home</Link></p>
  )
}

export default NotFoundPage