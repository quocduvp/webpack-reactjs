import React, { Component } from 'react'
import RouteWithSubRoutes from '../../RouteWithSubRoutes';
import { Link } from 'react-router-dom'
export default class Contact extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() { 
    const { routes, match } = this.props
    return (
      <div>
        This is contact
        <Link to={`${match.url}/submit`}>Submit</Link>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    )
  }
}
