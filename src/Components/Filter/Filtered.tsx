type FilterProps = {
  name: string,
  bool: boolean
  handleClick: any
}
export default function Filtered(props: FilterProps) {
  const {name, bool, handleClick} = props;
  
  return (
    <>
      <button onClick = {()=>handleClick(name)} className={bool ? "filtered__circle filtered__circle_active" : "filtered__circle"}>
        {name}
      </button> 
    </>
  );
}
