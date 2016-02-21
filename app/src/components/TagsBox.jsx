var React = require('react');
var TagsWrapper = require('./TagsWrapper');

var TagsBox = React.createClass({
	render: function () {
		return <div className="box">
			<div className="inner">
				<div className="heading">
					<input type="text" placeholder="Tags" />
				</div>
				<TagsWrapper dataTags={this.props.dataTags||{}} dataIScrollOptions={{scrollbars: "custom"}}/>
			</div>
		</div>;	
	}
});

module.exports = TagsBox;
