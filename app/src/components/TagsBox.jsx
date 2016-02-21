import React from 'react'
import TagsWrapper from './TagsWrapper'

const TagsBox = ({ tags, onTagClick, onInput }) => {
	let input

	return <div className="box">
		<div className="inner">
			<div className="heading">
				<form onSubmit={e => {
					// e.preventDefault()
					// if (!input.value.trim()) {
					// 	return
					// }
					// dispatch(addTodo(input.value))
					// input.value = ''
				}}>
					<input ref={node => {
						input = node
					}} onChange={e => {
						let value = input.value;
						onInput(value);
					}}  type="text" placeholder="Filter"/>
				</form>
			</div>
			<TagsWrapper dataTags={tags} dataIScrollOptions={{scrollbars: "custom"}} 
				onSelect={onTagClick} />
		</div>
	</div>
}

export default TagsBox;
