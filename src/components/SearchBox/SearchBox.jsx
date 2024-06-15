import styles from './SearchBox.module.css';

const SearchBox = ({ searchQuery, handleSearch }) => {
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
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
