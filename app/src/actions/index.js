let nextTodoId = 0
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}

export const pushTagToMainFilter = (tag) => {
	return {
		type: 'PUSH_TAG_TO_MAIN_FILTER',
		tag
	}
}

export const popTagsFromMainFilterTil = (tag) => {
	return {
		type: 'POP_TAGS_FROM_MAIN_FILTER_TIL',
		tag
	}
}

export const popAllTagsFromMainFilter = () => {
	return {
		type: 'POP_ALL_TAGS_FROM_MAIN_FILTER'
	}
}

export const setTagsFilter = (value) => {
	return {
		type: 'SET_TAGS_FILTER',
		value
	}
}

export const setItemsFilter = (value) => {
	return {
		type: 'SET_ITEMS_FILTER',
		value
	}
}

export const setFilteredItems = (filteredItems) => {
	return {
		type: 'SET_FILTERED_ITEMS',
		filteredItems
	}
}

export const enableAddNewPost = () => {
	return {
		type: 'ENABLE_ADD_NEW_POST'
	}
}

export const addNewPost = (newPostData) => {
	return {
		type: 'ADD_NEW_POST',
		post: newPostData
	}
}

export const markPostDoneToggle = (post) => {
	return {
		type: 'MARK_POST_DONE_TOGGLE',
		post
	}
}