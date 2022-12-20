import { Link } from "react-router-dom";

// pass in the news item object from newsList.js map
function NewsItem(props) {
	
	return (
		<>
			<div className='list-group-item d-flex align-items-start'>
				<div className='flex-grow-1'>
					<div className='d-flex justify-content-between align-items-start'>
						<Link
							to={"news/#"}
							className='news-title d-block mb-0 text-primary text-decoration-none'
						>
							{props.title}
						</Link>
						<p className='text-muted small news-date-time'>{props.date}</p>
					</div>
					<p className='text-muted small'>
						{props.comment}
					</p>
				</div>
			</div>
		</>
	);
}

export default NewsItem;
