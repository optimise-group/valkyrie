/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';

interface ISeachResults {
  [key: string]: any;
  _score: number;
}

export default function useSearch(haystack: any[] | undefined, keys: string[], needle: string) {
  const flattenObject = useCallback((item: { [key: string]: any }, prefix?: string) => {
    const flattened: { [key: string]: any } = {};
    prefix = prefix ? prefix + '.' : '';

    for (const key in item) {
      if (typeof item[key] === 'object' && item[key] !== null) {
        Object.assign(flattened, flattenObject(item[key], prefix + key));
      } else {
        flattened[prefix + key] = item[key];
      }
    }

    return flattened;
  }, []);

  const scoreHaystackItem = useCallback((item: string, query: string) => {
    const searchable = item.toString().toLowerCase().trim();

    // Check if the string is an exact match to this partial search query
    if (searchable === query) {
      return 1;
    }

    // Bonus points if the string starts with the search
    if (searchable.startsWith(query)) {
      return 2 + query.length;
    }

    // Check if the search is included in the item's string, only count if, not how often
    if (searchable.includes(query)) {
      return 4 + query.length;
    }

    return 0;
  }, []);

  const result = useMemo(() => {
    if (needle === '') {
      return haystack || [];
    }

    const results: ISeachResults[] = [];
    const cleanNeedle = needle.trim().toLowerCase();

    // Loop through the haystack
    (haystack || []).map((item) => {
      const flatItem: { [key: string]: any } = flattenObject(item);
      let matchScore = 0;

      keys.forEach((key) => {
        if (flatItem[key]) {
          // Do a 1:1 comparison between all searchable items
          matchScore += scoreHaystackItem(flatItem[key], cleanNeedle);
        }
      });

      // If we have a score, set it
      if (matchScore) {
        results.push({ ...item, _score: matchScore });
      }
    });

    return results.sort((a, b) => (a._score < b._score ? -1 : 1));
  }, [flattenObject, haystack, keys, needle, scoreHaystackItem]);

  return { result, needle };
}
