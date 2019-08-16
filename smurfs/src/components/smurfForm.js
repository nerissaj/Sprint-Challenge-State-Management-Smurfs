import React from 'react';

const smurfForm = (props) => {
  const { addSmurf} = props;
const [item, setItem] = props.state;
  const handleChange = event => setItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    addSmurf(item);
    setItem("");
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
             name="name"
             placeholder="name"
             value={item}
             onChange={handleChange} />
      <button type="submit">AddSmurf</button>
      
    </form>
  );
};

export default smurfForm