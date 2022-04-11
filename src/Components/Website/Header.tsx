
import  Nav  from './Nav'

type Props = {}

const Headers = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav />
        
        </div>
    </div>
    </nav>
  )
}

export default Headers