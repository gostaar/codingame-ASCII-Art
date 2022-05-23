const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();

for (let i = 0; i < H; i++){
  const ROW = readline();
  let letters = '';
  for (let j = 0; j < T.length; j++){
    position = T.charCodeAt(j) - 65;
    
    if (position < 0 || position > 26) {
      position = 26;
    }
    letters += ROW.substring(position*L, (position+1)*L);
  }
  console.log(letters)
}
