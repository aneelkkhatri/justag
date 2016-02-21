import React, { PropTypes } from 'react'
import Item from './Item'

const ItemsWrapper = React.createClass({
	_scroll: null,
	componentDidMount: function () {
		var options = this.props.dataIScrollOptions || {};
		this._scroll = new IScroll(this.refs.wrapper, 
			Object.assign({
				mouseWheel: true
			}, options)
		);
	},
	componentDidUpdate: function () {
		this._scroll.refresh();
	},
	componentWillUnmount: function () {
		this._scroll.destroy();
	},
	render: function () {
		var items = this.props.dataItems || [];
		var itemElements = [];
		for (var i = 0, len = items.length; i < len; i++) {
			var item = items[i]
			var itemElement = <li key={item.id} className="item-item" onClick={this._onSelect.bind(this,i)} >
				<Item dataDetail={item} />
			</li>;
			itemElements.push(itemElement);
		}

		return <div className="items-wrapper" ref="wrapper">
			<ul className="items-list">
				{itemElements}
			</ul>
		</div>;
	},
	_onSelect: function (idx) {
		if (this._scroll.moved) return ;

		if (this.props.onSelect) {
			this.props.onSelect(this.props.dataItems[idx]);
		}
	}
});

export default ItemsWrapper