export default function StudentWork() {
  const myName = 'Apeh';
  const myAge = '34';
  const myHobbies = [
    'Watching trash TV',
    'Hiking',
    'Gardening',
    'Practicing Spanish',
  ];

  return (
    <div>
      <h1>About Apeh</h1>
      <p>
        Hi I'm {myName}, {myAge}. I’m someone who values finding the magic in
        nature, music, and the people around me. On weekends, I usually recharge
        by taking walks and laying in the grass. I spend my spare time hiking,
        at the farmer’s market, or visiting family. I also enjoy some trash TV.
      </p>
      <ul>
        {myHobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
