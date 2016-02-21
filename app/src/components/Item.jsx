import React from 'react'
import TagsWrapper from './TagsWrapper'

const Item = React.createClass({
	render: function () {
		var data = this.props.dataDetail;

		return <div className="item">
			<div className="content">
				<div className="title">
					{data.content.title}
				</div>
				<div className="description">
					{data.content.description}
				</div>
			</div>
			<div className="tags">
				<TagsWrapper dataTags={data.tags} disableIScroll={true} />
			</div>
		</div>
	}
})

export default Item
