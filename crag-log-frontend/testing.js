const climbs = [
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque, aliquam ducimus veritatis ullam vitae nostrum consequatur quasi voluptas fugiat dolor asperiores rerum, rem possimus? Nulla voluptatum, dignissimos vitae libero modi corrupti eos error quas! Quia, minus sint. Rem, exercitationem.",
    _id: "5d398d55eea8f206f3361814",
    name: "Fido-dido",
    grade: "5a",
    date: "25-05-2019",
    location: "Chwałków",
    crag: "Kantyna",
    type: "Top-rope",
    rating: 3,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque, aliquam ducimus veritatis ullam vitae nostrum consequatur quasi voluptas fugiat dolor asperiores rerum, rem possimus? Nulla voluptatum, dignissimos vitae libero modi corrupti eos error quas! Quia, minus sint. Rem, exercitationem.",
    _id: "5d398d68eea8f206f3361815",
    name: "Kąpiel wzbroniona",
    grade: "5a",
    date: "25-05-2019",
    location: "Chwałków",
    crag: "Kantyna",
    type: "Lead",
    rating: 4,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque, aliquam ducimus veritatis ullam vitae nostrum consequatur quasi voluptas fugiat dolor asperiores rerum, rem possimus? Nulla voluptatum, dignissimos vitae libero modi corrupti eos error quas! Quia, minus sint. Rem, exercitationem.",
    _id: "5d398d93eea8f206f3361816",
    name: "Akcja pod arsenałem",
    grade: "6a+",
    date: "27-05-2019",
    location: "Chwałków",
    crag: "Kantyna",
    type: "Lead",
    rating: 2,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque, aliquam ducimus veritatis ullam vitae nostrum consequatur quasi voluptas fugiat dolor asperiores rerum, rem possimus? Nulla voluptatum, dignissimos vitae libero modi corrupti eos error quas! Quia, minus sint. Rem, exercitationem.",
    _id: "5d398db2eea8f206f3361817",
    name: "Chińska dzielnica",
    grade: "6b",
    date: "29-05-2019",
    location: "Chwałków",
    crag: "Kantyna",
    type: "Lead",
    rating: 4,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem itaque, aliquam ducimus veritatis ullam vitae nostrum consequatur quasi voluptas fugiat dolor asperiores rerum, rem possimus? Nulla voluptatum, dignissimos vitae libero modi corrupti eos error quas! Quia, minus sint. Rem, exercitationem.",
    _id: "5d398e12eea8f206f3361818",
    name: "Filar",
    grade: "4b",
    date: "05-06-2019",
    location: "Lądek",
    crag: "Trojan",
    type: "Lead",
    rating: 4,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates atque laboriosam dolore! Ullam, blanditiis sunt provident quasi, assumenda eos eum velit aut quidem enim facilis optio. Odit, nemo ipsa.",
    _id: "5d39b9b2ee52b509a25f27a2",
    name: "Lewa Piątka",
    grade: "5b",
    date: "2019-06-08",
    location: "Świebodzice",
    crag: "Pełcznica",
    type: "Lead",
    rating: 5,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates atque laboriosam dolore! Ullam, blanditiis sunt provident quasi, assumenda eos eum velit aut quidem enim facilis optio. Odit, nemo ipsa.",
    _id: "5d39b9d9ee52b509a25f27a3",
    name: "Schody",
    grade: "4c",
    date: "2019-06-08",
    location: "Świebodzice",
    crag: "Pełcznica",
    type: "Top rope",
    rating: 3,
    userID: "5d3465b847573901abad2812",
    __v: 0
  },
  {
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates atque laboriosam dolore! Ullam, blanditiis sunt provident quasi, assumenda eos eum velit aut quidem enim facilis optio. Odit, nemo ipsa.",
    _id: "5d39ba38ee52b509a25f27a4",
    name: "Zacięcie z okapem",
    grade: "5c",
    date: "2019-06-09",
    location: "Lądek",
    crag: "Trojan",
    type: "Top rope",
    rating: 1,
    userID: "5d3465b847573901abad2812",
    __v: 0
  }
];

const grades = [
  "4a",
  "4b",
  "4c",
  "5a",
  "5b",
  "5c",
  "6a",
  "6a+",
  "6b",
  "6b+",
  "6c",
  "6c+",
  "7a",
  "7a+",
  "7b",
  "7b+",
  "7c",
  "7c+",
  "8a",
  "8a+",
  "8b",
  "8b+",
  "8c",
  "8c+",
  "9a",
  "9a+",
  "9b",
  "9b+",
  "9c",
  "9c+"
];

let gradesObject = grades.reduce((o, key) => ({ ...o, [key]: null }), {});

let gradesCount = [
  { name: "4a", value: null },
  { name: "4b", value: null },
  { name: "4c", value: null },
  { name: "5a", value: null },
  { name: "5b", value: null },
  { name: "5c", value: null },
  { name: "6a", value: null },
  { name: "6a+", value: null },
  { name: "6b", value: null },
  { name: "6b+", value: null },
  { name: "6c", value: null },
  { name: "6c+", value: null },
  { name: "7a", value: null },
  { name: "7a+", value: null },
  { name: "7b", value: null },
  { name: "7b+", value: null },
  { name: "7c", value: null },
  { name: "7c+", value: null },
  { name: "8a", value: null },
  { name: "8a+", value: null },
  { name: "8b", value: null },
  { name: "8b+", value: null },
  { name: "8c", value: null },
  { name: "8c+", value: null },
  { name: "9a", value: null },
  { name: "9a+", value: null },
  { name: "9b", value: null },
  { name: "9b+", value: null },
  { name: "9c", value: null },
  { name: "9c+", value: null }
];

let emptyData = [
  {id: "Lead", value: 0},
  {id: "Top rope", value: 0},
  {id: "Multi-pitch", value: 0},
  {id: "Boulder", value: 0},
  {id: "Free solo", value: 0}
]
// grades.forEach(grade => {
//   gradesCount.push({ name: grade, value: null });
// });

console.log(gradesCount);
gradesCount.forEach(object => {
  object.value = climbs.filter(climb => climb.grade === object.name).length;
});

const filteredCount = [...gradesCount].filter(object => object.value > 0);
// console.log(gradesObject1);
// const filtered1 = gradesObject1.filter(object => object.value > 0);
console.log("filteredCount:");
console.log(filteredCount);

// drogi ułożone po wycenach
for (let key in gradesObject) {
  gradesObject[key] = [...climbs.filter(climb => climb.grade === key)];
  if (gradesObject[key].length === 0) {
    delete gradesObject[key];
  }
}
console.log(gradesObject);
// drogi posortowane po ocenie
const sortedClimbs = climbs.sort((a, b) => b.rating - a.rating);
console.log(sortedClimbs);
// liczba dróg ogólnie
const climbsCount = climbs.length;
console.log(climbsCount);
