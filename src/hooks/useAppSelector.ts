import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '@store/index';

// Typed selector hook – use this throughout the app instead of plain useSelector
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
