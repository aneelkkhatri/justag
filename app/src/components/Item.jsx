import React from 'react'
import TagsWrapper from './TagsWrapper'

const Item = React.createClass({
	getInitialState: function () {
		return {
			editMode: false
		}
	},
	render: function () {
		var data = this.props.dataDetail;

		return (this.state.editMode?
			<div className="item">
				<form onSubmit={e => {
					e.preventDefault()
				}} >
					<div className="content">
						<input type="text" className="title" placeholder="Title" ref="title" defaultValue={data.content.title}/>
						<textarea placeholder="description" className="description" ref="description" defaultValue={data.content.description}></textarea>
					</div>
					<div className="tags">
						<input type="text" className="tags" placeholder="Tags (space separated)" ref="tags" defaultValue={data.tags.join(" ")}/>
					</div>
					<div className="btn submit-btn" onClick={(e)=>{
						e.preventDefault();

						if (this.refs.title.value.trim().length == 0) {
							return ;
						}

						if (this.props.onEditDone) {
							var tags = this.refs.tags.value.replace(/\s+/g,' ').trim();
							this.props.onEditDone({
								content: {
									title: this.refs.title.value.trim(),
									description: this.refs.description.value.trim()
								},
								tags: tags.length > 0 ? tags.replace(/\s+/g,' ').split(' ') : [],
								id: this.props.dataDetail.id
							})
						}

						this.refs.title.value = '';
						this.refs.description.value = '';
						this.refs.tags.value = '';

						this.setState({
							editMode: false
						});
					}}>
						Save
					</div>
				</form>
			</div>
			:<div className={"item"+(data.done?" done":"")}>
			<div className="content">
				<div className="title">
					{data.content.title}
				</div>
				<div className="description">
					{data.content.description}
				</div>
			</div>
			<div className="tags">
				<TagsWrapper dataTags={data.tags} disableIScroll={true} />
			</div>
			<div className="btns">
				<span className="btn done-btn octicon octicon-check" onClick={()=>{
					if (this.props.onDoneClick) {
						this.props.onDoneClick(data);
					}
				}}></span>
				<span className="btn edit-btn octicon octicon-pencil" onClick={()=>{
					this.setState({
						editMode: true
					});
				}}></span>
				<span className="btn history-btn octicon octicon-history"></span>
			</div>
		</div>);
	}
})

export default Item
