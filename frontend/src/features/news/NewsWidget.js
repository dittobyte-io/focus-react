import { NewsList } from "features/news/index";
import {Widget} from "components"

function NewsWidget() {
	return (
		<>
			<div className='card dashboard-widget'>
				<Widget name="News Feed" dropdownItem1="Filter" dropdownItem2="Newsboard" dropdownItem3="Style" dropdownItem4="Reset" />
              	<div className='card-body'>
					<NewsList />
				</div>
			</div>
		</>
	);
}

export default NewsWidget;
