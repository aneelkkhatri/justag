import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<p>
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		&nbsp;&nbsp;/&nbsp;&nbsp;
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		&nbsp;&nbsp;/&nbsp;&nbsp;
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>

		<span className="btn setting-btn octicon octicon-gear" style={{float: 'right'}}></span>
	</p>
)

export default Footer
