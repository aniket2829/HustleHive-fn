import React, { useState } from 'react';
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const filtersList = [
    { label: "Skills", options: ["Graphic Designer", "Web Development", "Content Writing", "Video & Animations"] },
    { label: "Experience Level", options: ["Entry Level", "Intermediate", "Expert"] },
    { label: "Location", options: ["India", "Canada", "Australia", "America", "Other (Specify)"] },
    { label: "Ratings & Reviews", options: ["5", "4", "3", "2", "1"] }
];

const Filter: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

    const handleCheckboxChange = (filterLabel: string, option: string) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterLabel]: prevState[filterLabel]
                ? prevState[filterLabel].includes(option)
                    ? prevState[filterLabel].filter(item => item !== option)
                    : [...prevState[filterLabel], option]
                : [option]
        }));
    };
  return (
    <>
      <Card className="px-8">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Filters</CardTitle>
            <p className="font-semibold cursor-pointer text-sm text-red-600">
              Clear All
            </p>
          </div>
          <CardDescription>Find Your Perfect Freelancer</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-3">
          {filtersList.map((filter, index) => (
            <div key={index}>
              <p className="font-semibold">{filter.label}</p>
              {filter.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex space-x-2 items-center">
                  <Checkbox
                    checked={selectedFilters[filter.label]?.includes(option)}
                    onChange={() => handleCheckboxChange(filter.label, option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Filter;
