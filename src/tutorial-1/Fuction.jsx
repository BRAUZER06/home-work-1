import React from 'react'
import styles from './Fuction.module.css'


function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
        num - 1
      ];
}




class Profile extends React.Component{
  render(){
    const one = this.props.registredAt.getFullYear()
    const two = montoToStr(this.props.registredAt.getMonth())
    const three = this.props.registredAt.getDate()
    const shtoEtoTakoe =+ one+" " + two+" " + three;
   
     return(
       <div className={styles.container}>
         <p>{this.props.name}</p>
         <p>  Дата регсистрации: {shtoEtoTakoe}</p>
       </div>
     )
}
}




// const Profile = (props)=>{

//  const one = props.registredAt.getFullYear()
//  const two = montoToStr(props.registredAt.getMonth())
//  const three = props.registredAt.getDate()
//  const shtoEtoTakoe =+ one+" " + two+" " + three;

//   return(
//     <div className={styles.container}>
//       <p>{props.name}</p>
//       <p>  Дата регсистрации: {shtoEtoTakoe}</p>
//     </div>
//   )
// }

export default Profile