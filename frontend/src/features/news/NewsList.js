import { NewsItem } from "features/news";

function NewsList() {
	return (
		<>
			<div className='list-group list-group-flush'>
				<NewsItem />
			</div>
		</>
	);
}

export default NewsList;
