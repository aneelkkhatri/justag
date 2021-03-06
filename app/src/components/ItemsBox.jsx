import React from 'react'
import ItemsWrapper from './ItemsWrapper'
import ItemPost from './ItemPost'
import Footer from './Footer'
const ItemsBox = ({items, newPost, onItemClick, onInput, onAddNewClick, onNewPostSubmit, onItemDone, onEditDone}) => {
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
					}}  type="text" placeholder="Filter Items"/>
					<span className="octicon octicon-search"></span>
				</form>
			</div>
			<ItemsWrapper dataItems={items} dataIScrollOptions={{scrollbars: "custom"}} 
				onSelect={onItemClick} dataNewPost={newPost} onNewPostSubmit={onNewPostSubmit} onDoneClick={onItemDone} onEditDone={onEditDone}>
			</ItemsWrapper>
		</div>
		<div className="bottom">
			{newPost.enabled?null:<div className="btn add-item-btn" onClick={onAddNewClick}>Add New +</div>}
			<Footer />
		</div>
	</div>
}

export default ItemsBox
