import { create } from 'zustand'
import en from '../assets/translates/en.json'
import es from '../assets/translates/es.json'

export const useTranslateStore = create((set) => ({
  language: en,
  selectES: () => set({ language: es }),
  selectEN: () => set({ language: en }),
}))
