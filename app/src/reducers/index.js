import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import tags from './tags'
import items from './items'
import mainFilter from './mainFilter'
import tagsFilter from './tagsFilter'
import itemsFilter from './itemsFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	tags,
	items,
	mainFilter,
	tagsFilter,
	itemsFilter
})

export default todoApp
