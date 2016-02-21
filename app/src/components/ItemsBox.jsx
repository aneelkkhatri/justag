var React = require('react');
var TagsWrapper = require('./TagsWrapper');

var ItemsBox = React.createClass({
	render: function () {
		return <div className="box">
			<div className="inner">
				<div className="heading">
					<input type="text" placeholder="Items" />
				</div>
			</div>
		</div>;
	}
});

module.exports = ItemsBox;
