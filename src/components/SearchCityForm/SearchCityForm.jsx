import { BsSearch } from "react-icons/bs";

const SearchCityForm = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="city"
        autoComplete="off"
        autoFocus
        placeholder="Write searching city..."
      />
      <button type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchCityForm;
