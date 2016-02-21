import React from 'react'
import TagsWrapper from './TagsWrapper'

var TopPart = React.createClass({
	render: function () {
		return <div className="top"></div>;
	}
});
var MidPart = React.createClass({
	render: function () {
		var tags = [];
		for (var i = 0; i < 50; i++) {
			tags.push('justag'+i);
		}

		return <div className="mid dark">
			<TagsWrapper dataTags={tags} dataIScrollOptions={{scrollbars: "custom"}} />
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

export default LeftSideBar;