var React = require('react');

var TagsWrapper = React.createClass({
	_scroll: null,
	componentDidMount: function () {
		this._scroll = new IScroll(this.refs.wrapper, {
			mouseWheel: true,
			scrollbars: "custom"
		});
	},
	componentWillUnmount: function () {
		this._scroll.destroy();
	},
	render: function () {
		var tags = [];
		for (var i = 0; i < 50; i++) {
			var item = <li key={i} className="tag-item">
				<div>#&nbsp;&nbsp;&nbsp;ITEM {i+1}</div>
			</li>;
			tags.push(item);
		}

		return <div className="tags-wrapper" ref="wrapper">
			<ul className="tags-list">
				{tags}
			</ul>
		</div>;
	}
});

module.exports = TagsWrapper;
