import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@store/index';

// Typed dispatch hook – use this throughout the app instead of plain useDispatch
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
