import React from 'react';
import Inputs from './Inputs';
import   "./App.scss"







//МОИ БЕДНЫЕ ЖЕЛЕЗНЫЕ НЕРВЫ
const App = () => {
  const [ comments, setComments]=React.useState([])
  const [textInput, setInputValue]= React.useState({fullName:'', email:'', text:'', createdAt: ''})
  
  

   const onChangeInput =(e)=>{
    setInputValue({...textInput, [e.target.name] : e.target.value, createdAt:new Date().toLocaleString()} ) // я знаю что это можно было повесить на кнопку(form)




   
   }
   const formClick = (e)=>{
    e.preventDefault();
    
    setComments([...comments, {...textInput}])
    console.log(comments);
    
    
  }
 

 const removeItem =(index)=>{
  const newArr = comments.filter((_,i)=>{
    if(index !== i){
      return true
    } else return false
  })
  setComments(newArr)
 }




  React.useEffect(()=>{
    localStorage.setItem('comments', JSON.stringify(comments))
  },[comments])

  return  (
    <div className='container'>
      {comments.map((item,index)=>(
      <Inputs key={`${item}_${index}`} value={comments} name={item.fullName} comment={item.text} index={index} onRemove={removeItem} /> // я заю что это можно было сократить
      ))}
      <form onSubmit={formClick}>
      <input value={textInput.fullName} onChange={onChangeInput} name='fullName' placeholder='Имя'/>
      <input value={textInput.email} onChange={onChangeInput} name='email' placeholder='Почта'/>
      <input value={textInput.text} onChange={onChangeInput} name='text' placeholder='Текст'/>
      <button>ОТПРАВИТЬ</button>
      </form>
     
    </div>
  );
};

export default App;