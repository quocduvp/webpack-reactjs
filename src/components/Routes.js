import React, { Component } from 'react'
import { Switch, Link } from 'react-router-dom'
import routers from '../route.config'
import RouteWithSubRoutes from './RouteWithSubRoutes';
export default class Routes extends Component {
  render() {
    return (
      <div>
        <h2>Tacosss</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          {routers.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    )
  }
}

