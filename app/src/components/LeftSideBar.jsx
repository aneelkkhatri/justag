import React from 'react'
import TagsWrapper from './TagsWrapper'

var TopPart = React.createClass({
	render: function () {
		return <div className="top">
			<div className="logo">/&nbsp;&nbsp;justag&nbsp;&nbsp;/</div>
		</div>;
	}
});
var MidPart = React.createClass({
	_scroll: null,
	componentDidMount: function () {
		if (this.props.disableIScroll) return ;

		var options = this.props.dataIScrollOptions || {};
		this._scroll = new IScroll(this.refs.wrapper, 
			Object.assign({
				mouseWheel: true,
				scrollbars: "custom"
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
		var tags = [];
		for (var i = 0; i < 50; i++) {
			tags.push('justag'+i);
		}

		return <div className="mid dark">
			<div className="btn">About</div>
			<div className="about-data" ref="wrapper">
				<div>
					<b>Problem</b><br />
					I have tried many productivity apps to keep my ideas, notes, books-to-read-later, movie-to-watch-next-month, etc. listed, but all of them have failed miserably at keeping the stuffs clean and simple. The list would go very very big and then I would lose track of what kinds of items they are. <br />
					So, then I started to makeing categories for 'Ideas', 'Books', 'Movies', 'Stories', etc. but then there were items that would fall in multiple categories, and keeping them was not convenient; also again the lists in those categories would become very large difficult to handle.<br /><br />
					<b>Solution</b><br />
					Tag items and view them like they are in categories. <br />For example, you saw a game and you liked the music in it, and also ideas in it. So create an item and tag with 'game', 'music', 'ideas', 'fun'. Keep adding items and tagging them. In the end you will have list of tags which feel like categories. <br />
					<br /><br />
					created by <b>aneelkkhatri</b><br />
					<br /><br />
				</div>
			</div>
			<div className="btn">Board</div>
		</div>;
	}
});
var BottomPart = React.createClass({
	render: function () {
		return <div className="bottom">Aneel Kumar</div>;
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

export default LeftSideBar;