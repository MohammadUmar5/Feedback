import { Input } from "@/components/ui/Input";
import "../styles/searchBar.css";

export default function SearchBar({
  placeholder = "Search for a topic inside subreddits",
}) {
  return (
    <div className="w-90 rounded-lg shadow-sm searchbar">
      <Input
        type="search"
        placeholder={placeholder}
        className="bg-background border border-input text-foreground"
      />
      <button className="analyse-btn h-8 w-20 rounded-lg">Search</button>
    </div>
  );
}
