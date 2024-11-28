import { RecipesSearchInput } from '@/components/RecipesSearchInput';
import { RecipesList } from '../components/RecipesList';

export default function Recipes() {
  return (
    <div>
      <RecipesSearchInput className={'my-8'} />
      <RecipesList />
    </div>
  );
}
