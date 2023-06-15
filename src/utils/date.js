export function getDateDay_UTIL(timestamp, isFull = true) {
   if (!timestamp) {
       return
   }

   const date = new Date(timestamp);

   if (!isFull) {
       return ("0" + date.getDate()).slice(-2) + '.'
       + ("0"+(date.getMonth()+1)).slice(-2) + "."    
       + date.getFullYear()
   }
   
   return ("0" + date.getDate()).slice(-2) + "." 
       + ("0"+(date.getMonth()+1)).slice(-2) + "." 
       + date.getFullYear() 
}