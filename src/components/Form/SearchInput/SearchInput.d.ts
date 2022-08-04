import { ChangeEvent } from "react";

interface SearchViewProps {
  id: string;
  className?: string;
  type?: string;
  placeHolder?: string;
  initValue?: string;
  disable?: boolean;
  debounce?: boolean;
  onChanged?: (value: string) => void;
}
