import { useInfiniteQuery } from '@tanstack/react-query';
import { getRecipes } from '../actions/getRecipes';
import { useRecipesSearchParams } from './useRecipesSearchParams';

const useInfiniteRecipes = () => {
  const { term } = useRecipesSearchParams();
;
  return useInfiniteQuery({
    queryKey: ['recipes', term],
    queryFn: ({ pageParam }) => getRecipes(pageParam, term),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.limit === 0 ? undefined : lastPageParam + 1;
    },
    initialPageParam: 1,
  });
};

export default useInfiniteRecipes;
