// const , let 

var sayi = 1;
sayi = 2;
console.log(sayi);

const sabitSayi = 12; // CONST SABİT TANIMLAR JS'DE
console.log(sabitSayi);

let yeniDegisken = "Yeni değişken";

// Array dizi yazdırma map fonksiyonu ile 
// map array dizilerdeki verileri bastırmaya yarar.
const arr = [1,2,3,4,5,6,7];
arr.map(function(x){

console.log(x);

});

arr.map(x => console.log(x));

arr.map((x) => {
    console.log(x)
})

//some: belirli koşulda tüm elemanların uyumlu olup olmadığı belirlenir.
const result = arr.some((number) => {return number >5});
console.log(result);

// every : Hepsi büyük olmalı 
const result1 = arr.every((number) => {
    return number >5; // hepsi 5 den büyükmü
})
console.log(result1);

//find index: Şu indexteni bul getir
const result2 = arr.findIndex((number) =>{
    return number ==3; // 3 . indexi bul getir
})
console.log(result2);


// filter: Filtreler örnek 3 ten büyük 5 ten küçük gibi
const result3 = arr.filter(number => 3 );
console.log(result3);

// rest objeye ihtiyaç olmadan işlemi nesne türetmeksizin yazdırır.
 // spread  işlemlerinde hepsini birlikte ekler veya yazdırır.

const object = {
    a:1,
    b:2,
    c:3,
    d:4
};
const {a,b,c,d} = object; // rest işlemi nesne(obje) oluşurmadan nesne çalışır.
console.log(a,b);



const object2 = {
    e:5,
    ...object    //spread işlemi diğer objedeler buraya gelir
}
console.log(object2);

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [...arr,8,9,10]; // spread işlemi
console.log(...arr); // spread işlemi tüm diziyi yazdırır.
console.log(arr2);

//Promise hatalı mı hatasız mı işlem kontrolü yapar

new Promise(function(resolve,reject){
    const islem = 1;
    if(islem){
        resolve();
    }
    else{
        reject();
    }
})
.then(()=>{
        console.log("İşlem tamam")
})
.catch(()=> console.log("hata var"))

//2.yazım şekli
const islemKontrol= new Promise(function(resolve,reject){
    const islem = 1;
    if(islem){
        resolve();
    }
    else{
        reject();
    }
})
islemKontrol.then(()=>{
        console.log("İşlem tamam")
})
.catch(()=> console.log("hata var"))

//3.yazım şekli
islemKontrol.then((e)=>{
    console.log(e);
}).catch(()=> console.log("hata var"))

//Async & Await : break komutu gibi orda dur bekle işlem gerçekleşince çalış

const axios = require("axios ");
 getData =async () => {
   await axios.get("https.//xwmd.com")
    .then((res)=>{
        console.log(res);
    })
    .catch((e)=> console.log(e))
};

getShow=async ()=>{
    await getData();
    console.log("Verileri çekmeden burası asla gösterme")
};

//exports module başka js dosyalarına erişim
const result = require('./export'); // diğer js'ye eriş
console.log(result.name);

const{hesapla,cikar}=require('./export');
console.log(hesapla(5,20));
console.log(cikar(5,3));


