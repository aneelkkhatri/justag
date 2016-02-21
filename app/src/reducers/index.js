import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import tags from './tags'
import items from './items'
import mainFilter from './mainFilter'
import tagsFilter from './tagsFilter'
import itemsFilter from './itemsFilter'
import newPost from './newPost'

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	tags,
	items,
	mainFilter,
	tagsFilter,
	itemsFilter,
	newPost
})

export default todoApp
