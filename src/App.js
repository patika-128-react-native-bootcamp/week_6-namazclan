import React from 'react';
import Navigation from './Navigation/Navigation';


/**
 * Selamlar. Bu ödevde sizden Marvel API'nı kullanarak bir uygulama yapmanız isteniyor.
 * Uygulama içerisinde kullanıcı kahraman adına göre arama yapabilecek, Marvel çizgi romanlarının listesine
 * erişim sağlayabilecek ve ilgili çizgi romanda yer alan kahramanların listesini görebilecek.Kullanıcı eğer isterse
 * sevdiği çizgi romanı ya da kahramanı favorilerine alabilecek. Favoriye aldığı öğeyi uygulamaya geri girdiğinde de görebilecek.
 * Bu ister için AsyncStorage paketini kullanabilirsiniz. Uygulama içinde gece gündüz modu ve dil desteği de isteniyor. Bunun için
 * bir Ayarlar sayfası eklenebilir. Gece gündüz modunun default değerini telefonun ayarlarından tespit edilip belirlenmesi önemli bir ister.
 *
 * Marvel API: https://developer.marvel.com/
 * AsyncStorage: https://react-native-async-storage.github.io/async-storage/docs/install/
 *
 * ## Dil desteği için opsiyonel ##
 * React i18next: https://react.i18next.com/
 *
 * Başarılar..

 https://gateway.marvel.com/v1/public/comics?ts=1&apikey=2e7bc198c2ffd428e6488666919b4f5d&hash=65fa42d716811d381f005b9d3b924d0b
 */

export default function App() {
  return (
   <Navigation />
  );
}
