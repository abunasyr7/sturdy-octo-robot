import { API_URLS } from '../config/api';

let categoriesCache: string[] | null = null;

export async function step2Loader(): Promise<string[]> {
  if (categoriesCache !== null) return categoriesCache;
  const res = await fetch(API_URLS.categoryList);
  const data: string[] = await res.json();
  categoriesCache = data;
  return data;
}