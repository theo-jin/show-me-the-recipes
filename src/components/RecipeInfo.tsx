import { RecipeDetail } from '@/schemas/recipe';

interface RecipeInfoProps {
  recipe: RecipeDetail;
}
interface InfoItemProps {
  label: string;
  value: string | number;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <p className="text-medium">
      <span className="font-semibold">{label}:</span> {value}
    </p>
  );
}
export default function RecipeInfo({ recipe }: RecipeInfoProps) {
  return (
    <div className="flex-1">
      <h1 className="mb-2 text-2xl font-bold">Recipe Info</h1>
      <div className="mb-2">
        <p className="mb-2">General Info</p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2">
            <InfoItem label="조리 시간" value={recipe.cookTimeMinutes} />
            <InfoItem label="준비 시간" value={recipe.prepTimeMinutes} />
            <InfoItem label="음식 나라" value={recipe.cuisine} />
            <InfoItem
              label="1회 제공당 칼로리"
              value={recipe.caloriesPerServing}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <InfoItem label="난이도" value={recipe.difficulty} />
            <InfoItem label="평 점" value={recipe.rating} />
            <p className="text-medium">
              <span className="font-semibold"> 음식종류:</span>
              {recipe.mealType.map((el) => (
                <span className="mx-1">{el}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2 ">Detail Info</p>
        <div className="mb-2">
          <p className="mb-2 font-semibold">재료</p>
          {recipe.ingredients.map((el, index) => (
            <span className="mx-1" key={index}>
              {el}
              {index === recipe.ingredients.length - 1 ? '.' : ','}
            </span>
          ))}
        </div>
        <div>
          <p className="mb-2 font-semibold">조리 순서</p>
          {recipe.instructions.map((el, index) => (
            <p className="my-1" key={index}>
              {index + 1}. {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
