import React from "react";

//bu context e dışarıdan erişilmek istenildiği için değişkene atılıyor.
//içeride iki tane değişken var, birisi status diğeri login
//login içerisinde method olacak ondan böyle tanımlandı.
const authContext = React.createContext({ status: null, login: () => {} });

//export default olarak dışarı erişimi açtım
export default authContext;
