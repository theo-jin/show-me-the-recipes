import { useQuery } from '@tanstack/react-query';
import { getRecipe } from '@/actions/getRecipe';

export const useRecipe = (id: string | undefined) => {
  return useQuery({
    queryKey: ['recipe', id],
    queryFn: async () => {
      const res = await getRecipe(id);
      if (res.status === 'error') {
        throw new Error(res.error);
      }
      return res;
    },
  });
};
