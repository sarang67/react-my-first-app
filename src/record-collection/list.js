// const records = [
//   {
//     recordName: "3 Idiots",
//     artistName: "Amir khan",
//     description:
//       "3 Idiots is a 2009 Indian Tamil-language coming-of-age comedy-drama film written, edited and directed by Rajkumar Hirani and co-written by Abhijat Joshi",
//   },

//   {
//     recordName: "Chak De! India",
//     artistName: "Sharukh khan",
//     description:
//       "Chak De! India ( transl. Let's Go! India) is a 2007 Indian Hindi-language sports film directed by Shimit Amin and produced by Aditya Chopra,",
//   },
// ];

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
