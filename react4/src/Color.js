import React, {memo} from 'react'

const Color = (props) => {
    console.log("************************");
  return (
    <>
        <h1>This is Color Component</h1>
        <h3>{props.colorarr[0]}</h3>
        <h3>{props.colorarr[1]}</h3>
        <h3>{props.colorarr[2]}</h3>
    </>
  )
}

export default memo(Color)