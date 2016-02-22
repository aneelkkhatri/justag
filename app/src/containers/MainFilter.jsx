import React from 'react'
import { connect } from 'react-redux'
import TagsWrapper from '../components/TagsWrapper'
import { popTagsFromMainFilterTil, popAllTagsFromMainFilter } from '../actions'

let MainFilter = ({tags, onTagClick, onHomeClick}) => {
	return <div className="top">
		<div>
			<TagsWrapper dataTags={tags} dataIScrollOptions={{scrollX: true, scrollY: false}} 
				onSelect={onTagClick}>
				<li className="btn home-btn" key={0} onClick={onHomeClick}><span className="octicon octicon-chevron-left"></span>
</li>
			</TagsWrapper>
		</div>
	</div>
}

const mapStateToProps = (state) => {
	return {
		tags: state.mainFilter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTagClick: (tag) => {
			dispatch(popTagsFromMainFilterTil(tag));
		},
		onHomeClick: () => {
			dispatch(popAllTagsFromMainFilter());
		}
	}
}

MainFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainFilter);

export default MainFilter