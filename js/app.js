
const email = document.getElementById("email")
window.onload = ()=>{
email.focus()
}

const supabaseUrl = "https://wblyxzywocemqvgoxypt.supabase.co";
const supabaseKey = "sb_publishable_qGaQheSI61rCBDYmszf0Lg_pTVTQO_B";
const client = supabase.createClient(supabaseUrl, supabaseKey);

async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();


  if (!email || !password) {
    document.getElementById("emailHelp").innerText = "من فضلك اكتب الإيميل والباسورد";
    document.getElementById("emailHelp").style.display = "block"
    return;
  }

  const { data, error } = await client.auth.signUp({
    email,
    password
  });
 

  if (error) {
    document.getElementById("emailHelp").innerText = error.message;
     document.getElementById("emailHelp").style.display = "block"
  } else {
    document.getElementById("emailHelp").innerText = "تم إنشاء الحساب ✔";
     document.getElementById("emailHelp").style.display = "block"

    setTimeout(() => {
      window.location.replace("../indexs/login.html")
    }, 5000);
  }
}



async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("emailHelp").innerText = "من فضلك اكتب الإيميل والباسورد";
     document.getElementById("emailHelp").style.display = "block"
    return;
  }
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    document.getElementById("emailHelp").innerText = "الإيميل أو كلمة المرور غير صحيحة";
     document.getElementById("emailHelp").style.display = "block"
  } else {
    document.getElementById("emailHelp").innerText = "تم تسجيل الدخول بنجاح ✔";
   document.getElementById("emailHelp").style.display = "block"


       setTimeout(()=>{
        window.location.replace("../index.html")
       } , 5000)
  }
}

window.onload = async () => {
    let data_user = document.getElementById("data_user");
  const { data: { session } } = await client.auth.getSession();
  if (session) {
    data_user.textContent = session.user.email;
  }else {
    
  }
};

async function resetPassword() {
  const email = document.getElementById("email").value.trim();

  if (!email) {
    document.getElementById("emailHelp").innerText = "اكتب الإيميل";
     document.getElementById("emailHelp").style.display = "block"
    return;
  }

  const { error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo: "http://127.0.0.1:5500/indexs/reset.html"
  
  });

  if (error) {
    document.getElementById("emailHelp").innerText = error.message;
     document.getElementById("emailHelp").style.display = "block"
  } else {
    document.getElementById("emailHelp").innerText = "تم إرسال رابط تغيير كلمة المرور ✔";
     document.getElementById("emailHelp").style.display = "block"
  }
}


async function updatePassword() {
  const password = document.getElementById("newPassword").value.trim();

  if (!password) {
    document.getElementById("emailHelp").innerText = "اكتب الباسورد";
      document.getElementById("emailHelp").style.display = "block"
    return;
  }

  const { error } = await client.auth.updateUser({
    password
  });

  if (error) {
    document.getElementById("emailHelp").innerText = error.message;
      document.getElementById("emailHelp").style.display = "block"
  } else {
    document.getElementById("emailHelp").innerText = "تم تغيير كلمة المرور ✔";
      document.getElementById("emailHelp").style.display = "block"
           setTimeout(()=>{
        window.location.replace("./login.html")
       } , 5000)
  }
}


