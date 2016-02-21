const mainFilter = (state = [], action) => {
	switch(action.type) {
		case 'PUSH_TAG_TO_MAIN_FILTER':
			return [
				...state,
				action.tag
			]

		case 'POP_TAGS_FROM_MAIN_FILTER_TIL':
			let index = state.indexOf(action.tag)
			if (index != -1) {
				return state.slice(0, index+1)
			}
			return []

		case 'POP_ALL_TAGS_FROM_MAIN_FILTER':
			return []
			
		default :
			return state
	}
}

export default mainFilter