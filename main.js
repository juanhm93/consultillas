const data = [
  { categoria: "dev", nivel: 1 },
  { categoria: "design", nivel: 3 },
  { categoria: "design", nivel: 7 },
  { categoria: "dev", nivel: 9 },
  { categoria: "dev", nivel: 5 },
  { categoria: "design", nivel: 6 },
  { categoria: "dev", nivel: 3 },
];

const dataOrder = data.sort((a, b) => a.nivel - b.nivel);
const unique = data.filter(
  (item, index, arr) =>
    arr.findIndex((thisItem) => thisItem.categoria === item.categoria) === index
);

console.log(data);
console.log(dataOrder);
console.log(unique);
