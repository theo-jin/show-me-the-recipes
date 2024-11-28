export const getRecipe = async (id: string | undefined) => {
  try {
    const url = `https://dummyjson.com/recipes/${id}`;

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
