import React from 'react'
import styles from './Fuction.module.css'


function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июня,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
        num 
      ];
}


const ProfileTwo = (props)=>{

 const one = props.registredAt.getDate()
 const two = montoToStr(props.registredAt.getMonth())
 const three = props.registredAt.getFullYear()
 const shtoEtoTakoe =+ one+" " + two+" " + three;


const str =  props.name.split(' ').splice(0,1).join(' ')
console.log(str);


  return(
    <div className={styles.container}>
      <p>Привет, <b>{str}!</b></p>
      <p>  Дата регистрации: {shtoEtoTakoe}</p>
    </div>
  )
}

export default ProfileTwo