import React from 'react'
import styles from './Fuction.module.css'


function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июня,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
        num 
      ];
}


class ProfileOne extends React.Component{
  render(){
 const one = this.props.registredAt.getDate()
  const two = montoToStr(this.props.registredAt.getMonth())
  const three = this.props.registredAt.getFullYear()
  const shtoEtoTakoe =+ one+" " + two+" " + three;


  const str =  this.props.name.split(' ').splice(0,1).join(' ')
  console.log(str);
   
     return(
       <div className={styles.container}>
        <p>Привет, <b>{str}!</b></p>
         <p>  Дата регистрации: {shtoEtoTakoe}</p>
       </div>
     )
}
}

export default ProfileOne