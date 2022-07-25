import store from "@/root/store";
import { useDispatch } from "react-redux";

export type AppDispatch = typeof store.dispatch;
const useAppDispatch: () => AppDispatch = useDispatch; // Export
export default useAppDispatch;
