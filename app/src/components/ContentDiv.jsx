var React = require('react');
var TagsWrapper = require('./TagsWrapper');

var TopPart = React.createClass({
	render: function () {
		return <div className="top"></div>;
	}
});
var MidPart = React.createClass({
	render: function () {
		return <div className="mid">
			<div>
				<div className="left">
					<div>
						<div className="box">
							<div className="inner">
								<div className="heading">Tags</div>
								<TagsWrapper />
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<div>
						<div className="box">
							<div className="inner">
								<div className="heading">Items</div>
							</div>
						</div>
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
