import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectNameFilter);

  const handleSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.containerSearchForm}>
      <label className={styles.labelSearchForm} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.inputSearchForm}
        id="search"
        name="search"
        type="text"
        autoComplete="search"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
