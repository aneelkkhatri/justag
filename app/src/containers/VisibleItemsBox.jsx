import React from 'react'
import { connect } from 'react-redux'
import ItemsBox from '../components/ItemsBox'
import { setItemsFilter, enableAddNewPost, addNewPost } from '../actions'

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
			}),
		newPost: state.newPost
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onItemClick: (tag) => {
			// dispatch(pushTagToMainFilter(tag))
		},
		onInput: (value) => {
			dispatch(setItemsFilter(value.toLowerCase()));
		},
		onAddNewClick: () => {
			dispatch(enableAddNewPost());
		},
		onNewPostSubmit: (newPostData) => {
			dispatch(addNewPost(newPostData));
		}
	}
}

let VisibleItemsBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsBox)

export default VisibleItemsBox
