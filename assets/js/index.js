// 1) tek ve menfi ededlerin cemi:
// arrayin icindeki menfi ve tek ededlerin cemini tapmaq ucun forEach ile arrayin uzerinde gezmek lazimdir
// sonra ise if ile shert verirem ki istediyim element 0 dan kicik olmali ve ededin 2e bolunmesinden alinan qaliq 0 a beraber olmalidir.
// sonra alinan neticeni toplamaq lazimdir.
let numbers = [1, 2, -3, 3, -4, 8, -12, -7, 9];
let result = 0;
function total(arr) {
  arr.forEach((element) => {
    if (element < 0 || element % 2 != 0) {
      result += element;
    }
  });

  return result;
}
console.log("tek ve menfi ededlerin cemi", total(numbers));

// 2) tek ve menfi ededleri silinmesi:
// filter metodunun ozelliyi odur ki array uzerinde gezir ve istediyim sertlere uygun mene yeni bir array verir.
const numberClass = [1, 2, -3, 3, -4, 8, -12, 14, -7, 9];
const answer = numberClass.filter((nums) => nums > 0 && nums % 2 == 0);
console.log("sadece cut ededler:", answer);

// 3) cemi 17 e beraber olan ededlerin indexi:
// verilen arrayda cemi 17 ye beraber olan ededleri tapmaq isteyirem. Bunun ucun arrayda olan butun elementleri bir biri ile toplamaliyam.
// bunu etmek ucun ise men ya hazir method(funksiyadan) yada iki donguden istifade etmeliyem.
// Niye ? cunku arrayda foreach ve, s kimi donguler bir defe elemenete cata bilir. Yeni dongu gedir dayanmir bir defe dovr edir.
// Her dongu eslinde bir defe dovr edir. butun arrayi. Demeli eyer men bir arrayda iki deyeri qarsilasdirmaq isteyirsense budurumda
// iki for istifade etmekdir.
let array = [1, 2, 10, 3, -4, 8, 7, -12, -7, 9];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] + array[j] == 17) {
      newArray.push(array[i], array[j]);
    }
  }
}
console.log("cemi 17 e beraber olan ededlerin indexi", newArray);

// 4) en boyuk ve en kicik ededleri tapmaq
// bunun ucun bir nece ferqli yontem var Math.max ve ya reduce metodlarindan istifade ede bilerik.
// Math.max metodu ile en boyuk deyer ve en kicik deyer:
let price = [1, 2, 10, 3, -4, 8, 7, -12, -7, 9];
let maxPrice = Math.max(...price);
let minPrice = Math.min(...price);
console.log("en boyuk deyer:", maxPrice, " ", "en kicik deyer:", minPrice);

// 4) reduce metodu ile en boyuk deyer ve en kicik deyer:
const priceNumber = [1, 2, 23, 10, 3, -4, 8, 7, -7, 9];
const maxPriceNumber = priceNumber.reduce(
  (max, current) => (current > max ? current : max),
  priceNumber[0]
);
console.log("max deyer: ", maxPriceNumber);

// 5) massivin orta qiymetini hesablamaq:
// bunu hesablamaq ucun arrayin daxilindeki ededlerin sayini for ile ftoplamaq,
// sonra ise arrayin daxilindeki edelerin sayina bolmek lazimdir.
const numbersOf = [1, 2, 23, 10, 3, -4, 8, 7, -7, 9];
let avarageNumber = 0;
for (let i = 0; i < numbersOf.length; i++) {
  avarageNumber += numbersOf[i];
}
let avarage = avarageNumber / numbersOf.length;
console.log("orta deyer:", avarage);

// 6) massivde tekrarlanan sozleri tapmaq:
// filter ile arrayin uzerinden gezerek indexOf ile indexi eyni olmayan deyerleri  tapiriq
const fruits = [
  "banana",
  "apple",
  "orange",
  "lemon",
  "banana",
  "grape",
  "apple",
];
function findSameFruits(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log(findSameFruits(fruits));

// 7) massivde cut ededleri tapmaq ve onlari yeni massivde saxlamaq:
// bunun  ucun filter metodu ile arrayin uzerinde gezerek arrayin deyerlerini 2 e bolerek qaligi 0 olanlari secirik.
const monthDays = [2, 6, 7, 5, 14, 23, 17, 13, 4, 28, 31, 21, 19, 10];
let evenDays = monthDays.filter((days) => days % 2 == 0);
console.log("cut ededler:", evenDays);

//  8) telebe obyekti yaradaraq telebenin melumatlarini ekranda gosterek:
//  bunun ucun obyekt yaradiriq ve ad yas mekteb kimi key'ler elave edirik,
//  loop ile uzerinde gezirik ve melumatlari ekranda gosteririk.
const students = [
  { fullName: "Arif", age: 24, section: "computer" },
  { fullName: "Murad", age: 22, section: "Math" },
  { fullName: "Ruslan", age: 20, section: "Geography" },
  { fullName: "Tural", age: 23, section: "History" },
];
for (let i = 0; i < students.length; i++){
  console.log(`Name: ${students[i].fullName}, Age: ${students[i].age}, Section: ${students[i].section}`);
}

// 9) massivdeki elementleri elifba sirasi ile siralamaq:
const cities = ["Baku", "Lankaran", "Quba", "Seki", "Zengilan", "Agdam", "Xacmaz", "Xizi", "Sumqayit", "Agsu"];
cities.sort();
console.log(cities);



