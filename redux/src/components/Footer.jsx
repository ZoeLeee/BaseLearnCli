import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_UNCOMPLETE}>
      Completed
    </FilterLink>
  </p>
)

export default Footer