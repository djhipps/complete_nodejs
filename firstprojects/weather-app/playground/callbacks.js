var getUser = (id, callback) =>{
   var user = {
      id:id,
      name: 'Damian'
   };

   setTimeout(() => {
     callback(user);
   }, 3000);
   callback(user);
};

getUser(21, (userdata) => {
   console.log(userdata);
});
