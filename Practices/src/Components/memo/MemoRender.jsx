import { memo } from "react";

const MemoRender = ({arr}) => {
    console.log(arr)
  return (
    <div>
      {
        arr.map((value, index)=>(
          <h2 key={index}>{value}</h2>
        ))
      }
    </div>
  )
}

export default memo(MemoRender);