import React from 'react'
import { connect } from 'react-redux'
import ItemsBox from '../components/ItemsBox'
import { setItemsFilter } from '../actions'

const mapStateToProps = (state) => {
	
	return {
		items: state.items
			.filter((item) => {
				let content = item.content;
				return content.text && content.text.toLowerCase().indexOf(state.itemsFilter) != -1
					|| content.title && content.title.toLowerCase().indexOf(state.itemsFilter) != -1
					|| content.description && content.description.toLocaleLowerCase().indexOf(state.itemsFilter) != -1;
			})
			.filter((item) => {
				const filterTags = state.mainFilter;

				for (var i = filterTags.length - 1; i >= 0; i--) {
					if (item.tags.indexOf(filterTags[i]) == -1) {
						return false;
					}
				}

				return true;
			})
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onItemClick: (tag) => {
			// dispatch(pushTagToMainFilter(tag))
		},
		onInput: (value) => {
			dispatch(setItemsFilter(value.toLowerCase()));
		}
	}
}

let VisibleItemsBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsBox)

export default VisibleItemsBox
