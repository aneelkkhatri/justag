import React from 'react'
import MainFilter from '../containers/MainFilter'
import VisibleTagsBox from '../containers/VisibleTagsBox'
import VisibleItemsBox from '../containers/VisibleItemsBox'

var TagsWrapper = require('./TagsWrapper');

var MidPart = React.createClass({
	render: function () {
		return <div className="mid">
			<div>
				<div className="left">
					<div>
						<VisibleTagsBox />
					</div>
				</div>
				<div className="right">
					<div>
						<VisibleItemsBox />
					</div>
				</div>
			</div>
		</div>;
	}
});
var BottomPart = React.createClass({
	render: function () {
		return <div className="bottom"></div>;
	}
});

var ContentDiv = React.createClass({
	render: function () {
		return <div className="content-div">
 			<MainFilter />
 			<MidPart />
 			<BottomPart />
    	</div>;
	}
});

export default ContentDiv;