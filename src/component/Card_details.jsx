import React from 'react'
import style from "./Card_details.module.css"
const Card_details = ({date,logo, study,arrow, heading, subheading,devices, color}) => {
    //<script src="https://kit.fontawesome.com/8a4521f153.js" crossorigin="anonymous">asasas</script>   
  return (
    <div className={color==="white" ? style.white_box  : style.box}>
        <div className={style.div_1}>
            <label>{date}</label>
            <label>{logo}</label>
        </div>
        <div className={style.div_2}><p className={style.study}>{study}</p></div>
       <div className={style.div_3}>
       <h3>{heading}</h3>
        <h3>{subheading}</h3>
       <div>
           <label> <h5>{devices}</h5></label>
           <label><i className={arrow}></i></label>
       </div>

       </div>
        
    </div>
  )
}

export default Card_details