setInterval(()=>{
    let date=new Date()
    let hour=document.querySelector("#hour")
    hour.innerHTML= date.getHours()
    let minutes=document.querySelector("#minutes")
    minutes.innerHTML=date.getMinutes()
    let seconds=document.querySelector("#seconds")
    seconds.innerHTML=date.getSeconds()
    
} )
