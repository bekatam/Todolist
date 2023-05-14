import { memo } from "react";

type FilterProps = {
  name: string,
  bool: boolean
  handleClick: any
}
export const Filtered: React.FC<FilterProps> = memo((props) => {
  const {name, bool, handleClick} = props;
  
  return (
    <>
      <button onClick = {()=>handleClick(name)} className={bool ? "filtered__circle filtered__circle_active" : "filtered__circle"}>
        {name}
      </button> 
    </>
  );
})
