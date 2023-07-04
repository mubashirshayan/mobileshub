let obj = {
  xiaomi: {
    xiaomi13ultra: {
      name: 'Xiaomi 13 Ultra',
      color: ['Olive green', 'Black'],
      price:'$870',
      storage: '12+512gb',
      camera: `50MP wide angle
      camera
      48MP ultra-wide angle camera
    32MP selfie camera`,
      img: '',
      battery: '5000mAh'
    },
    xiaomi13lite: {
      name: 'Xiaomi 13 Lite',
      color: ['Lite pink', 'Lite blue'],
      price: '$795',
      storage: '12/256gb',
      camera: `32MP ultra-wide angle camera
    8MP depth sensor`,
      img: ''
    },
    xiaomi12tpro: {
      name: 'Xiaomi 12T Pro',
      color: ['Silver', 'Blue', 'Black'],
      price:  '$750',
      storage: '256gb',
      camera: `200MP ultra-wide angle camera
    8MP ultra-wide angle camera`,
      img: '',
    },
    xiaomi12pro: {
    name: 'Xiaomi 12 Pro',
    color: ['Purple', 'Blue', 'Grey'],
    price: '$650',
    storage: '256gb',
    camera: `50MP ultra-wide angle camera
    32MP selfie camera`,
    img: '',
  },
  xiaomi11ultra: {
    name: 'MI 11 Ultra',
    color: ['Creamic Black', 'Creamic White'],
    price:'$995',
    storage: '12+256gb',
    camera: `50MP wide angle
      camera
      48MP ultra-wide angle camera
    20MP selfie camera`,
    img: '',
    battery: '5000mah'
  },
xiaomi11T: {
    name: 'Xiaomi 11T Pro',
    color: ['Celestial Blue', 'Moonlight White'],
    price: '$570',
    storage: '8+256gb',
    camera: `108MP wide angle
      camera
      8MP ultra-wide angle camera
    16MP selfie camera`,
    img: '',
    battery: '5000mah'
  },
  xiaomi13: {
    name: 'Xiaomi 13',
    color: ['Black',' White','Flora Green'],
    price:'$660' ,
    storage: '12+256gb',
    camera: `108MP wide angle
      camera
      8MP ultra-wide angle camera
    16MP selfie camera`,
    img: '',
    battery: '5000mah'
  },
  },
  apple:{
    iphone13:{
      name:'iphone13 pro max',
      price:'$900'
    },
    iphone12:{
      name:'iphone12 pro max',
      price:'$900'
    },
    iphone11:{
      name:'iphone11 pro max',
      price:'$900'
      
    },
    iphoneXs_max:{
      name:'iphoneXs max',
      price:'$900'
    },
    iphoneXs:{
      name:'iphoneXs',
      price:'$900'
      
    },
   iphoneX:{
      name:'iphoneX',
      price:'$900'
    }, 
   iphoneSe:{
      name:'iphoneSe',
      price:'$400'
    },
}
}
//console.log(obj);
/*for (var key in obj) {
  //console.log(obj[key]);
  for (var key1 in obj[key]){
  console.log(obj[key][key1].name);
  let end=obj[key][key1];
 let dom=document.getElementById('main').innerHTML+=`  <div class="card" style="width: 18rem;">
  <img src='' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${end.name}</h5>
    <p class="card-text">${end.price}</p>
    
  </div>
</div>`
}
}
*/

////Object method use and for loop;
let arr=Object.values(obj);
let fullarr=arr;
console.log(Object.values(fullarr));

function start() {
  let dom=document.getElementById('main').innerHTML=''
for (var i = 0; i < fullarr.length; i++) {
  //for (var j = i; j<i.length; j++) {
//console.log(fullarr[i]);
//console.log(Object.values(fullarr[i]))
let value=Object.values(fullarr[i]);
for (var j = 0; j < value.length; j++) {
  console.log(value[j]);
 dom=document.getElementById('main').innerHTML+=`  <div class="card" style="width: 18rem;">
  <img src='' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value[j].name}</h5>
    <p class="card-text">${value[j].price}</p>
    
  </div>
</div>`
}
}
}
start();
function apple() {
let dom=document.getElementById('main').innerHTML=''
let oppoarr=Object.values(obj);
let fulloppo=oppoarr;
let objarr=Object.values(fulloppo);
let user=+prompt('enter value');
let arry=Object.values(objarr[user]);
for (var i = 0; i < arry.length; i++) {
  console.log(arry[i].name);
  let{name,price}=arry[i];
 dom=document.getElementById('main').innerHTML+=`  <div class="card" style="width: 18rem;">
  <img src='' class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${price}</p>
    
  </div>
</div>`
}
}

