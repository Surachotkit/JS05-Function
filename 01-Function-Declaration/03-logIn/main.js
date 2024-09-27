let user = prompt("user")
let password = prompt("password")
function login(username,password){
   
    if(username == "admin" && password == "P@ssw0rd"){
        console.log("login สำเร็จ");
    
    }else{
        console.log("ไม่สำเร็จ");
    }
}

login(user,password)
