import { NewsItem } from "features/news";
import { useGetNewsFeedQuery } from "./newsApiSlice";


function NewsList() {
	let feedLists=[];
	let userId = 1; 
	const { data, isLoading, isSuccess } =
	useGetNewsFeedQuery(userId);
	if (isSuccess) {
		feedLists=data.feedlist;
	}
	
	return (
		<>
			<div className='list-group list-group-flush'>
			{feedLists.map((feedList,i) => {
				if(i<5){
					return <NewsItem key={i} title={feedLists[i].feedtitle} comment={feedLists[i].comment} date={feedLists[i].created_on_date} />
				}
             })}
				
			</div>
		</>
	);
}

export default NewsList;
