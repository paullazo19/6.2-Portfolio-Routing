import React from 'react'
import { Link } from 'react-router'
export default React.createClass({
  render(){
    return(
      <section>{this.props.params.Etsy}
        <h1>Etsy Project</h1>
        <a href="http://paullazo19-etsy-clone.surge.sh/">Try out my Etsy clone!</a>
        <img className="image" src="/assets/etsy.png"/>


      </section>

    )
  }
})
