import SearchResults from "./side-bar/Search-results";
import SearchForm from "./side-bar/Search-form";

const SideBar = () => {
  return (
    <div className="w-1/3 p-8">
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default SideBar;
