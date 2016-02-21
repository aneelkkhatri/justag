const newPost = (state = {
	enabled: true
}, action) => {
	switch(action.type) {
		case 'ENABLE_ADD_NEW_POST':
			return Object.assign({}, state, {
				enabled: true
			});
		default :
			return state
	}
}

export default newPost