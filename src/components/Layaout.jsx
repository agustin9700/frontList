import Nav from "./Nav"
import PropTypes from 'prop-types'



function Layaout({children}) {
  return (
    <div className="bg-dark p-5 fw-bold fs-5  ">
       <div className="container px-5">
       <Nav />

       {children}
       
       </div>
        
      
    </div>
  )
  
}
Layaout.propTypes = {
  children: PropTypes.node.isRequired

}


export default Layaout
