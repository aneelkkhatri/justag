var React = require('react');
var TagsWrapper = require('./TagsWrapper');

var TopPart = React.createClass({
	render: function () {
		var tags = [];
		for (var i = 0; i < 20; i++) {
			tags.push("mytag"+i);
		}

		return <div className="top">
			<div>
				<TagsWrapper dataTags={tags} dataIScrollOptions={{scrollX: true, scrollY: false}} />
			</div>
		</div>;
	}
});
var TagsBox = require('./TagsBox');
var ItemsBox = require('./ItemsBox');

var MidPart = React.createClass({
	render: function () {
		var tags = [];
		for (var i = 0; i < 20; i++) {
			tags.push("tag"+i);
		}

		return <div className="mid">
			<div>
				<div className="left">
					<div>
						<TagsBox dataTags={tags} />
					</div>
				</div>
				<div className="right">
					<div>
						<ItemsBox />
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
 			<TopPart />
 			<MidPart />
 			<BottomPart />
    	</div>;
	}
});

module.exports = ContentDiv;
