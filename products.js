/* Edit this file to manage products, colors, prices, images, and order options. */
const BUSINESS = { name: 'Wee Create', facebookUrl: 'https://www.facebook.com/luegim.nauj.54', email: '', phone: '', location: 'Philippines' };
// Ordered by color family: neutrals, warm tones, greens, blues, then purples.
const COLORS = {
 Black:'#17191d', White:'#f8f6ef', Beige:'#d9c4a0', 'Light Brown':'#b98259', 'Dark Brown':'#56392d',
 Red:'#dc3d45', 'Pastel Red':'#eaa1a1', Pink:'#df79a9', Orange:'#e5793d', Yellow:'#f2c94c',
 Green:'#4e9864', Teal:'#238d8a', Blue:'#3e65e8', 'Sky Blue':'#74c8e8', 'Navy Blue':'#1e315f',
 Purple:'#7a59bd', Periwinkle:'#9295e8'
};
const PRODUCT_COLORS = ['Black','White','Beige','Light Brown','Dark Brown','Red','Pastel Red','Pink','Orange','Yellow','Green','Teal','Blue','Sky Blue','Navy Blue','Purple','Periwinkle'];

// Only products with an image currently in images/products are listed here.
// Set price to the final PHP amount when ready; 0 displays “Price varies”.
const PRODUCTS = [
 {id:'camera-keychain',name:'Camera Keychain',description:'A compact camera-inspired keychain for bags, keys, and gifts.',price:100,category:'Keychains',image:'images/products/Camera_Keychain.jpg',colors:PRODUCT_COLORS,quantityEnabled:true,notesEnabled:true,featured:true,bestSeller:true,keychainTypeEnabled:true,nameCustomization:{toggleLabel:'Add an embedded name (+ optional customization).',fieldLabel:'Name to Embed'},},
 {id:'camera-keychain-lithophane',name:'Camera Keychain Lithophane',description:'A photo-inspired camera keychain print with a custom finish.',price:150,category:'Keychains',image:'',background:'#d9e4f0',colors:PRODUCT_COLORS,quantityEnabled:true,notesEnabled:true,keychainTypeEnabled:true,nameCustomization:{toggleLabel:'Add an embedded name (+ optional customization).',fieldLabel:'Name to Embed'}},
 {id:'custom-whistle',name:'Custom Whistle',description:'A personalized 3D printed whistle for gifts and everyday use.',price:40,category:'Functional Prints',image:'',background:'#e3d8c8',colors:PRODUCT_COLORS,quantityEnabled:true,notesEnabled:true,featured:true,bestSeller:true,keychainTypeEnabled:true,nameCustomization:{toggleLabel:'Add a Name',fieldLabel:'Name to Display'},fontOptions:['Mansalva','Moontime','Arial','Times New Roman','Montserrat']},
 {id:'id-clip',name:'Custom ID',description:'A practical personalized print to keep an ID card close at hand.',price:100,category:'Functional Prints',image:'images/products/ID.jpg',colors:PRODUCT_COLORS,quantityEnabled:true,notesEnabled:true,featured:true,bestSeller:true,nameCustomization:{toggleLabel:'Add a Name',fieldLabel:'Name to Display'},fontOptions:['Mansalva','Moontime','Arial','Times New Roman','Montserrat']},
 {id:'angry-clip',name:'Angry Clip',description:'A playful clip or keychain with an expressive custom finish.',price:75,category:'Clips',image:'images/products/Angry_clip.jpg',colors:PRODUCT_COLORS,featuredColor:'Red',quantityEnabled:true,notesEnabled:true,itemTypeEnabled:true,colorRequired:true},
 {id:'sunflower-clip',name:'Sunflower Clip',description:'A cheerful sunflower clip or keychain made to order.',price:75,category:'Clips',image:'',background:'#f3e2a8',quantityEnabled:true,notesEnabled:true,itemTypeEnabled:true},
 {id:'rose-clip',name:'Rose Clip',description:'A delicate rose clip or keychain for bags, gifts, and everyday use.',price:75,category:'Clips',image:'',background:'#efd0d3',quantityEnabled:true,notesEnabled:true,itemTypeEnabled:true},
 {id:'daisy-clip',name:'Daisy Clip',description:'A simple daisy clip or keychain with a bright, handmade feel.',price:75,category:'Clips',image:'',background:'#e8e1c9',quantityEnabled:true,notesEnabled:true,itemTypeEnabled:true},
 {id:'custom-name-keychain',name:'Custom Name Keychain',description:'A personalized name keychain with your choice of colors, font, and hardware.',price:75,category:'Keychains',image:'',background:'#d7d0ed',colors:PRODUCT_COLORS,quantityEnabled:false,quantityChoices:[1,2],notesEnabled:true,customNameKeychain:true,maxNameLength:30},
 {id:'custom-fidget-keyboard-keychain',name:'Custom Fidget Keyboard Keychain',description:'A tactile keyboard-style keychain personalized with your letters.',price:75,category:'Keychains',image:'',background:'#d3e0d5',colors:PRODUCT_COLORS,quantityEnabled:true,notesEnabled:true,fidgetKeyboard:true,maxLetters:8},
 
];

const PROJECTS = [
 {name:'Custom Made',category:'Custom',description:'One-off prints brought from idea to object.',tone:'violet',image:'images/Selected Builds/Custom made.jpeg'},
 {name:'Keychain Collection',category:'Personalized',description:'Tiny keepsakes with a big personal touch.',tone:'coral',image:'images/Selected Builds/Keychain Collection.jpg'},
 {name:'3D Toys',category:'Toys',description:'Playful prints designed for display and delight.',tone:'blue',image:'images/Selected Builds/3d toys.jpg'},
 {name:'Creature Series',category:'Collectibles',description:'Articulated prints for the shelf.',tone:'green',image:'images/Selected Builds/Creature series.jpg'},
 {name:'Custom Display',category:'Custom',description:'A special shape made for a special place.',tone:'gold',image:'images/Selected Builds/custom display.jpg'},
 {name:'Minimalist',category:'Functional',description:'Small utility prints made for daily calm.',tone:'dark',image:'images/Selected Builds/minimalist.jpg'},
 {name:'Functional Things',category:'Functional',description:'Useful 3D printed solutions for everyday life.',tone:'blue',image:'images/Selected Builds/functional things.jpg'},
 {name:'Custom Projects',category:'Custom',description:'Tailored builds made around a unique idea.',tone:'violet'},
 {name:'Magic: The Gathering',category:'Collectibles',description:'Tabletop accessories and collectible creations.',tone:'coral'}
];
