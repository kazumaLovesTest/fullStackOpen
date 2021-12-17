import React from "react";

const Notification = ({notification}) => {
    if (notification === '')
        return null
    const notficationStyle = {
        background:"lightgrey",
        fontSize:24,
        borderRadius:10,
        border:'1px solid',
        padding:20,
        color:'green'
    }
    return(
      <>
      <p style = {notficationStyle}>{notification}</p>
      </>
    )
  }

export default Notification