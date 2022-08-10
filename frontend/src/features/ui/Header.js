import { SearchBar } from "features/search";
import { NotificationTool } from "features/notifications";
import { UserProfileTool } from "features/user-profile";

function Header() {
	return (
		<>
			<SearchBar />
			<aside className='header-toolbar'>
				<NotificationTool />
				<UserProfileTool />
			</aside>
		</>
	);
}

export default Header;
