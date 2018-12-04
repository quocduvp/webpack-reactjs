import React, { Component } from 'react'
import RouteWithSubRoutes from '../../RouteWithSubRoutes';
import { Link, Switch } from 'react-router-dom'
export default class ContactForm extends Component {
    render() {
        const { routes, match } = this.props
        return (
            <div>
                Form contact
                    <Link to={`${match.url}/done`}>gone</Link>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        )
    }
}
