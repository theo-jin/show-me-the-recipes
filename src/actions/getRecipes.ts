import { GetRecipesResponse } from '../schemas/recipe';

export const getRecipes = async (
  pageParam: number,
  term?: string
): Promise<GetRecipesResponse> => {
  const limit = 24;
  const skip = (pageParam - 1) * limit;

  const select =
    'id,name,cookTimeMinutes,difficulty,tags,image,mealType,prepTimeMinutes';
  let url;
  if (term) {
    url = `https://dummyjson.com/recipes/search?q=${encodeURIComponent(
      term
    )}&limit=${limit}&skip=${skip}&select=${select}`;
  } else {
    url = `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}&select=${select}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`에러 상태: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('에러가 발생했습니다.:', error);
    throw new Error(
      'quotes를 데이터 페칭하는데 실패했습니다. 다시시도 해주세요'
    );
  }
};
