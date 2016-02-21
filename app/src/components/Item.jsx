import React from 'react'
import TagsWrapper from './TagsWrapper'

const Item = React.createClass({
	render: function () {
		var data = this.props.dataDetail;

		return <div className={"item"+(data.done?" done":"")}>
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
			<div className="btns">
				<span className="btn done-btn octicon octicon-check" onClick={()=>{
					if (this.props.onDoneClick) {
						this.props.onDoneClick(data);
					}
				}}></span>
				<span className="btn edit-btn octicon octicon-diff"></span>
				<span className="btn history-btn octicon octicon-history"></span>
			</div>
		</div>
	}
})

export default Item
