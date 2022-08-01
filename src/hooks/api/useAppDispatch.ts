import { AppDispatch } from "@/root/store";
import { useDispatch } from "react-redux";

const useAppDispatch: () => AppDispatch = useDispatch; // Export
export default useAppDispatch;
