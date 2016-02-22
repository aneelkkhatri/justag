import React from 'react'
import { connect } from 'react-redux'
import ItemsBox from '../components/ItemsBox'

var actions = require('../actions');
var setItemsFilter = actions.setItemsFilter;
var enableAddNewPost = actions.enableAddNewPost;
var addNewPost = actions.addNewPost;
var markPostDoneToggle = actions.markPostDoneToggle;
var editPost = actions.editPost;

// import { setItemsFilter, enableAddNewPost, addNewPost, markPostDoneToggle, editPost } from '../actions'

const getVisibleItems = (items, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return items
		case 'SHOW_COMPLETED':
			return items.filter(t => t.done)
		case 'SHOW_ACTIVE':
			return items.filter(t => !t.done)
	}
}

const mapStateToProps = (state) => {
	
	return {
		items: getVisibleItems(state.items
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
			}), state.visibilityFilter),
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
		},
		onItemDone: (post) => {
			dispatch(markPostDoneToggle(post));
		},
		onEditDone: (post) => {
			dispatch(editPost(post));
		}
	}
}

let VisibleItemsBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsBox)

export default VisibleItemsBox
