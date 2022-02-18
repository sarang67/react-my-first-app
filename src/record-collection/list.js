const List = ({ records }) => {
  return (
    <ul>
      {records.map((record) => {
        const { id, recordName, artistName, description } = record;
        return (
          <li key={id.toString()}>
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
