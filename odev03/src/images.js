const images = [
    {src:'public/img/köpek.jpg'}, // 0.index
    {src:'public/img/köpek.jpg'}, // 1.index
    {src:'public/img/kedi.jpg'} // 2.index
]


let index;
let countofimages = images.length; // 3
let trycount; // kedi bulmak için kaç karta tıklandı. 

newGame(); // oyunu başlatacak fonksiyon(açılışta direkt bu fonksiyon devreye girecek.)

export function newGame(){ // Oyunu başlatmak için çağırılacak fonksiyon.
    document.getElementById('img-0').setAttribute('src','public/img/red.jpg'); // Başlangıçta kırmızı bir kart görünecek.    
    document.getElementById('img-1').setAttribute('src','public/img/red.jpg'); // Başlangıçta kırmızı bir kart görünecek.
    document.getElementById('img-2').setAttribute('src','public/img/red.jpg'); // Başlangıçta kırmızı bir kart görünecek.
    trycount=0; // başlangıçta hiç karta tıklanmadı.
}

export function Game(img){  // kartlardan herhangi birine tıklandığında çalışacak fonksiyon
    // rastgele bir index değeri üretilecek (0,1 veya 2 değerlerinden biri.)
    index = Math.floor(Math.random()*countofimages);
   
    var imgid = img.id; // tıklanan resmin id özelliğini bir değişkene atadım.
   
    document.getElementById(imgid).setAttribute('src',images[index].src); // tıklanan resmi id'si aracılığıyla bulup,
    // src özelliğine rastgele bir resim verdim(0,1 ve 2 index'lerinden biri).
   
    trycount++;   
   
    if((images[index].src==='public/img/kedi.jpg')){ // tıklanan kart , kedi resmine denk geldiyse
      document.getElementById('bilgi').appendChild(document.createTextNode("Tebrikler kazandınız!"));
    }
    else if(trycount==2){
        document.getElementById('bilgi').appendChild(document.createTextNode("Kaybettiniz"));
    }
}



