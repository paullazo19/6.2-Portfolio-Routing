import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return(
      <section>
      <h2>Projects</h2>
       <ul>
         <li><Link to="/projects/webcoding/etsy">Etsy</Link></li>
       </ul>
       {this.props.children}
      </section>
    )
  }
})
