import React from 'react'
import TagsWrapper from './TagsWrapper'

const ItemPost = React.createClass({
	render: function () {
		var data = this.props.dataDetail;

		return <div className="item">
			<form onSubmit={e => {
					e.preventDefault()
				}} >
				<div className="content">
					<input type="text" className="title" placeholder="Title" ref="title" />
					<textarea placeholder="description" className="description" ref="description"></textarea>
				</div>
				<div className="tags">
					<input type="text" className="tags" placeholder="Tags (space separated)" ref="tags" />
				</div>
				<div className="btn submit-btn" onClick={this._onSubmit}>
					Add
				</div>
			</form>
		</div>
	},
	_onSubmit: function (e) {
		e.preventDefault();

		if (this.refs.title.value.trim().length == 0) {
			return ;
		}

		if (this.props.onSubmit) {
			var tags = this.refs.tags.value.replace(/\s+/g,' ').trim();
			this.props.onSubmit({
				content: {
					title: this.refs.title.value.trim(),
					description: this.refs.description.value.trim()
				},
				tags: tags.length > 0 ? tags.replace(/\s+/g,' ').split(' ') : []
			})
		}

		this.refs.title.value = '';
		this.refs.description.value = '';
		this.refs.tags.value = '';
	}
})

export default ItemPost