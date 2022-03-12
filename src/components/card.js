import React from 'react';
import '../styles/card.css';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

const Card = ({ data }) => {
	return(
		<div className="resource-card">
			<h2 className="title">{data.title}</h2>
			<h4 className="category">{data.category}</h4>
			<p className="description">{data.description}</p>
			{ data.links.length > 0 ?
				<>
					<h4 className="link">Links:</h4>
					<div  className="links">
						{
							data.links.map((item, key) => {
								return (
									<div className="data" key={key}>
										<a href={item}>
											{item}
										</a>
										<br/>
									</div>
								)
							})
						}
					</div>
				</> : <></>
			}
			<h6 className="user">Shared by: {data.user}</h6>
			<div className='metrics'>
				<div className='likes'>
					<ThumbUp style={{ paddingRight: '0.5rem' }}/>
					{data.likes}
				</div>
				<div className='dislikes'>
					<ThumbDown style={{ paddingRight: '0.5rem' }} />
					{data.dislikes}
				</div>
			</div>
		</div>
	)
};

export default Card;