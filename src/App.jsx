import { useState } from "react";
import "./App.css";
import AuthContext from "./context/auth-context";
import Auth from "./Auth";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    console.log("Methodu tetikledim.");
    //console.log(authStatus);
    if (authStatus == false) {
      //Eğer giriş yapmamışsa true a çek
      setAuthStatus(true);
    } else {
      //Eğer giriş yapmış ise false çek (logout)
      setAuthStatus(false);
    }
  };
  return (
    //Ana komponent olan index.jsx de <React.StrictMode> arasında <App /> bulunmaktadır.
    //Bu durum da ana index, alt kırılımı App demektir.
    //Ben yarattığım AuthContext i App üzerinde tanımlamasını yaptım.
    //Eğer ki index i de kapsasın istiyorsam index.jsx de yapmam ve orada Provider in içerisinde App ı almam gerekliydi.
    //Ama App zaten burası ve üst bir kırılımı yok ondan ötürü direk App.jsx de yarattığım AuthContext ile işlem yapıyorum.
    //App.jsx de Auth componentini kapsıyor.

    //AuthContext de de tanımlamada createContext ile tanımladığımızdan Provider (kapsayıcı) alabiliyoruz
    //Context de paylaşacağım şeyleri value olarak geçecez. Zaten Context de bunları tanımlamıştık, bir nevi props gibi
    //props mantığından farkı ast üst durumu olmaksızın 1. formdan 8. forma veri taşıma durumudur. bunu set edip get edilebilir şekle getiriyor.
    //C# daki ViewData ya atıp veya Session a atıp kısacası sabit bir veriye atıp istenilen yerden çekilme durumu gibi.
    //Kısacası data taşımaya gerek yok.
    //status value sını authStatus olarak veriyoruz, userState ile değer değişikliği yapılacaktır. default false
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      {/* Auth,  AuthContext in kapsayıcısının içerisinde olduğu için AUTHCONTEXT in her değerine erişebiliyor. 
      Başka bir providera başka bir komponent yazılsa o provider da tanımlanan herşeye o komponent erişirdi.
      Örneğin DenemeContext.Provider da denizhan diye bir value tanımlansa, Auth ona erişemez ama o Denemenin içerisindeki komponentler erişebilir.
      Yapılacak olan Context TÜM UYGULAMADA geçerli olsun, her bir yerde farklı tanımlamayayım, ana context olsun sonrasında alt contextler olsun
      ama ana yapı context imde bir değer tanımlansın hepsi erişsin deniliyorsa index.jsx de tanımlanması yapılıp App üzerine yazılması lazımdır. */}
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
