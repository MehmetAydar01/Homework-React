import ListData from './ListData';

const List = ({ data, handleDelete }) => {
  return (
    <article>
      {data.map((item) => {
        return <ListData key={item.id} {...item} handleDelete={handleDelete} />;
      })}
    </article>
  );
};

export default List;
