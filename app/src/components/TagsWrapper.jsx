import React, { PropTypes } from 'react'

const TagsWrapper = React.createClass({
	_scroll: null,
	componentDidMount: function () {
		if (this.props.disableIScroll) return ;

		var options = this.props.dataIScrollOptions || {};
		this._scroll = new IScroll(this.refs.wrapper, 
			Object.assign({
				mouseWheel: true
			}, options)
		);
	},
	componentDidUpdate: function () {
		if (this.props.disableIScroll) return ;
		
		this._scroll.refresh();
	},
	componentWillUnmount: function () {
		if (this.props.disableIScroll) return ;
		
		this._scroll.destroy();
	},
	render: function () {
		var tags = this.props.dataTags || [];
		var tagElements = [];
		for (var i = 0, len = tags.length; i < len; i++) {
			var tag = tags[i]
			var item = <li key={"t"+tag} className="btn tag-item" 
				dataIScrollOptions={{scrollX: true, scrollY: false}}
				onClick={this._onSelect.bind(this,i)} >
				<div>{tag}</div>
			</li>;
			tagElements.push(item);
		}

		return <div className="tags-wrapper" ref="wrapper">
			<ul className="tags-list">
				{this.props.children}
				{tagElements}
			</ul>
		</div>;
	},
	_onSelect: function (idx) {
		if (this._scroll && this._scroll.moved) return ;

		if (this.props.onSelect) {
			this.props.onSelect(this.props.dataTags[idx]);
		}
	}
});

export default TagsWrapper;
