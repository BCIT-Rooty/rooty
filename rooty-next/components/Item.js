

export default function Item({ id, name, rating, description }) {
      
  return (
    <div>
        <div key={id}>
            <h1>{name}</h1>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Rating:</strong> {rating}</p>
        </div>
    </div>
  );
};

