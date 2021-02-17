export function suspectText(value: string, valueTocompare: string): boolean {
  // ⊙﹏⊙
  return (
    value.toLocaleLowerCase().indexOf(valueTocompare.toLocaleLowerCase()) >= 0
  );
}
