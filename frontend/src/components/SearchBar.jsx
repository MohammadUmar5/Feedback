import { Input } from "@/components/ui/Input";
import "../styles/searchBar.css";

export default function SearchBar({
  placeholder = "Search for your Product",
}) {
  return (
    <div className=" h-5 sm:h-auto md:h-9 w-40 sm:w-90 md:w-90 ml-10 rounded-lg shadow-sm searchbar">
      <Input
        type="search"
        placeholder={placeholder}
        className="h-6 sm:h-25 md:h-9 bg-background border border-input text-foreground"
      />
      <button className="analyse-btn text-xs h-5 sm:h-8 md:h-8 w-17 sm:w-20 md:w-20 rounded-lg">Search</button>
    </div>
  );
}
