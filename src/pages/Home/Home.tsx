import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to = "/" >Home</Link>
        <Link to = "/fishing" >Fishing</Link>
    </div>
  )
}

export default Home