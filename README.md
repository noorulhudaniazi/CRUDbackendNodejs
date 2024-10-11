<------------Creeating User------------>

http://localhost:2000/user/createuser

"{
 "fname": "Noor", 
 "lname": "Niazi", 
 "email": "niazi@gmail.com", 
 "contact": "03000000000", 
 "address": "garden town", 
 "city": "lahore", 
 "state": "Punjab" , 
 "zip": "54000", 
 "password": "123456", 
 "country": "Pakistan"
}"





<------------LogIn User------------>

http://localhost:2000/user/login
"{ 
   "contact": "03000000000",
   "password": "123456"
}" 


<------------Get Users------------>

http://localhost:2000/user/getusers



<------------Get Single User------------>

http://localhost:2000/user/getuser
http://localhost:2000/user/getuser

send Authentication Token In the header Section of the Request nname "auth_token"


<------------Delete user------------>

http://localhost:2000/user/deluser/:id




<------------Update user------------>


http://localhost:2000/user/updateuser



