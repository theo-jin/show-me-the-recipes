import { ChangeEvent, useState, type HTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';
import { useRecipesSearchParams } from '../hooks/useRecipesSearchParams';
import { useDebounce } from '../lib/useDebounce';

export function RecipesSearchInput({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [term, setTerm] = useState('');

  const { handleTermChange } = useRecipesSearchParams();

  const debouncedHandleTermChange = useDebounce((value: string) => {
    handleTermChange(value);
  }, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    debouncedHandleTermChange(e.target.value);
  };
  return (
    <div className={cn('relative', className)} {...props}>
      <Input
        value={term}
        onChange={handleChange}
        className={'h-12 pl-12 text-base'}
        placeholder={'Search product'}
      />
      <SearchIcon className={'absolute left-3 top-1/2 -translate-y-1/2'} />
    </div>
  );
}
