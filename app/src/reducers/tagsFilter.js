const tagsFilter = (state = "", action) => {
	switch(action.type) {
		case 'SET_TAGS_FILTER':
			return action.value

		default :
			return state
	}
}

export default tagsFilter