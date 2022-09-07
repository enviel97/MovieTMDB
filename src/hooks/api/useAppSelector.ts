import { RootState } from "@/root/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;
