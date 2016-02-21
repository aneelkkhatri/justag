const pinnedFilters = (state = [], action) => {
	switch(action.type) {

		case 'PUSH_TAGS_TO_PINNED_FILTER':
			var newTags = action.tags.sort();
			for (var i = state.length - 1; i >= 0; i--) {
				var tags = state[i].sort();
				if (tags.length == newTags.length) {
					for (var j = tags.length - 1; j >= 0; j--) {
						if (tags[j] == newTags[j]) {
							return state;
						}
					};
				}
			};

			return [
				...state,
				action.newTags
			]

		default :
			return state
	}
}

export default mainFilter