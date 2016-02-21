import React from 'react'
import { connect } from 'react-redux'
import TagsBox from '../components/TagsBox'
import { pushTagToMainFilter, setTagsFilter } from '../actions'

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
	var filteredItems = getVisibleItems(state.items
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
		}), state.visibilityFilter)

	var filteredTagsArray = filteredItems.map((item) => {
			return item.tags
		})

	var filteredTagsObj = {};
	for (var i = filteredTagsArray.length - 1; i >= 0; i--) {
		var filteredTags = filteredTagsArray[i];
		for (var j = filteredTags.length - 1; j >= 0; j--) {
			filteredTagsObj[filteredTags[j]] = true;
		};
	};

	return {
		tags: Object.keys(filteredTagsObj)
			.filter((tag) => {
				return tag.toLowerCase().indexOf(state.tagsFilter) != -1;
			})
			.filter((tag) => {
				const filterTags = state.mainFilter;
				for (var i = filterTags.length - 1; i >= 0; i--) {
					if (tag == filterTags[i]) return false;
				}

				return true;
			}).sort()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (tag) => {
			dispatch(pushTagToMainFilter(tag))
		},
		onInput: (value) => {
			dispatch(setTagsFilter(value.toLowerCase()));
		}
	}
}

let VisibleTagsBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(TagsBox)

export default VisibleTagsBox
