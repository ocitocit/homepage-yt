import { ArrowLeft, Mic, Search } from 'lucide-react';
import { Button } from '../Button';

interface SearchBarProps {
  fullSearch: boolean;
  setFullSearch: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ fullSearch, setFullSearch }) => {
  return (
    <form
      className={`
          flex-grow 
          justify-center 
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

      <div className="flex max-w-[600px] flex-grow">
        <input
          type="search"
          placeholder="Search"
          className="
              w-full 
              rounded-l-full
              border
              border-secondary-border
              px-4
              py-1
              text-lg
              shadow-inner
              shadow-secondary
              outline-none
              focus:border-blue-500
            "
        />
        <Button
          className="
              flex-shrink-0
              rounded-r-full
              border
              border-l-0
              border-secondary-border
              px-4
              py-2
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
