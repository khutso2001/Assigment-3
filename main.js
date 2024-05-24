// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ
// უნდა დააბრუნოს 2 - ელემენტიანი მასივი,
// სადაც პირველი ელემენტია პირველი და
// მეორე პარამეტრის ჯამი, ხოლო მეორე
// ელემენტი - მესამე ელემენტიდან
// დაწყებული ყველა დანარჩენის ნამრავლი

function fun(...array) {
  if (array.length < 2) {
    console.log("რიცხვების რაოდენობა უნდა იყოს 2-ზე მეტი");
  }
  const [firstNum, secondNum, ...rest] = array; //მოვახდინე დესტრუქტურიზაცია და გამოვყავი ის პირველი ორი რიცხვი რომელიც უნდა შევკიბო

  const sum = firstNum + secondNum;
  let multiplied = 1;
  for (let i = 0; i < rest.length; i++) {
    multiplied *= rest[i];
  }
  return [sum, multiplied];
}
console.log(fun(1, 8, 2, 7));

// დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს cityს. გამოიყენე destructuring-ი. თუ ასეთი
// ველი არ არსებობს უნდა დაბრუნდეს
// undefined

const user = {
  name: "misho",
  lastname: "khutsishvili",
  banks: [
    {
      address: {
        city: "tbilisi",
      },
    },
    {
      address: {
        city: "batumi",
      },
    },
    {
      address: {
        city: "qutaisi",
      },
    },
  ],
};

function returnCity({ banks: [{ address: { city } = {} }] }) {
  //city= Tbilisi თუ მე წავშლი address სადაც არის ქალაქი თბილისი  მაშინ კონსოლში გამოვა undefined
  return city;
}
console.log(returnCity(user));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ნებისმიერ ობიექტს და
// დააბრუნებს იგივე მნიშვნელობების მქონე
// ახალ (განსხვავებულ) ობიექტს
// გაითვალისწინე, რომ თუ ობიექტში კიდევ
// სხვა ობიექტებია იმათი ასლებიც უნდა
// შეიქმნას
// გამოიყენეთ (...) ოპერატორი

const obj = {
  name: "misho",
  lastname: "Khutsishvili",
  age: 23,
  private: {
    phone: 551135697,
    address: "tbilisi, tsabadze street",
  },
};

function person(obj) {
  return (newObj = { ...obj, private: { ...obj.private } }); //მოვახდინე დესტრუქტურიზაცია და დავაბრუნე იგივე მნიშვნელობების ახალი ობიექტი
}
console.log(person(obj)); //ახალი ობიექტი

obj.name = "OTHER LASTNAME "; //ძველ ობიექტში შევცვალე name-ის მნიშვნელობა რომ დამეზუსტებინა იყო ეს სხვა განსხვავებული ობიექტი და შეიცვლეობოდა მხოლოდ ერთში თუ არა.
console.log(obj);
