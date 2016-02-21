const filteredItems = (state = [], action) => {
	switch (action.type) {
		case 'SET_FILTERED_ITEMS':
			return action.filteredItems

		default :
			return state
	}
}

export default filteredItems