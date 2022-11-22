import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  if (search === 'pau') setSearch('civill')

  return (
    <div className="header__search">
      <form
        // onSubmit={(event) => {
        //   event.preventDefault();
        //   setSearch(event.target.searchInput.value);
        // }}
        className="d-flex"
      >
        <input
          type="text"
          name="searchInput"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="header__searchInput form-control h-100"
        />
        <Button type="submit">
          <SearchIcon className="header__searchIncon" />
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
