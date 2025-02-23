import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { RELEVANTS, COLORS } from "@/constants/constants";

function Header() {
  return (
    <div className="w-full px-4 py-2 border-b border-gray-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full">
          <span className="text-2xl sm:text-xl">🤳</span>
          <Input
            className="w-full sm:w-64 md:w-96"
            label="Search"
            size="sm"
            type="search"
            isClearable
          />
          <Button className="bg-black text-white w-full sm:w-auto" size="md">
            Search
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Select label="Relevant" className="w-full sm:w-36" size="sm">
            {RELEVANTS.map((relevant) => (
              <SelectItem key={relevant.key}>{relevant.label}</SelectItem>
            ))}
          </Select>
          <Select label="Filter by color" className="w-full sm:w-36" size="sm">
            {COLORS.map((color) => (
              <SelectItem key={color.key}>{color.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Header;
