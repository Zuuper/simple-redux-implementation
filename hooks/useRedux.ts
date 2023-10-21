import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

type DispatchFunc = () => AppDispatch
export const useAppDispatch:DispatchFunc = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector