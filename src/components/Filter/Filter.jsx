import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};
