var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNBjAEwveblOoL7WIk0Z6ghQ2tD4XKxt5ZQ&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    "https://i.pinimg.com/originals/04/48/60/044860ebcd5d6c14a1140b351cb620b1.jpg",
    "https://tstoaddicts.files.wordpress.com/2019/08/charactersets_babybart-1.png",
];
var i = 0;
function nextperson() {
  if(i == 9)
    {
      i=0;
    }
  document.getElementById("nextbutton").src= images[i]
  i++;
  }