import { ArrowLeft, Mic, Search } from 'lucide-react';
import { Button } from '../Button';

interface SearchBarProps {
  fullSearch: boolean;
  setFullSearch: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  fullSearch,
  setFullSearch
}) => {
  return (
    <form
      className={`
          justify-center 
          flex-grow 
          gap-4
          ${fullSearch ? 'flex' : 'hidden md:flex'}
        `}
    >
      {fullSearch && (
        <Button
          onClick={() => setFullSearch(false)}
          type="button"
          size="icon"
          variant="ghost"
          className="flex-shrink-0"
        >
          <ArrowLeft />
        </Button>
      )}

      <div className="flex flex-grow max-w-[600px]">
        <input
          type="search"
          placeholder="Search"
          className="
              rounded-l-full 
              border
              border-secondary-border
              shadow-inner
              shadow-secondary
              py-1
              px-4
              text-lg
              w-full
              focus:border-blue-500
              outline-none
            "
        />
        <Button
          className="
              px-4
              py-2
              rounded-r-full
              border
              border-secondary-border
              border-l-0
              flex-shrink-0
            "
        >
          <Search />
        </Button>
      </div>
      <Button type="button" size="icon" className="flex-shrink-0">
        <Mic />
      </Button>
    </form>
  );
};

export default SearchBar;
