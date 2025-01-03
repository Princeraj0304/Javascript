function sub(){
   let base= parseInt(document.getElementById('base').value) 
   let height= parseInt(document.getElementById('height').value) 

   let res=0.5*(base*height)

   document.getElementById('head').innerHTML=res
   
   return false

}