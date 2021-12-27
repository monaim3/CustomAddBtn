const user=['Monaim', 'Mukul', 'Syber']
const person={
    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imgworlds.com%2Flanguage%2Fen%2Fnewspress%2Fimg-worlds-unveils-newest-theme-park-img-worlds-of-legends%2F&psig=AOvVaw2KGM34-7l_h1avhkcrxYT7&ust=1640671719843000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiR6cqog_UCFQAAAAAdAAAAABAD'
}
let innerDiv=document.querySelector('.innerDiv');
let Add=document.querySelector('.add');
let btn=document.querySelector('.btn')
let profile=document.querySelector('profile')
const userData=()=>{
    user.reverse()
    user.map((element)=>{
          innerDiv.insertAdjacentHTML('afterbegin',` <button class="btn"><span>${element}</span></button>`) 
    }
    )
}
Add.addEventListener('click',()=>{
  let getName=prompt('Enter your name');
  if(getName!== null && !user.includes(getName)){
      user.push(getName)
      innerDiv.insertAdjacentHTML('afterbegin',` <button class="btn"><span>${getName}</span></button>`) ;
    
  }
  else{
      alert('User alrady exits')
  }
  
})
profile.addEventListener('click',()=>{
    const edituser=prompt('edit your name');
    if(edituser==user){
       user.push(edituser);
    }else{
        alert('not found')
    }
})
userData()