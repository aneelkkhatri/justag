let dummy = [
	{
		id: 0,
		content: {
			title: 'Take a stand for coding non-profits',
			description: 'Your programming contributions will help fundraise for important causes.'
		},
		tags: ['koding','hacksummit','hackathon']
	},
	{
		id: 1,
		content: {
			title: 'A Chance To Speak With These Sillicon Valley Investors',
			description: 'Winners will also have the chance to meet with our panel of Silicon Valley All-Stars.'
		},
		tags: ['silicon-valley','winners','hackathon']
	},
	{
		id: 2,
		content: {
			title: 'Start coding with react framework',
			description: 'It is just a reminder to start using react framework so you can write scalable apps.'
		},
		tags: ['react','js','dom','web']
	},
	{
		id: 3,
		content: {
			title: 'Redux is a predictable state container for JavaScript apps.',
			description: 'Look into it, refined stuff for single page scalable apps.'
		},
		tags: ['redux','js','web']
	}
];

let _lastId = dummy.length;

const items = (state = dummy, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_NEW_POST':
			let post = action.post;
			let tags = post.tags;
			let tagsObj = {};
			for (var i = tags.length - 1; i >= 0; i--) {
				tagsObj[tags[i]]=true;
			};

			let newPost = Object.assign({
				id: _lastId++
			}, action.post);
			newPost.tags = Object.keys(tagsObj);

			return [
				...state,
				newPost
			]

		case 'MARK_POST_DONE_TOGGLE':
			return [
				...state.slice(0, action.post.id),
				Object.assign({}, action.post, {
					done: !action.post.done
				}),
				...state.slice(action.post.id+1)
			]
		default :
			return state;
	}
}

export default items