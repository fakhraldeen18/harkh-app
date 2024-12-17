import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlignJustify, CalendarCheck2, ChevronDown, ChevronLast, Filter, LayoutGrid, ListFilter, Plus } from "lucide-react";
import { AddTaskDialog } from "./add-task-dialog";

interface SubHeaderProps {}

interface FilterDropdownProps {
  label: string;
  icon: React.ReactNode;
  options?: { label: string; checked?: boolean }[];
}

  
const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, icon, options }) => {
    const hasOptions = options && options.length > 0;
  
    return hasOptions ? (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="md" className="ml-1 flex items-center">
            <div className="flex items-center gap-1 px-2">
              {icon}
              <span>{label}</span>
            </div>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {options.map((option, index) => (
            <DropdownMenuCheckboxItem key={index} checked={option.checked}>
              {option.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Button variant="outline" size="md" className="ml-1 flex items-center">
        <div className="flex items-center gap-1 px-2">
          {icon}
          <span>{label}</span>
        </div>
      </Button>
    );
  };

  
const SubHeader: React.FC<SubHeaderProps> = () => (

    <div className="flex justify-between">
        <div className="flex gap-3">
            <FilterDropdown
                label="Filter"
                icon={<Filter />}
                options={[
                    { label: 'Fulfilled', checked: true },
                    { label: 'Declined' },
                    { label: 'Refunded' },
                ]}
            />
            <FilterDropdown
                label="Today"
                icon={<CalendarCheck2 />}
                options={[
                    { label: 'Fulfilled', checked: true },
                    { label: 'Declined' },
                    { label: 'Refunded' },
                ]}
            />
        </div>
        <div className="flex mx-3 items-center">
          
     <AddTaskDialog/>
            <div className="h-6 w-0.5 bg-slate-200 mx-5"></div>
            <div className="flex gap-3">
                <Button variant="secondary" size="xss">
                    <LayoutGrid />
                </Button>
                <Button variant="secondary" size="xss">
                    <AlignJustify />
                </Button>
            </div>
        </div>
    </div>
  );
  
  export default SubHeader;
  