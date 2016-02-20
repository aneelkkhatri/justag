var React = require('react');

var TopPart = React.createClass({
	render: function () {
		return <div className="top"></div>;
	}
});
var MidPart = React.createClass({
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

		return <div className="mid dark" ref="wrapper">
			<ul className="tags-list">
				{tags}
			</ul>
		</div>;
	}
});
var BottomPart = React.createClass({
	render: function () {
		return <div className="bottom"></div>;
	}
});

var LeftSideBar = React.createClass({

	render: function () {
		return <div className="left-bar">
 			<TopPart />
 			<MidPart />
 			<BottomPart />
    	</div>;
	}
});

module.exports = LeftSideBar;