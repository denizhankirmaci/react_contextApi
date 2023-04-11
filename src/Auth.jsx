import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  //Üst taraftaki provider değerlerine erişmek için (bununki AuthContext) yukarıda tanımlaması yapılır.
  //useContext durumunda tanım yapılan Context adı verilir ve değerlere erişilebilir.
  //Eğer ki context de tanımladığım değer ile süslü parantezler ile aynı değer adını çağırırsam direk o değerin value su gelir.
  //kompleContext olarak çağırdığımda kaç değer tanımadıysam onlar gelir. aradaki fark bu.
  const { status } = useContext(AuthContext);
  const auth = useContext(AuthContext);
  console.log(status);
  //console.log(auth);
  //console.log(auth.status);
  return (
    <div>
      <h1>Giriş Yaptın mı ?</h1>
      {status ? <p>Ohoo çoktan yaptım.</p> : <p>Hayır daha yapmadım.</p>}
      {/* AuthContext deki value larda login methoduna erişim sağlayacağım. login methodu loginAuth u tetiklediği için button onClick de loginAuth u tetikliyor olacağım. */}
      <button onClick={auth.login}>
        {auth.status ? "Çıkış Yap" : "Giriş Yap"}
      </button>
    </div>
  );
}

export default Auth;
