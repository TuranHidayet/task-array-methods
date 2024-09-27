// tek ve menfi ededlerin cemi:
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

// tek ve menfi ededleri silinmesi:
// filter metodunun ozelliyi odur ki array uzerinde gezir ve istediyim sertlere uygun mene yeni bir array verir.
const numberClass = [1, 2, -3, 3, -4, 8, -12, 14, -7, 9];
const answer = numberClass.filter((nums) => nums > 0 && nums % 2 == 0);
console.log("sadece cut ededler:", answer);

// cemi 17 e beraber olan ededlerin indexi:
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

// en boyuk ve en kicik ededleri tapmaq
// bunun ucun bir nece ferqli yontem var Math.max ve ya reduce metodlarindan istifade ede bilerik.
// Math.max metodu ile en boyuk deyer ve en kicik deyer:
let price = [1, 2, 10, 3, -4, 8, 7, -12, -7, 9];
let maxPrice = Math.max(...price);
let minPrice = Math.min(...price);
console.log("en boyuk deyer:", maxPrice, " ", "en kicik deyer:", minPrice);

// reduce metodu ile en boyuk deyer ve en kicik deyer:
const priceNumber = [1, 2, 23, 10, 3, -4, 8, 7, -7, 9];
const maxPriceNumber = priceNumber.reduce(
  (max, current) => (current > max ? current : max),
  priceNumber[0]
);
console.log("max deyer: ", maxPriceNumber);


