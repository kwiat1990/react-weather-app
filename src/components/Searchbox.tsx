import { BaseProps } from "@/types/baseProps.type";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface SearchboxProps extends BaseProps {
  onSubmit: (searchTerm: string) => void;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (input: string) => void;
  onClear?: () => void;
}

const Searchbox = (props: SearchboxProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchTerm(value);
    props.onChange && props.onChange(value);
  };

  const handleClick = () => {
    setSearchTerm("");
    props.onClear && props.onClear();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(searchTerm);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="flex justify-center max-w-lg mx-auto overflow-hidden rounded-xl focus-within:ring-2">
        <label htmlFor="searchbox" className="sr-only">
          Search
        </label>

        <div className="relative w-full">
          <input
            className="w-full p-4 py-4 bg-white shadow-inner focus:outline-none "
            disabled={props.disabled}
            id="searchbox"
            placeholder={props.placeholder}
            type="text"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
            {searchTerm && (
              <button type="button" onClick={handleClick}>
                <IoCloseOutline />
              </button>
            )}
            {props.children}
          </div>
        </div>

        <button type="submit" className="rounded-none button">
          Search
        </button>
      </div>
    </form>
  );
};

export { type SearchboxProps, Searchbox };
