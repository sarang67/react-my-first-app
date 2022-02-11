const List = ({ records }) => {
  return (
    <ul>
      {records.map((record) => {
        const { recordName, artistName, description } = record;
        return (
          <li key={recordName}>
            <h3>{recordName}</h3>
            <span>{artistName}</span>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
