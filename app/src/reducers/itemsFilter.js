const itemsFilter = (state = "", action) => {
	switch(action.type) {
		case 'SET_ITEMS_FILTER':
			return action.value

		default :
			return state
	}
}

export default itemsFilter