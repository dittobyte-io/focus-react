import { BsSearch } from "react-icons/bs";

function SearchBar() {
	return (
		<>
			<div className='input-group header-search'>
				<input
					type='text'
					className='form-control'
					placeholder='search anything'
					aria-label='search'
				/>
				<button className='btn btn-primary' type='button'>
					<BsSearch className='search-icon' />
				</button>
			</div>
		</>
	);
}

export default SearchBar;
