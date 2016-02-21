let dummy = [
	{
		id: 1,
		content: {
			title: 'Take a stand for coding non-profits',
			description: 'Your programming contributions will help fundraise for important causes.'
		},
		tags: ['koding','hacksummit','hackathon']
	},
	{
		id: 2,
		content: {
			title: 'A Chance To Speak With These Sillicon Valley Investors',
			description: 'Winners will also have the chance to meet with our panel of Silicon Valley All-Stars.'
		},
		tags: ['silicon-valley','winners','hackathon']
	},
	{
		id: 3,
		content: {
			title: 'Start coding with react framework',
			description: 'It is just a reminder to start using react framework so you can write scalable apps.'
		},
		tags: ['react','js','dom','web']
	},
	{
		id: 4,
		content: {
			title: 'Redux is a predictable state container for JavaScript apps.',
			description: 'Look into it, refined stuff for single page scalable apps.'
		},
		tags: ['redux','js','web']
	}
];

let _lastId = dummy.length;

const items = (state = [], action) => {
console.log(action);
	switch (action.type) {
		case 'ADD_NEW_POST':
			return [
				...state,
				Object.assign({
					id: ++_lastId
				}, action.post)
			]

		default :
			return state;
	}
}

export default items