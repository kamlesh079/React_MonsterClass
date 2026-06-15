// Destructuring props -> {children} -> children is a special prop that contains the content between the opening and closing tags of a component


const Card = (props) => { 
  return <div> {props.children}</div>;
};
  
export default Card;
