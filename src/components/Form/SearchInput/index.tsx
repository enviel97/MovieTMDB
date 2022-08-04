import React, { ChangeEvent, useState } from "react";
import { SearchViewProps } from "./SearchInput";
import useSearchInputStyles from "./SearchInput.styles";

const SearchInput = (props: SearchViewProps) => {
  const {
    type = "search",
    placeHolder = "Enter value...",
    initValue,
    onChanged,
    className,
    disable,
  } = props;

  const styles = useSearchInputStyles();

  const [searchValue, setSearchValue] = useState<string>(initValue ?? "");

  const _onChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
    onChanged?.call(this, event.currentTarget.value);
  };

  return (
    <input
      className={`${styles.inputSearch} ${className ?? ""}`}
      type={type}
      name='search-input'
      id={props.id}
      value={searchValue}
      placeholder={placeHolder}
      onChange={_onChanged}
      disabled={disable}
    />
  );
};

export default SearchInput;
