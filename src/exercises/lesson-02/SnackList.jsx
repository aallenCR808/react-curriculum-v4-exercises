export default function SnackList() {
  const snackList = [
    { rank: 3, name: 'Crackers' },
    { rank: 2, name: 'Cookies' },
    { rank: 1, name: 'Fruit Salad' },
  ];
  const sortedSnacks = snackList.toSorted((a, b) => a.rank - b.rank);
  return (
    <ul>
      {sortedSnacks.map((snack) => (
        <li key={snack.rank}>{snack.name}</li>
      ))}
    </ul>
  );
}
