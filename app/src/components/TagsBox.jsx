import React from 'react'
import TagsWrapper from './TagsWrapper'

const TagsBox = ({ tags, mainFilterTags, onTagClick, onInput }) => {
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
					}}  type="text" placeholder="Filter Tags"/>
					<span className="octicon octicon-search"></span>
				</form>
			</div>
			<TagsWrapper dataTags={tags} dataIScrollOptions={{scrollbars: "custom"}} 
				onSelect={onTagClick} />
		</div>
		<div className="bottom">
			{mainFilterTags && mainFilterTags.length>0? <span className="btn octicon octicon-pin" style={{float: 'left'}}></span>:null}

			<span className="btn setting-btn octicon octicon-gear" style={{float: 'right'}}></span>
		</div>
	</div>
}

export default TagsBox;
