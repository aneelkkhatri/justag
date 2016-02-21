var React = require('react');
var assign = require('object-assign');

var TagsWrapper = React.createClass({
	_scroll: null,
	componentDidMount: function () {
		var options = this.props.dataIScrollOptions || {};
		this._scroll = new IScroll(this.refs.wrapper, 
			assign({
				mouseWheel: true
			}, options)
		);
	},
	componentWillUnmount: function () {
		this._scroll.destroy();
	},
	render: function () {
		var tags = this.props.dataTags || [];
		var tagElements = [];
		for (var i = 0, len = tags.length; i < len; i++) {
			var tag = tags[i]
			var item = <li key={tag} className="tag-item">
				<div>{tag}</div>
			</li>;
			tagElements.push(item);
		}

		return <div className="tags-wrapper" ref="wrapper">
			<ul className="tags-list">
				{tagElements}
			</ul>
		</div>;
	}
});

module.exports = TagsWrapper;
