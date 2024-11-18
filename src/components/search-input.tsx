import { Search } from 'lucide-react';
import { Button } from './ui/button';

const SearchInput: React.FC = () =>{

 
  return (
    <div className="w-full space-y-2">
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-[0.5rem] bg-gray-100 text-xs font-normal text-muted-foreground shadow-none sm:pr-12 md:w-60 lg:w-80"
      >
        <Search className="mr-2 h-4 w-4" />
        Search for anything...
      </Button>
    </div>
  );
}
export default SearchInput