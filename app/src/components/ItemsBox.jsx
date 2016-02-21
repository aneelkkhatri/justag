import React from 'react'
import ItemsWrapper from './ItemsWrapper'

const ItemsBox = ({items, onItemClick, onInput}) => {
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
			<ItemsWrapper dataItems={items} dataIScrollOptions={{scrollbars: "custom"}} 
				onSelect={onItemClick} />
		</div>
	</div>
}

export default ItemsBox
