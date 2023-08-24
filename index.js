/*Bu görevleri yaparken çıktıların doğru çalıştığını kontrol etmeniz için console.log'u sıklıkla kullanmanızı tavsiye ediyoruz.*/

///////////////Menu Elemanları ///////////////////
const cay = { isim: "Çay", fiyat: 4, kategori: "İçecekler" };
const serpmeKahvalti = {
  isim: "Serpme Kahvaltı",
  fiyat: 16,
  kategori: "Kahvaltı",
};

/* Görev 1a: Nesneler döndüren bir fonksiyon yazın
	Aşağıdaki MenuElemaniOlustur fonksiyonunu, yukarıda gördüğünüz cay ve serpmeKahvalti (isim, fiyat, kategori) nesnelerini oluşturacak şekilde yazın. 
	Fonksiyonun özellikleri:
	1. Nesne(object) oluşturmak için gerekli parametleri alacak
	2. Alınan değerleri kullanarak oluşturulan nesne(object) döndürülecek(return)
	
	Örnek MenuElemaniOlustur('Cheeseburger', 8, 'Burgerler') şunu döndürmeli: {isim: 'Cheeseburger', fiyat: 8, kategori: 'Burgerler'}
*/

function MenuElemaniOlustur(name, price, category) {
  const item = {
    isim: name,
    fiyat: price,
    kategori: category,
  };
  return item;
}

/*  Görev 1b (otomatik test yok): 
	Fonksiyonu çağırın!
	Aşağıdakileri uygulayarak MenuElemaniOlustur fonksiyonunuzu test edin:
	1. MenuElemaniOlustur ile nesne oluşturmak için parametreleri girerek fonksiyonu çağırın (menu elemanları)
	2. Kendi seçtiğiniz isim,fiyat ve kategorileri kullanarak en az 3 menü elemanı oluşturun 
	3. Tüm döndürülen sonuçları konsolda gözlemleyin (console.log)
	
	Örnek: MenuElemaniOlustur("Karışık Pizza",5,"Pizzalar") şunu döndürür: {isim:"Karışık Pizza",fiyat:5,kategori:"Pizzalar"}
*/
console.log("G1b1", MenuElemaniOlustur("Karışık Pizza", 50, "Pizzalar"));
console.log("G1b2", MenuElemaniOlustur("Omlet", 20, "Kahvaltı"));
console.log("G1b3", MenuElemaniOlustur("Ayran", 5, "İçecekler"));
/* Görev 2: 
	Özel bir öğle yemeği yiyorsun! Öğretmen ve öğrencilere %25, diğer kişilere %10 indirim var. Aşağıdaki burger nesnesine, indirimi fiyatı otomatik olarak hesaplayan bir metot ekleyin.
	
	burger nesnesine aşağıdakileri uygulayın:
	1. burger nesnesine adı indirim olan bir metot ekleyin
	2. Argüman olarak indirim metodu parametre olarak bir string kabul edecek ve bu string "öğretmen", "öğrenci", ya da "diğer" değerine sahip olacak.
	3. Bu stringe göre gerekli indirimli fiyat döndürülecek
	4. String argümanına, 'öğretmen', 'öğrenci', ya da 'diğer' değerlerinden birini kullanarak fonksiyonunuzu çağırın.
	
	Örnek: burger.indirim("öğretmen") 13.5 döndürmeli ve burger.indirim("diğer") 16.2 döndürmeli
*/

const burger = {
  isim: "Burger",
  fiyat: 18,
  kategori: "Öğle Yemeği",
  indirim: function (person) {
    let indirimliFiyat = this.fiyat;
    if (person == "öğrenci") {
      indirimliFiyat = this.fiyat * 0.75;
    } else if (person == "öğretmen") {
      indirimliFiyat = this.fiyat * 0.75;
    } else {
      indirimliFiyat = this.fiyat * 0.9;
    }
    return indirimliFiyat;
  },
};

///////////////Değerlendirmeler (MVP)///////////////////
const degerlendirmeler = [
  {
    isim: "Nalan",
    puan: 5,
    geribildirim: "Mükemmel atmosfer ve mükemmel vegan seçenekleri!",
  },
  {
    isim: "Kuddusi",
    puan: 3,
    geribildirim:
      "Benim zevkime göre biraz fazla yenilikçi, burger iyi ama fiyatı yüksek",
  },
  {
    isim: "Kamuran",
    puan: 4,
    geribildirim: "eğlenceli bilgiler ve havalı hisler",
  },
  {
    isim: "Elif",
    puan: 4.5,
    geribildirim:
      "Evimden pek çıkmıyorum ama çıktığımda sadece buraya geliyorum. Şiddetle tavsiye ederim.",
  },
  {
    isim: "Pınar",
    puan: 3,
    geribildirim:
      "atıştırmalıklar harika ve gün içinde çalışmak için güzel bir cafe alanı.",
  },
  {
    isim: "Ahmet",
    puan: 2,
    geribildirim:
      "Bu mekan beni fazla etkilemedi. Menüde özel bir şey yok ve çok pahalı. Atmosferi de ben beğenmedim ama başkaları beğenebilir.",
  },
  {
    isim: "Latife",
    puan: 4,
    geribildirim:
      "Kesinlikle karaoke Cumalarını seviyorum! Yemek ve içki çeşitleri iyi.",
  },
  { isim: "Reyna", puan: 3.5, geribildirim: "" },
];

/*  Görev 3 (ototest yok):  
	Yukarıdaki degerlendirmeler dizisini(array) kullanarak:
	1. Sadece Ahmet'in geribildirimini konsolda görüntüleyin - fonksiyona gerek yok
*/
for (const degerlendirme of degerlendirmeler) {
  if (degerlendirme.isim === "Ahmet") {
    console.log("Görev 3: " + degerlendirme.geribildirim);
  }
}
/*  Görev 4 (ototest yok):  
	Reyna'nın geribildirimi girilmemiş! Aşağıdakileri uygulayın: (fonksiyona gerek yok) 
	1. Bu geribildirimi Reyna'nın değerlendirmesine ekleyin - "bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım"
	2. degerlendirmeler dizisini konsolda görüntüleyerek çalışmanızı kontrol edin
*/
for (const degerlendirme of degerlendirmeler) {
  if (degerlendirme.isim === "Reyna") {
    degerlendirme.geribildirim =
      "bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım";
    console.log("Görev 4: " + degerlendirme.geribildirim);
  }
}
/*  Görev 5: 
	isim, puan, geribildirim'i içeren bir değerlendirme nesnesi oluşturup, yeni değerlendirmeyi mevcut dizinin(array) sonuna ekleyip sonuç dizisini döndüren bir fonksiyon tanımlayın. 
	
	DegerlendirmeEkle fonksiyonunu kullanarak aşağıdakileri uygulayın:
	1. Verilen degerlendirmeler dizisini fonksiyonun İLK parametresi olarak alacak
	2. Şu parametreleri alacak: isim, puan, and geribildirim; bunları İKİNCİ, ÜÇÜNCÜ ve DÖRDÜNCÜ parametre olarak alacak
	3. Fonksiyon yeni bir nesne yaratacak ve dizinin sonuna bu nesneyi ekleyecek.
	🌟 ÖRNEK: DegerlendirmeEkle(degerlendirmeler, 'Hurşut', 2, 'Boktan yemekler!') dizinin sonuna şunu eklemeli: {isim: 'Hurşut', puan: 2, geribildirim: 'Boktan yemekler!'}
	4. Güncellenmiş diziyi döndürecek
*/

function DegerlendirmeEkle(arr, name, score, feedback) {
  const newObj = {
    isim: name,
    puan: score,
    geribildirim: feedback,
  };
  arr.push(newObj);
  return arr;
}

/*  Görev 6: 
	Dizideki değerlendirmelerin anahtarına(key,index) bağlı olarak bir değerlendirme döndüren bir fonksiyon yazın
	
	Aşağıdaki AnahtardanDegerlendirmeAl fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Argüman olarak bir diziyi ilk parametresi olarak alacak
	2. Dizinin kullanılmak istenen indeksini ikinci parametre olarak alacak
	3. Fonksiyon şu stringi döndürmeli: "{isim} isimli kişi {puan} puan verdi ve şunları yazdı: {geribildirim}"
	Örnek: AnahtardanDegerlendirmeAl(degerlendirmeler,0) şunu döndürmeli: "Nalan isimli kişi 5 puan verdi ve şunları yazdı: Mükemmel atmosfer ve mükemmel vegan seçenekleri!"
*/

function AnahtardanDegerlendirmeAl(arr, index) {
  const str = `${arr[index].isim} isimli kişi ${arr[index].puan} puan verdi ve şunları yazdı: ${arr[index].geribildirim}`;
  return str;
}

/*  Görev 7:  
	Diziden en son değerlendirmeyi döndüren adı `SonDegerlendirmeyiAl` olan bir fonksiyon yazın 
	
	SonDegerlendirmeyiAl fonksiyonuna aşağıdakileri uygulayın:
	1. Parametre olarak bir dizi alacak, degerlendirmeler dizisini alarak çağırılacak
	2. Dizinin son elemanını şu şekilde döndürecek: "{isim} isimli kişi {puan} puan verdi ve şunları yazdı: {geribildirim}"
	3. Argüman olarak degerlendirmeler dizisini kullanarak fonksiyonu çağırın
	
	Örnek: SonDegerlendirmeyiAl(degerlendirmeler) şunu döndürmeli: "Reyna isimli kişi 3.5 puan verdi ve şunları yazdı: bu mekan bir harika dostum, yine de garsonun gülümsememesinden puan kırdım".
	Not: Eğer 4. görevi başarıyla yaptıysanız kişinin geribildirimi boş görünmemeli
*/

function SonDegerlendirmeyiAl(arr) {
  const lastEl = arr[arr.length - 1];
  const { isim, puan, geribildirim } = lastEl;
  return `${isim} isimli kişi ${puan} puan verdi ve şunları yazdı: ${geribildirim}`;
}

/////////////// BONUS  GÖRVLER////////////////////

/**  BONUS 1:  
	PuanaGoreDegerlendirmeAl fonksiyonuna aşağıdakileri uygulayın:
	1. Tüm değerlendirmeleri içeren diziyi alacak
	2. Bir puan alacak
	3. Girilen puan aralığında bulunan tüm değerlendirmeleri döndürecek 
	
	Örnek: PuanaGoreDegerlendirmeAl(degerlendirmeler, 4) 4 ile 4.9 puan aralığındaki tüm değerlendirmeleri döndürecek :
	[
    {isim: "Kamuran", puan: 4, geribildirim:"eğlenceli bilgiler ve havalı hisler},
    {isim: "Elif", puan: 4.5, geribildirim:"Evimden pek çıkmıyorum ama çıktığımda sadece buraya geliyorum. Şiddetle tavsiye ederim."},
    {isim:"Latife", puan: 4, geribildirim: "Kesinlikle karaoke Cumalarını seviyorum! Yemek ve içki çeşitleri iyi."}
	]

*/
function PuanaGoreDegerlendirmeAl(degerlendirmeler2, point) {
  const results = [];

  for (const deger of degerlendirmeler2) {
    if (deger.puan >= point && deger.puan < point + 1) {
      results.push(deger);
    }
  }

  return results;
}

/*  BONUS 2:    
	UzunDegerlendirmeleriAl fonksiyonuna aşağıdakileri uygulayın:
	1. Tüm değerlendirmeleri içeren diziyi alacak
	2. Geribildiriminde 15'den fazla kelime içeren tüm nesneleri bir dizi olarak döndürecek
	
*/

function UzunDegerlendirmeleriAl(arr) {
  let newArr = [];
  for (const el of arr) {
    const geribildirim = el.geribildirim;
    const kelimeler = geribildirim.split(" ").length;

    if (kelimeler > 15) {
      newArr.push(el);
    }
  }
  return newArr;
}
console.log("Bonus2", UzunDegerlendirmeleriAl(degerlendirmeler));
/*  BONUS 3:  
	Bu ek görevde degerlendirmeler dizisi kullanılmayacak!  Bu görevde kendi nesnenizi yaratmanız gerekmektedir.
	
	arabaYapici fonksiyonunu kullanarak aşağıdakileri uygulayın:
	1. Kilometre sayacı olarak kullanılacak (kaç kilometre yol gittiğini sayacak) bir değişkeni parametre olarak alacak
	2. Nesnenin içine kilometre sayacını artıracak bir sürüş metodu ekleyin
	3. Nesneyi döndürün
	4. Döndürülen nesnedeki kilometre sayacı şu özellikleri taşımalı:
	a. Sürüş metodu ne zaman, nerden çağırılırsa çağırılsın mutlaka parametre olarak bir mesafe(km) alacak
	b. Aynı zamanda sürüş metodu parametre olarak gönderilen değeri, kilometre sayacına ekleyecek
	c. Sonra sürüş metodu güncellenmiş kilometre sayacının değerini döndürecek
	
	Örnek: Adı araba1 olan ve kilometre sayacı 10 olan bir nesne oluşturduk diyelim. 
	Şu şekilde metotu çağıralım araba1.surus(100)
	Bu 110 döndürmelidir çünkü başlangıç kilometre sayacını 10 olarak tanımladık ve 100 km arabayı sürdük.
*/

function arabaYapici(sayac) {
  const car = {
    marka: "A",
    modal: "B",
    kilometreSayaci: sayac,
    surus: function (distance) {
      this.kilometreSayaci += distance;
      return this.kilometreSayaci;
    },
  };

  return car;
}

const car1 = new arabaYapici(0);
const car2 = new arabaYapici(100);

console.log("Bonus3 1", car1.surus(1));
console.log("Bonus3 2", car2.surus(1));

/*  Buradan aşağıdaki kodları değiştirmeyin lütfen */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  MenuElemaniOlustur,
  burger,
  DegerlendirmeEkle,
  AnahtardanDegerlendirmeAl,
  SonDegerlendirmeyiAl,
};
