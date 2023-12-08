import { FilterItem, FilterList, FilterWrapper } from "./FilterSkills.styled";
import { skills } from "../../data/skills";
import Checkbox from "../Checkbox/Checkbox";

type Props = {
  filters: string[];
  setFilters: (value: string[] | ((prev: string[]) => string[])) => void;
};

const FilterSkills: React.FC<Props> = ({ filters, setFilters }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFilters((prev: string[]) => [...prev, event.target.name]);
    } else {
      setFilters((prev: string[]) =>
        prev.filter((item: string) => item !== event.target.name)
      );
    }
  };

  return (
    <FilterWrapper>
      <FilterList>
        {skills.map(({ name, title, icon }) => {
          return (
            <FilterItem key={name}>
              <Checkbox
                id={name}
                name={name}
                onChange={handleChange}
                checked={filters.includes(name)}
              >
                {icon}
                {title}
              </Checkbox>
              {/* <label htmlFor={name}>
                <Checkbox
                  type="checkbox"
                  id={name}
                  name={name}
                  onChange={handleChange}
                  checked={filters.includes(name)}
                />
                {icon}
                {title}
              </label> */}
            </FilterItem>
          );
        })}
      </FilterList>
    </FilterWrapper>
  );
};
export default FilterSkills;
