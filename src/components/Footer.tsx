import React, { Fragment } from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <Fragment>
        <span>Show:</span>
        <FilterLink>All</FilterLink>
        <FilterLink>Active</FilterLink>
        <FilterLink>Completed</FilterLink>
    </Fragment>
);

export default Footer;