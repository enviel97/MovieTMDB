interface MovieSearchProps {
  initSearchValue?: string;
  searchConfirm?: (value: string) => void;
  onSearchChange?: (value: string) => void;
  autoSearch?: boolean;
}
