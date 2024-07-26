import Nav from "./Nav"
import PropTypes from 'prop-types'



function Layaout({children}) {
  return (
    <div className="bg-dark py-5 fw-bold  ">
       <div className="container ">
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
