const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('#navigation');
const navLinks = document.querySelectorAll('.nav-item');
var winPopUp = document.querySelector(".win-popup");
var popUpBtn = document.querySelector(".close-popup");
let conf = document.querySelector('#my-canvas');

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

// const home = document.querySelector("home");
const sections = document.querySelectorAll("section");

/********************************************************************/
// WORKING ON THE AUDIO TRIGGERD BY THE IMAGES
// NO TIME TO FIND A WAY TO AUTOMATIZE IT ! THAT'S LITERALLY SPAGHETTI CODE SORY FOR THAT OOPSII
//VARIABLES

var imgEye = document.querySelector("#img-eye");
var audiEye = document.querySelector("#audio-eye");
var imgEar = document.querySelector("#img-ear");
var audiEar = document.querySelector("#audio-ear");
var imgMouth = document.querySelector("#img-mouth");
var audiMouth = document.querySelector("#audio-mouth");
var imgNose = document.querySelector("#img-nose");
var audiNose = document.querySelector("#audio-nose");
var imgTonge = document.querySelector("#img-tonge");
var audiTonge = document.querySelector("#audio-tonge");
var imgHair = document.querySelector("#img-hair");
var audiHair = document.querySelector("#audio-hair");
var imgFinger = document.querySelector("#img-finger");
var audiFinger = document.querySelector("#audio-finger");
var imgHand = document.querySelector("#img-hand");
var audiHand = document.querySelector("#audio-hand");
var imgFoot = document.querySelector("#img-foot");
var audiFoot = document.querySelector("#audio-foot");
var imgFace = document.querySelector("#img-face");
var audiFace = document.querySelector("#audio-face");
var imgBelly = document.querySelector("#img-belly");
var audiBelly = document.querySelector("#audio-belly");
var imgBody = document.querySelector("#img-body");
var audiBody = document.querySelector("#audio-body");
var imgLeft = document.querySelector("#img-left");
var audiLeft = document.querySelector("#audio-left");
var imgRight = document.querySelector("#img-right");
var audiRight = document.querySelector("#audio-right");
var imgGoLeft = document.querySelector("#img-go-left");
var audiGoLeft = document.querySelector("#audio-go-left");
var imgGoRight = document.querySelector("#img-go-right");
var audiGoRight = document.querySelector("#audio-go-right");
var imgAbove = document.querySelector("#img-above");
var audiAbove = document.querySelector("#audio-above");
var imgUnder = document.querySelector("#img-under");
var audiUnder = document.querySelector("#audio-under");
var imgSide = document.querySelector("#img-side");
var audiSide = document.querySelector("#audio-side");
var imgFront = document.querySelector("#img-front");
var audiFront = document.querySelector("#audio-front");
var imgBehind = document.querySelector("#img-behind");
var audiBehind = document.querySelector("#audio-behind");

var imgArtichoke = document.querySelector("#img-artichoke");
var audiArtichoke = document.querySelector("#audio-artichoke");
var imgBetterave = document.querySelector("#img-betterave");
var audiBetterave = document.querySelector("#audio-betterave");
var imgBroccoli = document.querySelector("#img-broccoli");
var audiBroccoli = document.querySelector("#audio-broccoli");
var imgCarrot = document.querySelector("#img-carrot");
var audiCarrot = document.querySelector("#audio-carrot");
var imgCucumber = document.querySelector("#img-cucumber");
var audiCucumber = document.querySelector("#audio-cucumber");
var imgEggplant = document.querySelector("#img-eggplant");
var audiEggplant = document.querySelector("#audio-eggplant");
var imgLettuce = document.querySelector("#img-lettuce");
var audiLettuce = document.querySelector("#audio-lettuce");
var imgOnions = document.querySelector("#img-onions");
var audiOnions = document.querySelector("#audio-onions");
var imgPeas = document.querySelector("#img-peas");
var audiPeas = document.querySelector("#audio-peas");
var imgPeper = document.querySelector("#img-peper");
var audiPeper = document.querySelector("#audio-peper");
var imgPotatos = document.querySelector("#img-potatos");
var audiPotatos = document.querySelector("#audio-potatos");
var imgTomatos = document.querySelector("#img-tomatos");
var audiTomatos = document.querySelector("#audio-tomatos");

var imgAbricot = document.querySelector("#img-abricot");
var audiAbricot = document.querySelector("#audio-abricot");
var imgApple = document.querySelector("#img-apple");
var audiApple = document.querySelector("#audio-apple");
var imgBanana = document.querySelector("#img-banana");
var audiBanana = document.querySelector("#audio-banana");
var imgCherry = document.querySelector("#img-cherry");
var audiCherry = document.querySelector("#audio-cherry");
var imgKartos = document.querySelector("#img-kartos");
var audiKartos = document.querySelector("#audio-kartos");
var imgMandarine = document.querySelector("#img-mandarine");
var audiMandarinet = document.querySelector("#audio-mandarine");
var imgOringe = document.querySelector("#img-oringe");
var audiOringe = document.querySelector("#audio-oringe");
var imgPeach = document.querySelector("#img-peach");
var audiPeach = document.querySelector("#audio-peach");
var imgPear = document.querySelector("#img-pear");
var audiPear = document.querySelector("#audio-pear");
var imgPineapple = document.querySelector("#img-pineapple");
var audiPineapple = document.querySelector("#audio-pineapple");
var imgStrowberry = document.querySelector("#img-strowberry");
var audiStrowberry = document.querySelector("#audio-strowberry");
var imgWatermelon = document.querySelector("#img-watermelon");
var audiWatermelon = document.querySelector("#audio-watermelon");

var imgBird = document.querySelector("#img-bird");
var audiBird = document.querySelector("#audio-bird");
var imgCat = document.querySelector("#img-cat");
var audiCat = document.querySelector("#audio-cat");
var imgChicken = document.querySelector("#img-chicken");
var audiChicken = document.querySelector("#audio-chicken");
var imgCow = document.querySelector("#img-cow");
var audiCow = document.querySelector("#audio-cow");
var imgDog = document.querySelector("#img-dog");
var audiDog = document.querySelector("#audio-dog");
var imgDonkey = document.querySelector("#img-donkey");
var audiDonkey = document.querySelector("#audio-donkey");
var imgElephent = document.querySelector("#img-elephent");
var audiElephent = document.querySelector("#audio-elephent");
var imgGoat = document.querySelector("#img-goat");
var audiGoat = document.querySelector("#audio-goat");
var imgHorse = document.querySelector("#img-horse");
var audiHorse = document.querySelector("#audio-horse");
var imgLion = document.querySelector("#img-lion");
var audiLion = document.querySelector("#audio-lion");
var imgMonkey = document.querySelector("#img-monkey");
var audiMonkey = document.querySelector("#audio-monkey");
var imgWolf = document.querySelector("#img-wolf");
var audiWolf = document.querySelector("#audio-wolf");

var imgStar = document.querySelector("#img-star");
var audiStar = document.querySelector("#audio-star");
var imgHeart = document.querySelector("#img-heart");
var audiHeart = document.querySelector("#audio-heart");
var imgCircle = document.querySelector("#img-circle");
var audiCircle = document.querySelector("#audio-circle");
var imgTriangle = document.querySelector("#img-triangle");
var audiTriangle = document.querySelector("#audio-triangle");
var imgSquare = document.querySelector("#img-square");
var audiSquare = document.querySelector("#audio-square");
var imgRectangle = document.querySelector("#img-rectangle");
var audiRectangle = document.querySelector("#audio-rectangle");
var imgDiamond = document.querySelector("#img-diamond");
var audiDiamond = document.querySelector("#audio-diamond");
var imgPentagon = document.querySelector("#img-pentagon");
var audiPentagon = document.querySelector("#audio-pentagon");
var imgHexagon = document.querySelector("#img-hexagon");
var audiHexagon = document.querySelector("#audio-hexagon");
var imgHeptagon = document.querySelector("#img-heptagon");
var audiHeptagon = document.querySelector("#audio-heptagon");
var imgOctagon = document.querySelector("#img-octagon");
var audiOctagon = document.querySelector("#audio-octagon");
var imgTrapezoid = document.querySelector("#img-trapezoid");
var audiTrapezoid = document.querySelector("#audio-trapezoid");

var imgBlack = document.querySelector("#img-black");
var audioBlack = document.querySelector("#audio-black");
var imgPurple = document.querySelector("#img-purple");
var audioPurple = document.querySelector("#audio-purple");
var imgBlue = document.querySelector("#img-blue");
var audioBlue = document.querySelector("#audio-blue");
var imgWhite = document.querySelector("#img-white");
var audioWhite = document.querySelector("#audio-white");
var imgRed = document.querySelector("#img-red");
var audioRed = document.querySelector("#audio-red");
var imgYellow = document.querySelector("#img-yellow");
var audioYellow = document.querySelector("#audio-yellow");
var imgPink = document.querySelector("#img-pink");
var audioPink = document.querySelector("#audio-pink");
var imgGreen = document.querySelector("#img-green");
var audioGreen = document.querySelector("#audio-green");
var imgOrange = document.querySelector("#img-orange");
var audioOrange = document.querySelector("#audio-orange");
var imgBrown = document.querySelector("#img-brown");
var audioBrown = document.querySelector("#audio-brown");

var imgBallL = document.querySelector("#img-ball-l");
var audioBallL = document.querySelector("#audio-ball-l");
var imgBallM = document.querySelector("#img-ball-m");
var audioBallM = document.querySelector("#audio-ball-m");
var imgBallS = document.querySelector("#img-ball-s");
var audioBallS = document.querySelector("#audio-ball-s");
var imgPenL = document.querySelector("#img-pen-l");
var audioPenL = document.querySelector("#audio-pen-l");
var imgPenM = document.querySelector("#img-pen-m");
var audioPenM = document.querySelector("#audio-pen-m");
var imgPenS = document.querySelector("#img-pen-s");
var audioPenS = document.querySelector("#audio-pen-s");
var imgTableL = document.querySelector("#img-table-l");
var audioTableL = document.querySelector("#audio-table-l");
var imgTableM = document.querySelector("#img-table-m");
var audioTableM = document.querySelector("#audio-table-m");
var imgTableS = document.querySelector("#img-table-s");
var audioTableS = document.querySelector("#audio-table-s");

var imgPlane = document.querySelector("#img-plane");
var audioPlane = document.querySelector("#audio-plane");
var imgBicycle = document.querySelector("#img-bicycle");
var audioBicycle = document.querySelector("#audio-bicycle");
var imgBus = document.querySelector("#img-bus");
var audioBus = document.querySelector("#audio-bus");
var imgCar = document.querySelector("#img-car");
var audioCar = document.querySelector("#audio-car");
var imgMotorcycle = document.querySelector("#img-motorcycle");
var audioMotorcycle = document.querySelector("#audio-motorcycle");
var imgShip = document.querySelector("#img-ship");
var audioShip = document.querySelector("#audio-ship");
var imgTrain = document.querySelector("#img-train");
var audioTrain = document.querySelector("#audio-train");
var imgTramway = document.querySelector("#img-tramway");
var audioTramway = document.querySelector("#audio-tramway");

var imgCap = document.querySelector("#img-cap");
var audioCap = document.querySelector("#audio-cap");
var imgCoat = document.querySelector("#img-coat");
var audioCoat = document.querySelector("#audio-coat");
var imgPants = document.querySelector("#img-pants");
var audioPants = document.querySelector("#audio-pants");
var imgTShirt= document.querySelector("#img-tshirt");
var audioTShirt = document.querySelector("#audio-tshirt");
var imgSkirt = document.querySelector("#img-skirt");
var audioSkirt = document.querySelector("#audio-skirt");
var imgShoes = document.querySelector("#img-shoes");
var audioShoes = document.querySelector("#audio-shoes");
var imgShirt= document.querySelector("#img-shirt");
var audioShirt = document.querySelector("#audio-shirt");
var imgSocks = document.querySelector("#img-socks");
var audioSocks = document.querySelector("#audio-socks");

var imgAngry = document.querySelector("#img-angry");
var audioAngry = document.querySelector("#audio-angry");
var imgSad = document.querySelector("#img-sad");
var audioSad = document.querySelector("#audio-sad");
var imgCrying = document.querySelector("#img-crying");
var audioCrying = document.querySelector("#audio-crying");
var imgHappy = document.querySelector("#img-happy");
var audioHappy = document.querySelector("#audio-happy");
var imgSmiling= document.querySelector("#img-smiling");
var audioSmiling = document.querySelector("#audio-smiling");
var imgSurprised = document.querySelector("#img-surprised");
var audioSurprised = document.querySelector("#audio-surprised");
var imgThinking = document.querySelector("#img-thinking");
var audioThinking = document.querySelector("#audio-thinking");
var imgTired = document.querySelector("#img-tired");
var audioTired = document.querySelector("#audio-tired");
var imgInLove = document.querySelector("#img-inlove");
var audioInLove = document.querySelector("#audio-inlove");

var imgCouscous = document.querySelector("#img-couscous");
var audioCouscous = document.querySelector("#audio-couscous");
var imgChakhchoukha = document.querySelector("#img-chakhchoukha");
var audioChakhchoukha = document.querySelector("#audio-chakhchoukha");
var imgTrida = document.querySelector("#img-trida");
var audioTrida = document.querySelector("#audio-trida");
var imgBaklawa= document.querySelector("#img-b9lawa");
var audioBaklawa = document.querySelector("#audio-b9lawa");

var imgWedding = document.querySelector("#img-wedding");
var audioWedding = document.querySelector("#audio-wedding");
var imgBirthday = document.querySelector("#img-birthday");
var audioBirthday = document.querySelector("#audio-birthday");
var imgRamadan = document.querySelector("#img-ramadan");
var audioRamadan = document.querySelector("#audio-ramadan");
var imgAchoura = document.querySelector("#img-achoura");
var audioAchoura = document.querySelector("#audio-achoura");
var imgAidfitr = document.querySelector("#img-aidfitr");
var audioAidfitr = document.querySelector("#audio-aidfitr");
var imgAidadha = document.querySelector("#img-aidadha");
var audioAidadha = document.querySelector("#audio-aidadha");
var imgKhitan = document.querySelector("#img-khitan");
var audioKhitan = document.querySelector("#audio-khitan");
var imgMouled = document.querySelector("#img-mouled");
var audioMouled = document.querySelector("#audio-mouled");

var imgBye = document.querySelector("#img-bye");
var audioBye = document.querySelector("#audio-bye");
var imgCallMe= document.querySelector("#img-callme");
var audioCallMe = document.querySelector("#audio-callme");
var imgCome = document.querySelector("#img-come");
var audioCome = document.querySelector("#audio-come");
var imgListen = document.querySelector("#img-listen");
var audioListen = document.querySelector("#audio-listen");
var imgLookMe = document.querySelector("#img-lookme");
var audioLookMe = document.querySelector("#audio-lookme");
var imgLook = document.querySelector("#img-look");
var audioLook = document.querySelector("#audio-look");
var imgMe = document.querySelector("#img-me");
var audioMe = document.querySelector("#audio-me");
var imgNow = document.querySelector("#img-now");
var audioNow = document.querySelector("#audio-now");
var imgShutIt = document.querySelector("#img-shutit");
var audioShutIt = document.querySelector("#audio-shutit");
var imgSleep = document.querySelector("#img-sleep");
var audioSleep = document.querySelector("#audio-sleep");
var imgTime = document.querySelector("#img-time");
var audioTime = document.querySelector("#audio-time");

var imgBathItems = document.querySelector("#img-bathitems");
var audioBathItems = document.querySelector("#audio-bathitems");
var imgClothes = document.querySelector("#img-clothes");
var audioClothes = document.querySelector("#audio-clothes");
var imgFood = document.querySelector("#img-food");
var audioFood = document.querySelector("#audio-food");
var imgSleepItems = document.querySelector("#img-sleepitems");
var audioSleepItems = document.querySelector("#audio-sleepitems");
var imgThinkShower = document.querySelector("#img-thinkshower");
var audioThinkShower = document.querySelector("#audio-thinkshower");
var imgGoOut = document.querySelector("#img-goout");
var audioGoOut = document.querySelector("#audio-goout");
var imgHungry = document.querySelector("#img-hungry");
var audioHungry = document.querySelector("#audio-hungry");
var imgThinkSleep = document.querySelector("#img-thinksleep");
var audioThinkSleep = document.querySelector("#audio-thinksleep");

var imgOne = document.querySelectorAll(".one");
var audioOne = document.querySelector("#audio-one");
var imgTwo = document.querySelectorAll(".two");
var audioTwo = document.querySelector("#audio-two");
var imgThree = document.querySelectorAll(".three");
var audioThree = document.querySelector("#audio-three");
var imgFour = document.querySelectorAll(".four");
var audioFour = document.querySelector("#audio-four");
var imgFive = document.querySelectorAll(".five");
var audioFive = document.querySelector("#audio-five");
var imgSix = document.querySelectorAll(".six");
var audioSix = document.querySelector("#audio-six");
var imgSeven = document.querySelectorAll(".seven");
var audioSeven = document.querySelector("#audio-seven");
var imgEight = document.querySelectorAll(".eight");
var audioEight = document.querySelector("#audio-eight");
var imgNine = document.querySelectorAll(".nine");
var audioNine = document.querySelector("#audio-nine");
var imgTen = document.querySelectorAll(".ten");
var audioTen = document.querySelector("#audio-ten");


var img1 = document.querySelector("#img-1");
var audio1 = document.querySelector("#audio-1");
var img2 = document.querySelector("#img-2");
var audio2 = document.querySelector("#audio-2");
var img3 = document.querySelector("#img-3");
var audio3 = document.querySelector("#audio-3");
var img4 = document.querySelector("#img-4");
var audio4 = document.querySelector("#audio-4");
var img5 = document.querySelector("#img-5");
var audio5 = document.querySelector("#audio-5");
var img6 = document.querySelector("#img-6");
var audio6 = document.querySelector("#audio-6");
var img7 = document.querySelector("#img-7");
var audio7 = document.querySelector("#audio-7");
var img8 = document.querySelector("#img-8");
var audio8 = document.querySelector("#audio-8");
var img9 = document.querySelector("#img-9");
var audio9 = document.querySelector("#audio-9");
var img10 = document.querySelector("#img-10");
var audio10 = document.querySelector("#audio-10");
var img11 = document.querySelector("#img-11");
var audio11 = document.querySelector("#audio-11");
var img12 = document.querySelector("#img-12");
var audio12 = document.querySelector("#audio-12");
var img13 = document.querySelector("#img-13");
var audio13 = document.querySelector("#audio-13");
var img14 = document.querySelector("#img-14");
var audio14 = document.querySelector("#audio-14");
var img15 = document.querySelector("#img-15");
var audio15 = document.querySelector("#audio-15");
var img16 = document.querySelector("#img-16");
var audio16 = document.querySelector("#audio-16");
var img17 = document.querySelector("#img-17");
var audio17 = document.querySelector("#audio-17");
var img18 = document.querySelector("#img-18");
var audio18 = document.querySelector("#audio-18");
var img19 = document.querySelector("#img-19");
var audio19 = document.querySelector("#audio-19");
var img20 = document.querySelector("#img-20");
var audio20 = document.querySelector("#audio-20");
var img21 = document.querySelector("#img-21");
var audio21 = document.querySelector("#audio-21");
var img22 = document.querySelector("#img-22");
var audio22 = document.querySelector("#audio-22");
var img23 = document.querySelector("#img-23");
var audio23 = document.querySelector("#audio-23");
var img24 = document.querySelector("#img-24");
var audio24 = document.querySelector("#audio-24");
var img25 = document.querySelector("#img-25");
var audio25 = document.querySelector("#audio-25");
var img26 = document.querySelector("#img-26");
var audio26 = document.querySelector("#audio-26");
var img27 = document.querySelector("#img-27");
var audio27 = document.querySelector("#audio-27");
var img28 = document.querySelector("#img-28");
var audio28 = document.querySelector("#audio-28");
var img29 = document.querySelector("#img-29");
var audio29 = document.querySelector("#audio-29");
var img30 = document.querySelector("#img-30");
var audio30 = document.querySelector("#audio-30");
var img31 = document.querySelector("#img-31");
var audio31 = document.querySelector("#audio-31");
var img32 = document.querySelector("#img-32");
var audio32 = document.querySelector("#audio-32");
var img33 = document.querySelector("#img-33");
var audio33 = document.querySelector("#audio-33");
var img34 = document.querySelector("#img-34");
var audio34 = document.querySelector("#audio-34");
var img35 = document.querySelector("#img-35");
var audio35 = document.querySelector("#audio-35");
var img36 = document.querySelector("#img-36");
var audio36 = document.querySelector("#audio-36");
var img37 = document.querySelector("#img-37");
var audio37 = document.querySelector("#audio-37");
var img38 = document.querySelector("#img-38");
var audio38 = document.querySelector("#audio-38");
var img39 = document.querySelector("#img-39");
var audio39 = document.querySelector("#audio-39");
var img40 = document.querySelector("#img-40");
var audio40 = document.querySelector("#audio-40");
var img41 = document.querySelector("#img-41");
var audio41 = document.querySelector("#audio-41");
var img42 = document.querySelector("#img-42");
var audio42 = document.querySelector("#audio-42");
var img43 = document.querySelector("#img-43");
var audio43 = document.querySelector("#audio-43");
var img44 = document.querySelector("#img-44");
var audio44 = document.querySelector("#audio-44");
var img45 = document.querySelector("#img-45");
var audio45 = document.querySelector("#audio-45");
var img46 = document.querySelector("#img-46");
var audio46 = document.querySelector("#audio-46");
var img47 = document.querySelector("#img-47");
var audio47 = document.querySelector("#audio-47");
var img48 = document.querySelector("#img-48");
var audio48 = document.querySelector("#audio-48");
var img49 = document.querySelector("#img-49");
var audio49 = document.querySelector("#audio-49");
var img50 = document.querySelector("#img-50");
var audio50 = document.querySelector("#audio-50");
var img51 = document.querySelector("#img-51");
var audio51 = document.querySelector("#audio-51");
var img52 = document.querySelector("#img-52");
var audio52 = document.querySelector("#audio-52");
var img53 = document.querySelector("#img-53");
var audio53 = document.querySelector("#audio-53");
var img54 = document.querySelector("#img-54");
var audio54 = document.querySelector("#audio-54");
var img55 = document.querySelector("#img-55");
var audio55 = document.querySelector("#audio-55");
var img56 = document.querySelector("#img-56");
var audio56 = document.querySelector("#audio-56");
var img57 = document.querySelector("#img-57");
var audio57 = document.querySelector("#audio-57");
var img58 = document.querySelector("#img-58");
var audio58 = document.querySelector("#audio-58");
var img59 = document.querySelector("#img-59");
var audio59 = document.querySelector("#audio-59");
var img60 = document.querySelector("#img-60");
var audio60 = document.querySelector("#audio-60");
var img61 = document.querySelector("#img-61");
var audio61 = document.querySelector("#audio-61");
var img62 = document.querySelector("#img-62");
var audio62 = document.querySelector("#audio-62");
var img63 = document.querySelector("#img-63");
var audio63 = document.querySelector("#audio-63");
var img64 = document.querySelector("#img-64");
var audio64 = document.querySelector("#audio-64");
var img65 = document.querySelector("#img-65");
var audio65 = document.querySelector("#audio-65");
var img66 = document.querySelector("#img-66");
var audio66 = document.querySelector("#audio-66");
var img67 = document.querySelector("#img-67");
var audio67 = document.querySelector("#audio-67");
var img68 = document.querySelector("#img-68");
var audio68 = document.querySelector("#audio-68");
var img69 = document.querySelector("#img-69");
var audio69 = document.querySelector("#audio-69");
var img70 = document.querySelector("#img-70");
var audio70 = document.querySelector("#audio-70");
var img71 = document.querySelector("#img-71");
var audio71 = document.querySelector("#audio-71");
var img72 = document.querySelector("#img-72");
var audio72 = document.querySelector("#audio-72");
var img73 = document.querySelector("#img-73");
var audio73 = document.querySelector("#audio-73");
var img74 = document.querySelector("#img-74");
var audio74 = document.querySelector("#audio-74");
var img75 = document.querySelector("#img-75");
var audio75 = document.querySelector("#audio-75");
var img76 = document.querySelector("#img-76");
var audio76 = document.querySelector("#audio-76");
var img77 = document.querySelector("#img-77");
var audio77 = document.querySelector("#audio-77");
var img78 = document.querySelector("#img-78");
var audio78 = document.querySelector("#audio-78");
var img79 = document.querySelector("#img-79");
var audio79 = document.querySelector("#audio-79");
var img80 = document.querySelector("#img-80");
var audio80 = document.querySelector("#audio-80");
var img81 = document.querySelector("#img-81");
var audio81 = document.querySelector("#audio-81");
var img82 = document.querySelector("#img-82");
var audio82 = document.querySelector("#audio-82");
var img83 = document.querySelector("#img-83");
var audio83 = document.querySelector("#audio-83");
var img84 = document.querySelector("#img-84");
var audio84 = document.querySelector("#audio-84");
var img85 = document.querySelector("#img-85");
var audio85 = document.querySelector("#audio-85");
var img86 = document.querySelector("#img-86");
var audio86 = document.querySelector("#audio-86");
var img87 = document.querySelector("#img-87");
var audio87 = document.querySelector("#audio-87");
var img88 = document.querySelector("#img-88");
var audio88 = document.querySelector("#audio-88");
var img89 = document.querySelector("#img-89");
var audio89 = document.querySelector("#audio-89");
var img90 = document.querySelector("#img-90");
var audio90 = document.querySelector("#audio-90");
var img91 = document.querySelector("#img-91");
var audio91 = document.querySelector("#audio-91");
var img92 = document.querySelector("#img-92");
var audio92 = document.querySelector("#audio-92");
var img93 = document.querySelector("#img-93");
var audio93 = document.querySelector("#audio-93");
var img94 = document.querySelector("#img-94");
var audio94 = document.querySelector("#audio-94");
var img95 = document.querySelector("#img-95");
var audio95 = document.querySelector("#audio-95");
var img96 = document.querySelector("#img-96");
var audio96 = document.querySelector("#audio-96");
var img97 = document.querySelector("#img-97");
var audio97 = document.querySelector("#audio-97");
var img98 = document.querySelector("#img-98");
var audio98 = document.querySelector("#audio-98");
var img99 = document.querySelector("#img-99");
var audio99 = document.querySelector("#audio-99");
var img100 = document.querySelector("#img-100");
var audio100 = document.querySelector("#audio-100");
var img101 = document.querySelector("#img-101");
var audio101 = document.querySelector("#audio-101");
var img102 = document.querySelector("#img-102");
var audio102 = document.querySelector("#audio-102");
var img103 = document.querySelector("#img-103");
var audio103 = document.querySelector("#audio-103");
var img104 = document.querySelector("#img-104");
var audio104 = document.querySelector("#audio-104");
var img105 = document.querySelector("#img-105");
var audio105 = document.querySelector("#audio-105");
var img106 = document.querySelector("#img-106");
var audio106 = document.querySelector("#audio-106");
var img107 = document.querySelector("#img-107");
var audio107 = document.querySelector("#audio-107");
var img108 = document.querySelector("#img-108");
var audio108 = document.querySelector("#audio-108");
var img109 = document.querySelector("#img-109");
var audio109 = document.querySelector("#audio-109");
var img110 = document.querySelector("#img-110");
var audio110 = document.querySelector("#audio-110");
var img111 = document.querySelector("#img-111");
var audio111 = document.querySelector("#audio-111");
var img112 = document.querySelector("#img-112");
var audio112 = document.querySelector("#audio-112");
var img113 = document.querySelector("#img-113");
var audio113 = document.querySelector("#audio-113");
var img114 = document.querySelector("#img-114");
var audio114 = document.querySelector("#audio-114");
var img115 = document.querySelector("#img-115");
var audio115 = document.querySelector("#audio-115");
var img116 = document.querySelector("#img-116");
var audio116 = document.querySelector("#audio-116");
var img117 = document.querySelector("#img-117");
var audio117 = document.querySelector("#audio-117");
var img118 = document.querySelector("#img-118");
var audio118 = document.querySelector("#audio-118");
var img119 = document.querySelector("#img-119");
var audio119 = document.querySelector("#audio-119");
var img120 = document.querySelector("#img-120");
var audio120 = document.querySelector("#audio-120");
var img121 = document.querySelector("#img-121");
var audio121 = document.querySelector("#audio-121");
var img122 = document.querySelector("#img-122");
var audio122 = document.querySelector("#audio-122");
var img123 = document.querySelector("#img-123");
var audio123 = document.querySelector("#audio-123");
var img124 = document.querySelector("#img-124");
var audio124 = document.querySelector("#audio-124");
var img125 = document.querySelector("#img-125");
var audio125 = document.querySelector("#audio-125");
var img126 = document.querySelector("#img-126");
var audio126 = document.querySelector("#audio-126");
var img127 = document.querySelector("#img-127");
var audio127 = document.querySelector("#audio-127");
var img128 = document.querySelector("#img-128");
var audio128 = document.querySelector("#audio-128");
var img129 = document.querySelector("#img-129");
var audio129 = document.querySelector("#audio-129");
var img130 = document.querySelector("#img-130");
var audio130 = document.querySelector("#audio-130");
var img131 = document.querySelector("#img-131");
var audio131 = document.querySelector("#audio-131");
var img132 = document.querySelector("#img-132");
var audio132 = document.querySelector("#audio-132");
var img133 = document.querySelector("#img-133");
var audio133 = document.querySelector("#audio-133");
var img134 = document.querySelector("#img-134");
var audio134 = document.querySelector("#audio-134");
var img135 = document.querySelector("#img-135");
var audio135 = document.querySelector("#audio-135");
var img136 = document.querySelector("#img-136");
var audio136 = document.querySelector("#audio-136");
var img137 = document.querySelector("#img-137");
var audio137 = document.querySelector("#audio-137");
var img138 = document.querySelector("#img-138");
var audio138 = document.querySelector("#audio-138");
var img139 = document.querySelector("#img-139");
var audio139 = document.querySelector("#audio-139");
var img140 = document.querySelector("#img-140");
var audio140 = document.querySelector("#audio-140");
var img141 = document.querySelector("#img-141");
var audio141 = document.querySelector("#audio-141");
var img142 = document.querySelector("#img-142");
var audio142 = document.querySelector("#audio-142");
var img143 = document.querySelector("#img-143");
var audio143 = document.querySelector("#audio-143");
var img144 = document.querySelector("#img-144");
var audio144 = document.querySelector("#audio-144");
var img145 = document.querySelector("#img-145");
var audio145 = document.querySelector("#audio-145");
var img146 = document.querySelector("#img-146");
var audio146 = document.querySelector("#audio-146");
var img147 = document.querySelector("#img-147");
var audio147 = document.querySelector("#audio-147");
var img148 = document.querySelector("#img-148");
var audio148 = document.querySelector("#audio-148");
var img149 = document.querySelector("#img-149");
var audio149 = document.querySelector("#audio-149");
var img150 = document.querySelector("#img-150");
var audio150 = document.querySelector("#audio-150");
var img151 = document.querySelector("#img-151");
var audio151 = document.querySelector("#audio-151");
var img152 = document.querySelector("#img-152");
var audio152 = document.querySelector("#audio-152");
var img153 = document.querySelector("#img-153");
var audio153 = document.querySelector("#audio-153");
var img154 = document.querySelector("#img-154");
var audio154 = document.querySelector("#audio-154");
var img155 = document.querySelector("#img-155");
var audio155 = document.querySelector("#audio-155");
var img156 = document.querySelector("#img-156");
var audio156 = document.querySelector("#audio-156");
var img157 = document.querySelector("#img-157");
var audio157 = document.querySelector("#audio-157");
var img158 = document.querySelector("#img-158");
var audio158 = document.querySelector("#audio-158");
var img159 = document.querySelector("#img-159");
var audio159 = document.querySelector("#audio-159");
var img160 = document.querySelector("#img-160");
var audio160 = document.querySelector("#audio-160");
var img161 = document.querySelector("#img-161");
var audio161 = document.querySelector("#audio-161");
var img162 = document.querySelector("#img-162");
var audio162 = document.querySelector("#audio-162");
var img163 = document.querySelector("#img-163");
var audio163 = document.querySelector("#audio-163");
var img164 = document.querySelector("#img-164");
var audio164 = document.querySelector("#audio-164");
var img165 = document.querySelector("#img-165");
var audio165 = document.querySelector("#audio-165");
var img166 = document.querySelector("#img-166");
var audio166 = document.querySelector("#audio-166");
var img167 = document.querySelector("#img-167");
var audio167 = document.querySelector("#audio-167");
var img168 = document.querySelector("#img-168");
var audio168 = document.querySelector("#audio-168");
var img169 = document.querySelector("#img-169");
var audio169 = document.querySelector("#audio-169");
var img170 = document.querySelector("#img-170");
var audio170 = document.querySelector("#audio-170");
var img171 = document.querySelector("#img-171");
var audio171 = document.querySelector("#audio-171");
var img172 = document.querySelector("#img-172");
var audio172 = document.querySelector("#audio-172");
var img173 = document.querySelector("#img-173");
var audio173 = document.querySelector("#audio-173");
var img174 = document.querySelector("#img-174");
var audio174 = document.querySelector("#audio-174");
var img175 = document.querySelector("#img-175");
var audio175 = document.querySelector("#audio-175");
var img176 = document.querySelector("#img-176");
var audio176 = document.querySelector("#audio-176");
var img177 = document.querySelector("#img-177");
var audio177 = document.querySelector("#audio-177");
var img178 = document.querySelector("#img-178");
var audio178 = document.querySelector("#audio-178");
var img179 = document.querySelector("#img-179");
var audio179 = document.querySelector("#audio-179");
var img180 = document.querySelector("#img-180");
var audio180 = document.querySelector("#audio-180");
var img181 = document.querySelector("#img-181");
var audio181 = document.querySelector("#audio-181");
var img182 = document.querySelector("#img-182");
var audio182 = document.querySelector("#audio-182");
var img183 = document.querySelector("#img-183");
var audio183 = document.querySelector("#audio-183");
var img184 = document.querySelector("#img-184");
var audio184 = document.querySelector("#audio-184");
var img185 = document.querySelector("#img-185");
var audio185 = document.querySelector("#audio-185");
var img186 = document.querySelector("#img-186");
var audio186 = document.querySelector("#audio-186");
var img187 = document.querySelector("#img-187");
var audio187 = document.querySelector("#audio-187");
var img188 = document.querySelector("#img-188");
var audio188 = document.querySelector("#audio-188");
var img189 = document.querySelector("#img-189");
var audio189 = document.querySelector("#audio-189");
var img190 = document.querySelector("#img-190");
var audio190 = document.querySelector("#audio-190");
var img191 = document.querySelector("#img-191");
var audio191 = document.querySelector("#audio-191");
var img192 = document.querySelector("#img-192");
var audio192 = document.querySelector("#audio-192");
var img193 = document.querySelector("#img-193");
var audio193 = document.querySelector("#audio-193");
var img194 = document.querySelector("#img-194");
var audio194 = document.querySelector("#audio-194");
var img195 = document.querySelector("#img-195");
var audio195 = document.querySelector("#audio-195");
var img196 = document.querySelector("#img-196");
var audio196 = document.querySelector("#audio-196");


// var imgList = [imgEye, imgEar, imgMouth];
// var audList = [audiEye, audiEar, audiMouth];

/*********************************************************************/
// LISTENERS

imgEye.addEventListener("click", function() {
    if (audiEye.paused) {
        audiEye.play();
    }else {
        audiEye.pause();
    } 
});
imgEar.addEventListener("click", function() {
    if (audiEar.paused) {
        audiEar.play();
    }else {
        audiEar.pause();
    } 
});
imgMouth.addEventListener("click", function() {
    if (audiMouth.paused) {
        audiMouth.play();
    }else {
        audiMouth.pause();
    } 
});
imgNose.addEventListener("click", function() {
    if (audiNose.paused) {
        audiNose.play();
    }else {
        audiNose.pause();
    } 
});
imgTonge.addEventListener("click", function() {
    if (audiTonge.paused) {
        audiTonge.play();
    }else {
        audiTonge.pause();
    } 
});
imgHair.addEventListener("click", function() {
    if (audiHair.paused) {
        audiHair.play();
    }else {
        audiHair.pause();
    } 
});
imgFinger.addEventListener("click", function() {
    if (audiFinger.paused) {
        audiFinger.play();
    }else {
        audiFinger.pause();
    } 
});
imgHand.addEventListener("click", function() {
    if (audiHand.paused) {
        audiHand.play();
    }else {
        audiHand.pause();
    } 
});
imgFoot.addEventListener("click", function() {
    if (audiFoot.paused) {
        audiFoot.play();
    }else {
        audiFoot.pause();
    } 
});
imgFace.addEventListener("click", function() {
    if (audiFace.paused) {
        audiFace.play();
    }else {
        audiFace.pause();
    } 
});
imgBelly.addEventListener("click", function() {
    if (audiBelly.paused) {
        audiBelly.play();
    }else {
        audiBelly.pause();
    } 
});
imgBody.addEventListener("click", function() {
    if (audiBody.paused) {
        audiBody.play();
    }else {
        audiBody.pause();
    } 
});
imgLeft.addEventListener("click", function() {
    if (audiLeft.paused) {
        audiLeft.play();
    }else {
        audiLeft.pause();
    } 
});
imgRight.addEventListener("click", function() {
    if (audiRight.paused) {
        audiRight.play();
    }else {
        audiRight.pause();
    } 
});
imgGoLeft.addEventListener("click", function() {
    if (audiGoLeft.paused) {
        audiGoLeft.play();
    }else {
        audiGoLeft.pause();
    } 
});
imgGoRight.addEventListener("click", function() {
    if (audiGoRight.paused) {
        audiGoRight.play();
    }else {
        audiGoRight.pause();
    } 
});
imgAbove.addEventListener("click", function() {
    if (audiAbove.paused) {
        audiAbove.play();
    }else {
        audiAbove.pause();
    } 
});
imgUnder.addEventListener("click", function() {
    if (audiUnder.paused) {
        audiUnder.play();
    }else {
        audiUnder.pause();
    } 
});
imgSide.addEventListener("click", function() {
    if (audiSide.paused) {
        audiSide.play();
    }else {
        audiSide.pause();
    } 
});
imgFront.addEventListener("click", function() {
    if (audiFront.paused) {
        audiFront.play();
    }else {
        audiFront.pause();
    } 
});
imgBehind.addEventListener("click", function() {
    if (audiBehind.paused) {
        audiBehind.play();
    }else {
        audiBehind.pause();
    } 
});

imgArtichoke.addEventListener("click", function() {
    if (audiArtichoke.paused) {
        audiArtichoke.play();
    }else {
        audiArtichoke.pause();
    } 
});
imgBetterave.addEventListener("click", function() {
    if (audiBetterave.paused) {
        audiBetterave.play();
    }else {
        audiBetterave.pause();
    } 
});
imgBroccoli.addEventListener("click", function() {
    if (audiBroccoli.paused) {
        audiBroccoli.play();
    }else {
        audiBroccoli.pause();
    } 
});
imgCarrot.addEventListener("click", function() {
    if (audiCarrot.paused) {
        audiCarrot.play();
    }else {
        audiCarrot.pause();
    } 
});
imgCucumber.addEventListener("click", function() {
    if (audiCucumber.paused) {
        audiCucumber.play();
    }else {
        audiCucumber.pause();
    } 
});
imgEggplant.addEventListener("click", function() {
    if (audiEggplant.paused) {
        audiEggplant.play();
    }else {
        audiEggplant.pause();
    } 
});
imgLettuce.addEventListener("click", function() {
    if (audiLettuce.paused) {
        audiLettuce.play();
    }else {
        audiLettuce.pause();
    } 
});
imgOnions.addEventListener("click", function() {
    if (audiOnions.paused) {
        audiOnions.play();
    }else {
        audiOnions.pause();
    } 
});
imgPeas.addEventListener("click", function() {
    if (audiPeas.paused) {
        audiPeas.play();
    }else {
        audiPeas.pause();
    } 
});
imgPeper.addEventListener("click", function() {
    if (audiPeper.paused) {
        audiPeper.play();
    }else {
        audiPeper.pause();
    } 
});
imgPotatos.addEventListener("click", function() {
    if (audiPotatos.paused) {
        audiPotatos.play();
    }else {
        audiPotatos.pause();
    } 
});
imgTomatos.addEventListener("click", function() {
    if (audiTomatos.paused) {
        audiTomatos.play();
    }else {
        audiTomatos.pause();
    } 
});

imgAbricot.addEventListener("click", function() {
    if (audiAbricot.paused) {
        audiAbricot.play();
    }else {
        audiAbricot.pause();
    } 
});
imgApple.addEventListener("click", function() {
    if (audiApple.paused) {
        audiApple.play();
    }else {
        audiApple.pause();
    } 
});
imgBanana.addEventListener("click", function() {
    if (audiBanana.paused) {
        audiBanana.play();
    }else {
        audiBanana.pause();
    } 
});
imgCherry.addEventListener("click", function() {
    if (audiCherry.paused) {
        audiCherry.play();
    }else {
        audiCherry.pause();
    } 
});
imgKartos.addEventListener("click", function() {
    if (audiKartos.paused) {
        audiKartos.play();
    }else {
        audiKartos.pause();
    } 
});
imgMandarine.addEventListener("click", function() {
    if (audiMandarinet.paused) {
        audiMandarinet.play();
    }else {
        audiMandarinet.pause();
    } 
});
imgOringe.addEventListener("click", function() {
    if (audiOringe.paused) {
        audiOringe.play();
    }else {
        audiOringe.pause();
    } 
});
imgPeach.addEventListener("click", function() {
    if (audiPeach.paused) {
        audiPeach.play();
    }else {
        audiPeach.pause();
    } 
});
imgPear.addEventListener("click", function() {
    if (audiPear.paused) {
        audiPear.play();
    }else {
        audiPear.pause();
    } 
});
imgPineapple.addEventListener("click", function() {
    if (audiPineapple.paused) {
        audiPineapple.play();
    }else {
        audiPineapple.pause();
    } 
});
imgStrowberry.addEventListener("click", function() {
    if (audiStrowberry.paused) {
        audiStrowberry.play();
    }else {
        audiStrowberry.pause();
    } 
});
imgWatermelon.addEventListener("click", function() {
    if (audiWatermelon.paused) {
        audiWatermelon.play();
    }else {
        audiWatermelon.pause();
    } 
});



imgStar.addEventListener("click", function() {
    if (audiStar.paused) {
        audiStar.play();
    }else {
        audiStar.pause();
    } 
});
imgHeart.addEventListener("click", function() {
    if (audiHeart.paused) {
        audiHeart.play();
    }else {
        audiHeart.pause();
    } 
});
imgCircle.addEventListener("click", function() {
    if (audiCircle.paused) {
        audiCircle.play();
    }else {
        audiCircle.pause();
    } 
});
imgTriangle.addEventListener("click", function() {
    if (audiTriangle.paused) {
        audiTriangle.play();
    }else {
        audiTriangle.pause();
    } 
});
imgSquare.addEventListener("click", function() {
    if (audiSquare.paused) {
        audiSquare.play();
    }else {
        audiSquare.pause();
    } 
});
imgRectangle.addEventListener("click", function() {
    if (audiRectangle.paused) {
        audiRectangle.play();
    }else {
        audiRectangle.pause();
    } 
});
imgDiamond.addEventListener("click", function() {
    if (audiDiamond.paused) {
        audiDiamond.play();
    }else {
        audiDiamond.pause();
    } 
});
imgPentagon.addEventListener("click", function() {
    if (audiPentagon.paused) {
        audiPentagon.play();
    }else {
        audiPentagon.pause();
    } 
});
imgHexagon.addEventListener("click", function() {
    if (audiHexagon.paused) {
        audiHexagon.play();
    }else {
        audiHexagon.pause();
    } 
});
imgHeptagon.addEventListener("click", function() {
    if (audiHeptagon.paused) {
        audiHeptagon.play();
    }else {
        audiHeptagon.pause();
    } 
});
imgOctagon.addEventListener("click", function() {
    if (audiOctagon.paused) {
        audiOctagon.play();
    }else {
        audiOctagon.pause();
    } 
});
imgTrapezoid.addEventListener("click", function() {
    if (audiTrapezoid.paused) {
        audiTrapezoid.play();
    }else {
        audiTrapezoid.pause();
    } 
});


imgBlack.addEventListener("click", function() {
    if (audioBlack.paused) {
        audioBlack.play();
    }else {
        audioBlack.pause();
    } 
});
imgPurple.addEventListener("click", function() {
    if (audioPurple.paused) {
        audioPurple.play();
    }else {
        audioPurple.pause();
    } 
});
imgBlue.addEventListener("click", function() {
    if (audioBlue.paused) {
        audioBlue.play();
    }else {
        audioBlue.pause();
    } 
});
imgWhite.addEventListener("click", function() {
    if (audioWhite.paused) {
        audioWhite.play();
    }else {
        audioWhite.pause();
    } 
});
imgRed.addEventListener("click", function() {
    if (audioRed.paused) {
        audioRed.play();
    }else {
        audioRed.pause();
    } 
});
imgYellow.addEventListener("click", function() {
    if (audioYellow.paused) {
        audioYellow.play();
    }else {
        audioYellow.pause();
    } 
});
imgPink.addEventListener("click", function() {
    if (audioPink.paused) {
        audioPink.play();
    }else {
        audioPink.pause();
    } 
});
imgGreen.addEventListener("click", function() {
    if (audioGreen.paused) {
        audioGreen.play();
    }else {
        audioGreen.pause();
    } 
});
imgOrange.addEventListener("click", function() {
    if (audioOrange.paused) {
        audioOrange.play();
    }else {
        audioOrange.pause();
    } 
});
imgBrown.addEventListener("click", function() {
    if (audioBrown.paused) {
        audioBrown.play();
    }else {
        audioBrown.pause();
    } 
});

imgBird.addEventListener("click", function() {
    if (audiBird.paused) {
        audiBird.play();
    }else {
        audiBird.pause();
    } 
});
imgCat.addEventListener("click", function() {
    if (audiCat.paused) {
        audiCat.play();
    }else {
        audiCat.pause();
    } 
});
imgChicken.addEventListener("click", function() {
    if (audiChicken.paused) {
        audiChicken.play();
    }else {
        audiChicken.pause();
    } 
});
imgCow.addEventListener("click", function() {
    if (audiCow.paused) {
        audiCow.play();
    }else {
        audiCow.pause();
    } 
});
imgDog.addEventListener("click", function() {
    if (audiDog.paused) {
        audiDog.play();
    }else {
        audiDog.pause();
    } 
});
imgDonkey.addEventListener("click", function() {
    if (audiDonkey.paused) {
        audiDonkey.play();
    }else {
        audiDonkey.pause();
    } 
});
imgElephent.addEventListener("click", function() {
    if (audiElephent.paused) {
        audiElephent.play();
    }else {
        audiElephent.pause();
    } 
});
imgGoat.addEventListener("click", function() {
    if (audiGoat.paused) {
        audiGoat.play();
    }else {
        audiGoat.pause();
    } 
});
imgHorse.addEventListener("click", function() {
    if (audiHorse.paused) {
        audiHorse.play();
    }else {
        audiHorse.pause();
    } 
});
imgLion.addEventListener("click", function() {
    if (audiLion.paused) {
        audiLion.play();
    }else {
        audiLion.pause();
    } 
});
imgMonkey.addEventListener("click", function() {
    if (audiMonkey.paused) {
        audiMonkey.play();
    }else {
        audiMonkey.pause();
    } 
});
imgWolf.addEventListener("click", function() {
    if (audiWolf.paused) {
        audiWolf.play();
    }else {
        audiWolf.pause();
    } 
});

imgBallL.addEventListener("click", function() {
    if (audioBallL.paused) {
        audioBallL.play();
    }else {
        audioBallL.pause();
    } 
});
imgBallM.addEventListener("click", function() {
    if (audioBallM.paused) {
        audioBallM.play();
    }else {
        audioBallM.pause();
    } 
});
imgBallS.addEventListener("click", function() {
    if (audioBallS.paused) {
        audioBallS.play();
    }else {
        audioBallS.pause();
    } 
});
imgPenL.addEventListener("click", function() {
    if (audioPenL.paused) {
        audioPenL.play();
    }else {
        audioPenL.pause();
    } 
});
imgPenM.addEventListener("click", function() {
    if (audioPenM.paused) {
        audioPenM.play();
    }else {
        audioPenM.pause();
    } 
});
imgPenS.addEventListener("click", function() {
    if (audioPenS.paused) {
        audioPenS.play();
    }else {
        audioPenS.pause();
    } 
});
imgTableL.addEventListener("click", function() {
    if (audioTableL.paused) {
        audioTableL.play();
    }else {
        audioTableL.pause();
    } 
});
imgTableM.addEventListener("click", function() {
    if (audioTableM.paused) {
        audioTableM.play();
    }else {
        audioTableM.pause();
    } 
});
imgTableS.addEventListener("click", function() {
    if (audioTableS.paused) {
        audioTableS.play();
    }else {
        audioTableS.pause();
    } 
});

imgPlane.addEventListener("click", function() {
    if (audioPlane.paused) {
        audioPlane.play();
    }else {
        audioPlane.pause();
    } 
});
imgBicycle.addEventListener("click", function() {
    if (audioBicycle.paused) {
        audioBicycle.play();
    }else {
        audioBicycle.pause();
    } 
});
imgBus.addEventListener("click", function() {
    if (audioBus.paused) {
        audioBus.play();
    }else {
        audioBus.pause();
    } 
});
imgCar.addEventListener("click", function() {
    if (audioCar.paused) {
        audioCar.play();
    }else {
        audioCar.pause();
    } 
});
imgMotorcycle.addEventListener("click", function() {
    if (audioMotorcycle.paused) {
        audioMotorcycle.play();
    }else {
        audioMotorcycle.pause();
    } 
});
imgShip.addEventListener("click", function() {
    if (audioShip.paused) {
        audioShip.play();
    }else {
        audioShip.pause();
    } 
});
imgTrain.addEventListener("click", function() {
    if (audioTrain.paused) {
        audioTrain.play();
    }else {
        audioTrain.pause();
    } 
});
imgTramway.addEventListener("click", function() {
    if (audioTramway.paused) {
        audioTramway.play();
    }else {
        audioTramway.pause();
    } 
});

imgCap.addEventListener("click", function() {
    if (audioCap.paused) {
        audioCap.play();
    }else {
        audioCap.pause();
    } 
});
imgCoat.addEventListener("click", function() {
    if (audioCoat.paused) {
        audioCoat.play();
    }else {
        audioCoat.pause();
    } 
});
imgPants.addEventListener("click", function() {
    if (audioPants.paused) {
        audioPants.play();
    }else {
        audioPants.pause();
    } 
});
imgTShirt.addEventListener("click", function() {
    if (audioTShirt.paused) {
        audioTShirt.play();
    }else {
        audioTShirt.pause();
    } 
});
imgSkirt.addEventListener("click", function() {
    if (audioSkirt.paused) {
        audioSkirt.play();
    }else {
        audioSkirt.pause();
    } 
});
imgShoes.addEventListener("click", function() {
    if (audioShoes.paused) {
        audioShoes.play();
    }else {
        audioShoes.pause();
    } 
});
imgShirt.addEventListener("click", function() {
    if (audioShirt.paused) {
        audioShirt.play();
    }else {
        audioShirt.pause();
    } 
});
imgSocks.addEventListener("click", function() {
    if (audioSocks.paused) {
        audioSocks.play();
    }else {
        audioSocks.pause();
    } 
});

imgAngry.addEventListener("click", function() {
    if (audioAngry.paused) {
        audioAngry.play();
    }else {
        audioAngry.pause();
    } 
});
imgSad.addEventListener("click", function() {
    if (audioSad.paused) {
        audioSad.play();
    }else {
        audioSad.pause();
    } 
});
imgCrying.addEventListener("click", function() {
    if (audioCrying.paused) {
        audioCrying.play();
    }else {
        audioCrying.pause();
    } 
});
imgHappy.addEventListener("click", function() {
    if (audioHappy.paused) {
        audioHappy.play();
    }else {
        audioHappy.pause();
    } 
});
imgSmiling.addEventListener("click", function() {
    if (audioSmiling.paused) {
        audioSmiling.play();
    }else {
        audioSmiling.pause();
    } 
});
imgSurprised.addEventListener("click", function() {
    if (audioSurprised.paused) {
        audioSurprised.play();
    }else {
        audioSurprised.pause();
    } 
});
imgThinking.addEventListener("click", function() {
    if (audioThinking.paused) {
        audioThinking.play();
    }else {
        audioThinking.pause();
    } 
});
imgTired.addEventListener("click", function() {
    if (audioTired.paused) {
        audioTired.play();
    }else {
        audioTired.pause();
    } 
});
imgInLove.addEventListener("click", function() {
    if (audioInLove.paused) {
        audioInLove.play();
    }else {
        audioInLove.pause();
    } 
});

imgCouscous.addEventListener("click", function() {
    if (audioCouscous.paused) {
        audioCouscous.play();
    }else {
        audioCouscous.pause();
    } 
});
imgChakhchoukha.addEventListener("click", function() {
    if (audioChakhchoukha.paused) {
        audioChakhchoukha.play();
    }else {
        audioChakhchoukha.pause();
    } 
});
imgTrida.addEventListener("click", function() {
    if (audioTrida.paused) {
        audioTrida.play();
    }else {
        audioTrida.pause();
    } 
});
imgBaklawa.addEventListener("click", function() {
    if (audioBaklawa.paused) {
        audioBaklawa.play();
    }else {
        audioBaklawa.pause();
    } 
});

imgWedding.addEventListener("click", function() {
    if (audioWedding.paused) {
        audioWedding.play();
    }else {
        audioWedding.pause();
    } 
});
imgBirthday.addEventListener("click", function() {
    if (audioBirthday.paused) {
        audioBirthday.play();
    }else {
        audioBirthday.pause();
    } 
});
imgRamadan.addEventListener("click", function() {
    if (audioRamadan.paused) {
        audioRamadan.play();
    }else {
        audioRamadan.pause();
    } 
});
imgAchoura.addEventListener("click", function() {
    if (audioAchoura.paused) {
        audioAchoura.play();
    }else {
        audioAchoura.pause();
    } 
});
imgAidfitr.addEventListener("click", function() {
    if (audioAidfitr.paused) {
        audioAidfitr.play();
    }else {
        audioAidfitr.pause();
    } 
});
imgAidadha.addEventListener("click", function() {
    if (audioAidadha.paused) {
        audioAidadha.play();
    }else {
        audioAidadha.pause();
    } 
});
imgKhitan.addEventListener("click", function() {
    if (audioKhitan.paused) {
        audioKhitan.play();
    }else {
        audioKhitan.pause();
    } 
});
imgMouled.addEventListener("click", function() {
    if (audioMouled.paused) {
        audioMouled.play();
    }else {
        audioMouled.pause();
    } 
});

imgBye.addEventListener("click", function() {
    if (audioBye.paused) {
        audioBye.play();
    }else {
        audioBye.pause();
    } 
});
imgCallMe.addEventListener("click", function() {
    if (audioCallMe.paused) {
        audioCallMe.play();
    }else {
        audioCallMe.pause();
    } 
});
imgCome.addEventListener("click", function() {
    if (audioCome.paused) {
        audioCome.play();
    }else {
        audioCome.pause();
    } 
});
imgListen.addEventListener("click", function() {
    if (audioListen.paused) {
        audioListen.play();
    }else {
        audioListen.pause();
    } 
});
imgLookMe.addEventListener("click", function() {
    if (audioLookMe.paused) {
        audioLookMe.play();
    }else {
        audioLookMe.pause();
    } 
});
imgLook.addEventListener("click", function() {
    if (audioLook.paused) {
        audioLook.play();
    }else {
        audioLook.pause();
    } 
});
imgMe.addEventListener("click", function() {
    if (audioMe.paused) {
        audioMe.play();
    }else {
        audioMe.pause();
    } 
});
imgNow.addEventListener("click", function() {
    if (audioNow.paused) {
        audioNow.play();
    }else {
        audioNow.pause();
    } 
});
imgShutIt.addEventListener("click", function() {
    if (audioShutIt.paused) {
        audioShutIt.play();
    }else {
        audioShutIt.pause();
    } 
});
imgSleep.addEventListener("click", function() {
    if (audioSleep.paused) {
        audioSleep.play();
    }else {
        audioSleep.pause();
    } 
});
imgTime.addEventListener("click", function() {
    if (audioTime.paused) {
        audioTime.play();
    }else {
        audioTime.pause();
    } 
});

imgBathItems.addEventListener("click", function() {
    if (audioBathItems.paused) {
        audioBathItems.play();
    }else {
        audioBathItems.pause();
    } 
});
imgClothes.addEventListener("click", function() {
    if (audioClothes.paused) {
        audioClothes.play();
    }else {
        audioClothes.pause();
    } 
});
imgSleepItems.addEventListener("click", function() {
    if (audioSleepItems.paused) {
        audioSleepItems.play();
    }else {
        audioSleepItems.pause();
    } 
});
imgFood.addEventListener("click", function() {
    if (audioFood.paused) {
        audioFood.play();
    }else {
        audioFood.pause();
    } 
});
imgThinkShower.addEventListener("click", function() {
    if (audioThinkShower.paused) {
        audioThinkShower.play();
    }else {
        audioThinkShower.pause();
    } 
});
imgGoOut.addEventListener("click", function() {
    if (audioGoOut.paused) {
        audioGoOut.play();
    }else {
        audioGoOut.pause();
    } 
});
imgHungry.addEventListener("click", function() {
    if (audioHungry.paused) {
        audioHungry.play();
    }else {
        audioHungry.pause();
    } 
});
imgThinkSleep.addEventListener("click", function() {
    if (audioThinkSleep.paused) {
        audioThinkSleep.play();
    }else {
        audioThinkSleep.pause();
    } 
});


img1.addEventListener("click", function() {
    if (audio1.paused) {
        audio1.play();
    }else {
        audio1.pause();
    } 
});
img2.addEventListener("click", function() {
    if (audio2.paused) {
        audio2.play();
    }else {
        audio2.pause();
    } 
});
img3.addEventListener("click", function() {
    if (audio3.paused) {
        audio3.play();
    }else {
        audio3.pause();
    } 
});
img4.addEventListener("click", function() {
    if (audio4.paused) {
        audio4.play();
    }else {
        audio4.pause();
    } 
});
img5.addEventListener("click", function() {
    if (audio5.paused) {
        audio5.play();
    }else {
        audio5.pause();
    } 
});
img6.addEventListener("click", function() {
    if (audio6.paused) {
        audio6.play();
    }else {
        audio6.pause();
    } 
});
img7.addEventListener("click", function() {
    if (audio7.paused) {
        audio7.play();
    }else {
        audio7.pause();
    } 
});
img8.addEventListener("click", function() {
    if (audio8.paused) {
        audio8.play();
    }else {
        audio8.pause();
    } 
});
img9.addEventListener("click", function() {
    if (audio9.paused) {
        audio9.play();
    }else {
        audio9.pause();
    } 
});
img10.addEventListener("click", function() {
    if (audio10.paused) {
        audio10.play();
    }else {
        audio10.pause();
    } 
});
img11.addEventListener("click", function() {
    if (audio11.paused) {
        audio11.play();
    }else {
        audio11.pause();
    } 
});
img12.addEventListener("click", function() {
    if (audio12.paused) {
        audio12.play();
    }else {
        audio12.pause();
    } 
});
img13.addEventListener("click", function() {
    if (audio13.paused) {
        audio13.play();
    }else {
        audio13.pause();
    } 
});
img14.addEventListener("click", function() {
    if (audio14.paused) {
        audio14.play();
    }else {
        audio14.pause();
    } 
});
img15.addEventListener("click", function() {
    if (audio15.paused) {
        audio15.play();
    }else {
        audio15.pause();
    } 
});
img16.addEventListener("click", function() {
    if (audio16.paused) {
        audio16.play();
    }else {
        audio16.pause();
    } 
});
img17.addEventListener("click", function() {
    if (audio17.paused) {
        audio17.play();
    }else {
        audio17.pause();
    } 
});
img18.addEventListener("click", function() {
    if (audio18.paused) {
        audio18.play();
    }else {
        audio18.pause();
    } 
});
img19.addEventListener("click", function() {
    if (audio19.paused) {
        audio19.play();
    }else {
        audio19.pause();
    } 
});
img20.addEventListener("click", function() {
    if (audio20.paused) {
        audio20.play();
    }else {
        audio20.pause();
    } 
});
img21.addEventListener("click", function() {
    if (audio21.paused) {
        audio21.play();
    }else {
        audio21.pause();
    } 
});
img22.addEventListener("click", function() {
    if (audio22.paused) {
        audio22.play();
    }else {
        audio22.pause();
    } 
});
img23.addEventListener("click", function() {
    if (audio23.paused) {
        audio23.play();
    }else {
        audio23.pause();
    } 
});
img24.addEventListener("click", function() {
    if (audio24.paused) {
        audio24.play();
    }else {
        audio24.pause();
    } 
});
img25.addEventListener("click", function() {
    if (audio25.paused) {
        audio25.play();
    }else {
        audio25.pause();
    } 
});
img26.addEventListener("click", function() {
    if (audio26.paused) {
        audio26.play();
    }else {
        audio26.pause();
    } 
});
img27.addEventListener("click", function() {
    if (audio27.paused) {
        audio27.play();
    }else {
        audio27.pause();
    } 
});
img28.addEventListener("click", function() {
    if (audio28.paused) {
        audio28.play();
    }else {
        audio28.pause();
    } 
});
img29.addEventListener("click", function() {
    if (audio29.paused) {
        audio29.play();
    }else {
        audio29.pause();
    } 
});
img30.addEventListener("click", function() {
    if (audio30.paused) {
        audio30.play();
    }else {
        audio30.pause();
    } 
});
img31.addEventListener("click", function() {
    if (audio31.paused) {
        audio31.play();
    }else {
        audio31.pause();
    } 
});
img32.addEventListener("click", function() {
    if (audio32.paused) {
        audio32.play();
    }else {
        audio32.pause();
    } 
});
img33.addEventListener("click", function() {
    if (audio33.paused) {
        audio33.play();
    }else {
        audio33.pause();
    } 
});
img34.addEventListener("click", function() {
    if (audio34.paused) {
        audio34.play();
    }else {
        audio34.pause();
    } 
});
img35.addEventListener("click", function() {
    if (audio35.paused) {
        audio35.play();
    }else {
        audio35.pause();
    } 
});
img36.addEventListener("click", function() {
    if (audio36.paused) {
        audio36.play();
    }else {
        audio36.pause();
    } 
});
img37.addEventListener("click", function() {
    if (audio37.paused) {
        audio37.play();
    }else {
        audio37.pause();
    } 
});
img38.addEventListener("click", function() {
    if (audio38.paused) {
        audio38.play();
    }else {
        audio38.pause();
    } 
});
img39.addEventListener("click", function() {
    if (audio39.paused) {
        audio39.play();
    }else {
        audio39.pause();
    } 
});
img40.addEventListener("click", function() {
    if (audio40.paused) {
        audio40.play();
    }else {
        audio40.pause();
    } 
});
img41.addEventListener("click", function() {
    if (audio41.paused) {
        audio41.play();
    }else {
        audio41.pause();
    } 
});
img42.addEventListener("click", function() {
    if (audio42.paused) {
        audio42.play();
    }else {
        audio42.pause();
    } 
});
img43.addEventListener("click", function() {
    if (audio43.paused) {
        audio43.play();
    }else {
        audio43.pause();
    } 
});
img44.addEventListener("click", function() {
    if (audio44.paused) {
        audio44.play();
    }else {
        audio44.pause();
    } 
});
img45.addEventListener("click", function() {
    if (audio45.paused) {
        audio45.play();
    }else {
        audio45.pause();
    } 
});
img46.addEventListener("click", function() {
    if (audio46.paused) {
        audio46.play();
    }else {
        audio46.pause();
    } 
});
img47.addEventListener("click", function() {
    if (audio47.paused) {
        audio47.play();
    }else {
        audio47.pause();
    } 
});
img48.addEventListener("click", function() {
    if (audio48.paused) {
        audio48.play();
    }else {
        audio48.pause();
    } 
});
img49.addEventListener("click", function() {
    if (audio49.paused) {
        audio49.play();
    }else {
        audio49.pause();
    } 
});
img50.addEventListener("click", function() {
    if (audio50.paused) {
        audio50.play();
    }else {
        audio50.pause();
    } 
});
img51.addEventListener("click", function() {
    if (audio51.paused) {
        audio51.play();
    }else {
        audio51.pause();
    } 
});
img52.addEventListener("click", function() {
    if (audio52.paused) {
        audio52.play();
    }else {
        audio52.pause();
    } 
});
img53.addEventListener("click", function() {
    if (audio53.paused) {
        audio53.play();
    }else {
        audio53.pause();
    } 
});
img54.addEventListener("click", function() {
    if (audio54.paused) {
        audio54.play();
    }else {
        audio54.pause();
    } 
});
img55.addEventListener("click", function() {
    if (audio55.paused) {
        audio55.play();
    }else {
        audio55.pause();
    } 
});
img56.addEventListener("click", function() {
    if (audio56.paused) {
        audio56.play();
    }else {
        audio56.pause();
    } 
});
img57.addEventListener("click", function() {
    if (audio57.paused) {
        audio57.play();
    }else {
        audio57.pause();
    } 
});
img58.addEventListener("click", function() {
    if (audio58.paused) {
        audio58.play();
    }else {
        audio58.pause();
    } 
});
img59.addEventListener("click", function() {
    if (audio59.paused) {
        audio59.play();
    }else {
        audio59.pause();
    } 
});
img60.addEventListener("click", function() {
    if (audio60.paused) {
        audio60.play();
    }else {
        audio60.pause();
    } 
});
img61.addEventListener("click", function() {
    if (audio61.paused) {
        audio61.play();
    }else {
        audio61.pause();
    } 
});
img62.addEventListener("click", function() {
    if (audio62.paused) {
        audio62.play();
    }else {
        audio62.pause();
    } 
});
img63.addEventListener("click", function() {
    if (audio63.paused) {
        audio63.play();
    }else {
        audio63.pause();
    } 
});
img64.addEventListener("click", function() {
    if (audio64.paused) {
        audio64.play();
    }else {
        audio64.pause();
    } 
});
img65.addEventListener("click", function() {
    if (audio65.paused) {
        audio65.play();
    }else {
        audio65.pause();
    } 
});
img66.addEventListener("click", function() {
    if (audio66.paused) {
        audio66.play();
    }else {
        audio66.pause();
    } 
});
img67.addEventListener("click", function() {
    if (audio67.paused) {
        audio67.play();
    }else {
        audio67.pause();
    } 
});
img68.addEventListener("click", function() {
    if (audio68.paused) {
        audio68.play();
    }else {
        audio68.pause();
    } 
});
img69.addEventListener("click", function() {
    if (audio69.paused) {
        audio69.play();
    }else {
        audio69.pause();
    } 
});
img70.addEventListener("click", function() {
    if (audio70.paused) {
        audio70.play();
    }else {
        audio70.pause();
    } 
});
img71.addEventListener("click", function() {
    if (audio71.paused) {
        audio71.play();
    }else {
        audio71.pause();
    } 
});
img72.addEventListener("click", function() {
    if (audio72.paused) {
        audio72.play();
    }else {
        audio72.pause();
    } 
});
img73.addEventListener("click", function() {
    if (audio73.paused) {
        audio73.play();
    }else {
        audio73.pause();
    } 
});
img74.addEventListener("click", function() {
    if (audio74.paused) {
        audio74.play();
    }else {
        audio74.pause();
    } 
});
img75.addEventListener("click", function() {
    if (audio75.paused) {
        audio75.play();
    }else {
        audio75.pause();
    } 
});
img76.addEventListener("click", function() {
    if (audio76.paused) {
        audio76.play();
    }else {
        audio76.pause();
    } 
});
img77.addEventListener("click", function() {
    if (audio77.paused) {
        audio77.play();
    }else {
        audio77.pause();
    } 
});
img78.addEventListener("click", function() {
    if (audio78.paused) {
        audio78.play();
    }else {
        audio78.pause();
    } 
});
img79.addEventListener("click", function() {
    if (audio79.paused) {
        audio79.play();
    }else {
        audio79.pause();
    } 
});
img80.addEventListener("click", function() {
    if (audio80.paused) {
        audio80.play();
    }else {
        audio80.pause();
    } 
});
img81.addEventListener("click", function() {
    if (audio81.paused) {
        audio81.play();
    }else {
        audio81.pause();
    } 
});
img82.addEventListener("click", function() {
    if (audio82.paused) {
        audio82.play();
    }else {
        audio82.pause();
    } 
});
img83.addEventListener("click", function() {
    if (audio83.paused) {
        audio83.play();
    }else {
        audio83.pause();
    } 
});
img84.addEventListener("click", function() {
    if (audio84.paused) {
        audio84.play();
    }else {
        audio84.pause();
    } 
});
img85.addEventListener("click", function() {
    if (audio85.paused) {
        audio85.play();
    }else {
        audio85.pause();
    } 
});
img86.addEventListener("click", function() {
    if (audio86.paused) {
        audio86.play();
    }else {
        audio86.pause();
    } 
});
img87.addEventListener("click", function() {
    if (audio87.paused) {
        audio87.play();
    }else {
        audio87.pause();
    } 
});
img88.addEventListener("click", function() {
    if (audio88.paused) {
        audio88.play();
    }else {
        audio88.pause();
    } 
});
img89.addEventListener("click", function() {
    if (audio89.paused) {
        audio89.play();
    }else {
        audio89.pause();
    } 
});
img90.addEventListener("click", function() {
    if (audio90.paused) {
        audio90.play();
    }else {
        audio90.pause();
    } 
});
img91.addEventListener("click", function() {
    if (audio91.paused) {
        audio91.play();
    }else {
        audio91.pause();
    } 
});
img92.addEventListener("click", function() {
    if (audio92.paused) {
        audio92.play();
    }else {
        audio92.pause();
    } 
});
img93.addEventListener("click", function() {
    if (audio93.paused) {
        audio93.play();
    }else {
        audio93.pause();
    } 
});
img94.addEventListener("click", function() {
    if (audio94.paused) {
        audio94.play();
    }else {
        audio94.pause();
    } 
});
img95.addEventListener("click", function() {
    if (audio95.paused) {
        audio95.play();
    }else {
        audio95.pause();
    } 
});
img96.addEventListener("click", function() {
    if (audio96.paused) {
        audio96.play();
    }else {
        audio96.pause();
    } 
});
img97.addEventListener("click", function() {
    if (audio97.paused) {
        audio97.play();
    }else {
        audio97.pause();
    } 
});
img98.addEventListener("click", function() {
    if (audio98.paused) {
        audio98.play();
    }else {
        audio98.pause();
    } 
});
img99.addEventListener("click", function() {
    if (audio99.paused) {
        audio99.play();
    }else {
        audio99.pause();
    } 
});
img100.addEventListener("click", function() {
    if (audio100.paused) {
        audio100.play();
    }else {
        audio100.pause();
    } 
});
img101.addEventListener("click", function() {
    if (audio101.paused) {
        audio101.play();
    }else {
        audio101.pause();
    } 
});
img102.addEventListener("click", function() {
    if (audio102.paused) {
        audio102.play();
    }else {
        audio102.pause();
    } 
});
img103.addEventListener("click", function() {
    if (audio103.paused) {
        audio103.play();
    }else {
        audio103.pause();
    } 
});
img104.addEventListener("click", function() {
    if (audio104.paused) {
        audio104.play();
    }else {
        audio104.pause();
    } 
});
img105.addEventListener("click", function() {
    if (audio105.paused) {
        audio105.play();
    }else {
        audio105.pause();
    } 
});
img106.addEventListener("click", function() {
    if (audio106.paused) {
        audio106.play();
    }else {
        audio106.pause();
    } 
});
img107.addEventListener("click", function() {
    if (audio107.paused) {
        audio107.play();
    }else {
        audio107.pause();
    } 
});
img108.addEventListener("click", function() {
    if (audio108.paused) {
        audio108.play();
    }else {
        audio108.pause();
    } 
});
img109.addEventListener("click", function() {
    if (audio109.paused) {
        audio109.play();
    }else {
        audio109.pause();
    } 
});
img110.addEventListener("click", function() {
    if (audio110.paused) {
        audio110.play();
    }else {
        audio110.pause();
    } 
});
img111.addEventListener("click", function() {
    if (audio111.paused) {
        audio111.play();
    }else {
        audio111.pause();
    } 
});
img112.addEventListener("click", function() {
    if (audio112.paused) {
        audio112.play();
    }else {
        audio112.pause();
    } 
});
img113.addEventListener("click", function() {
    if (audio113.paused) {
        audio113.play();
    }else {
        audio113.pause();
    } 
});
img114.addEventListener("click", function() {
    if (audio114.paused) {
        audio114.play();
    }else {
        audio114.pause();
    } 
});
img115.addEventListener("click", function() {
    if (audio115.paused) {
        audio115.play();
    }else {
        audio115.pause();
    } 
});
img116.addEventListener("click", function() {
    if (audio116.paused) {
        audio116.play();
    }else {
        audio116.pause();
    } 
});
img117.addEventListener("click", function() {
    if (audio117.paused) {
        audio117.play();
    }else {
        audio117.pause();
    } 
});
img118.addEventListener("click", function() {
    if (audio118.paused) {
        audio118.play();
    }else {
        audio118.pause();
    } 
});
img119.addEventListener("click", function() {
    if (audio119.paused) {
        audio119.play();
    }else {
        audio119.pause();
    } 
});
img120.addEventListener("click", function() {
    if (audio120.paused) {
        audio120.play();
    }else {
        audio120.pause();
    } 
});
img121.addEventListener("click", function() {
    if (audio121.paused) {
        audio121.play();
    }else {
        audio121.pause();
    } 
});
img122.addEventListener("click", function() {
    if (audio122.paused) {
        audio122.play();
    }else {
        audio122.pause();
    } 
});
img123.addEventListener("click", function() {
    if (audio123.paused) {
        audio123.play();
    }else {
        audio123.pause();
    } 
});
img124.addEventListener("click", function() {
    if (audio124.paused) {
        audio124.play();
    }else {
        audio124.pause();
    } 
});
img125.addEventListener("click", function() {
    if (audio125.paused) {
        audio125.play();
    }else {
        audio125.pause();
    } 
});
img126.addEventListener("click", function() {
    if (audio126.paused) {
        audio126.play();
    }else {
        audio126.pause();
    } 
});
img127.addEventListener("click", function() {
    if (audio127.paused) {
        audio127.play();
    }else {
        audio127.pause();
    } 
});
img128.addEventListener("click", function() {
    if (audio128.paused) {
        audio128.play();
    }else {
        audio128.pause();
    } 
});
img129.addEventListener("click", function() {
    if (audio129.paused) {
        audio129.play();
    }else {
        audio129.pause();
    } 
});
img130.addEventListener("click", function() {
    if (audio130.paused) {
        audio130.play();
    }else {
        audio130.pause();
    } 
});
img131.addEventListener("click", function() {
    if (audio131.paused) {
        audio131.play();
    }else {
        audio131.pause();
    } 
});
img132.addEventListener("click", function() {
    if (audio132.paused) {
        audio132.play();
    }else {
        audio132.pause();
    } 
});
img133.addEventListener("click", function() {
    if (audio133.paused) {
        audio133.play();
    }else {
        audio133.pause();
    } 
});
img134.addEventListener("click", function() {
    if (audio134.paused) {
        audio134.play();
    }else {
        audio134.pause();
    } 
});
img135.addEventListener("click", function() {
    if (audio135.paused) {
        audio135.play();
    }else {
        audio135.pause();
    } 
});
img136.addEventListener("click", function() {
    if (audio136.paused) {
        audio136.play();
    }else {
        audio136.pause();
    } 
});
img137.addEventListener("click", function() {
    if (audio137.paused) {
        audio137.play();
    }else {
        audio137.pause();
    } 
});
img138.addEventListener("click", function() {
    if (audio138.paused) {
        audio138.play();
    }else {
        audio138.pause();
    } 
});
img139.addEventListener("click", function() {
    if (audio139.paused) {
        audio139.play();
    }else {
        audio139.pause();
    } 
});
img140.addEventListener("click", function() {
    if (audio140.paused) {
        audio140.play();
    }else {
        audio140.pause();
    } 
});
img141.addEventListener("click", function() {
    if (audio141.paused) {
        audio141.play();
    }else {
        audio141.pause();
    } 
});
img142.addEventListener("click", function() {
    if (audio142.paused) {
        audio142.play();
    }else {
        audio142.pause();
    } 
});
img143.addEventListener("click", function() {
    if (audio143.paused) {
        audio143.play();
    }else {
        audio143.pause();
    } 
});
img144.addEventListener("click", function() {
    if (audio144.paused) {
        audio144.play();
    }else {
        audio144.pause();
    } 
});
img145.addEventListener("click", function() {
    if (audio145.paused) {
        audio145.play();
    }else {
        audio145.pause();
    } 
});
img146.addEventListener("click", function() {
    if (audio146.paused) {
        audio146.play();
    }else {
        audio146.pause();
    } 
});
img147.addEventListener("click", function() {
    if (audio147.paused) {
        audio147.play();
    }else {
        audio147.pause();
    } 
});
img148.addEventListener("click", function() {
    if (audio148.paused) {
        audio148.play();
    }else {
        audio148.pause();
    } 
});
img149.addEventListener("click", function() {
    if (audio149.paused) {
        audio149.play();
    }else {
        audio149.pause();
    } 
});
img150.addEventListener("click", function() {
    if (audio150.paused) {
        audio150.play();
    }else {
        audio150.pause();
    } 
});
img151.addEventListener("click", function() {
    if (audio151.paused) {
        audio151.play();
    }else {
        audio151.pause();
    } 
});
img152.addEventListener("click", function() {
    if (audio152.paused) {
        audio152.play();
    }else {
        audio152.pause();
    } 
});
img153.addEventListener("click", function() {
    if (audio153.paused) {
        audio153.play();
    }else {
        audio153.pause();
    } 
});
img154.addEventListener("click", function() {
    if (audio154.paused) {
        audio154.play();
    }else {
        audio154.pause();
    } 
});
img155.addEventListener("click", function() {
    if (audio155.paused) {
        audio155.play();
    }else {
        audio155.pause();
    } 
});
img156.addEventListener("click", function() {
    if (audio156.paused) {
        audio156.play();
    }else {
        audio156.pause();
    } 
});
img157.addEventListener("click", function() {
    if (audio157.paused) {
        audio157.play();
    }else {
        audio157.pause();
    } 
});
img158.addEventListener("click", function() {
    if (audio158.paused) {
        audio158.play();
    }else {
        audio158.pause();
    } 
});
img159.addEventListener("click", function() {
    if (audio159.paused) {
        audio159.play();
    }else {
        audio159.pause();
    } 
});
img160.addEventListener("click", function() {
    if (audio160.paused) {
        audio160.play();
    }else {
        audio160.pause();
    } 
});
img161.addEventListener("click", function() {
    if (audio161.paused) {
        audio161.play();
    }else {
        audio161.pause();
    } 
});
img162.addEventListener("click", function() {
    if (audio162.paused) {
        audio162.play();
    }else {
        audio162.pause();
    } 
});
img163.addEventListener("click", function() {
    if (audio163.paused) {
        audio163.play();
    }else {
        audio163.pause();
    } 
});
img164.addEventListener("click", function() {
    if (audio164.paused) {
        audio164.play();
    }else {
        audio164.pause();
    } 
});
img165.addEventListener("click", function() {
    if (audio165.paused) {
        audio165.play();
    }else {
        audio165.pause();
    } 
});
img166.addEventListener("click", function() {
    if (audio166.paused) {
        audio166.play();
    }else {
        audio166.pause();
    } 
});
img167.addEventListener("click", function() {
    if (audio167.paused) {
        audio167.play();
    }else {
        audio167.pause();
    } 
});
img168.addEventListener("click", function() {
    if (audio168.paused) {
        audio168.play();
    }else {
        audio168.pause();
    } 
});
img169.addEventListener("click", function() {
    if (audio169.paused) {
        audio169.play();
    }else {
        audio169.pause();
    } 
});
img170.addEventListener("click", function() {
    if (audio170.paused) {
        audio170.play();
    }else {
        audio170.pause();
    } 
});
img171.addEventListener("click", function() {
    if (audio171.paused) {
        audio171.play();
    }else {
        audio171.pause();
    } 
});
img172.addEventListener("click", function() {
    if (audio172.paused) {
        audio172.play();
    }else {
        audio172.pause();
    } 
});
img173.addEventListener("click", function() {
    if (audio173.paused) {
        audio173.play();
    }else {
        audio173.pause();
    } 
});
img174.addEventListener("click", function() {
    if (audio174.paused) {
        audio174.play();
    }else {
        audio174.pause();
    } 
});
img175.addEventListener("click", function() {
    if (audio175.paused) {
        audio175.play();
    }else {
        audio175.pause();
    } 
});
img176.addEventListener("click", function() {
    if (audio176.paused) {
        audio176.play();
    }else {
        audio176.pause();
    } 
});
img177.addEventListener("click", function() {
    if (audio177.paused) {
        audio177.play();
    }else {
        audio177.pause();
    } 
});
img178.addEventListener("click", function() {
    if (audio178.paused) {
        audio178.play();
    }else {
        audio178.pause();
    } 
});
img179.addEventListener("click", function() {
    if (audio179.paused) {
        audio179.play();
    }else {
        audio179.pause();
    } 
});
img180.addEventListener("click", function() {
    if (audio180.paused) {
        audio180.play();
    }else {
        audio180.pause();
    } 
});
img181.addEventListener("click", function() {
    if (audio181.paused) {
        audio181.play();
    }else {
        audio181.pause();
    } 
});
img182.addEventListener("click", function() {
    if (audio182.paused) {
        audio182.play();
    }else {
        audio182.pause();
    } 
});
img183.addEventListener("click", function() {
    if (audio183.paused) {
        audio183.play();
    }else {
        audio183.pause();
    } 
});
img184.addEventListener("click", function() {
    if (audio184.paused) {
        audio184.play();
    }else {
        audio184.pause();
    } 
});
img185.addEventListener("click", function() {
    if (audio185.paused) {
        audio185.play();
    }else {
        audio185.pause();
    } 
});
img186.addEventListener("click", function() {
    if (audio186.paused) {
        audio186.play();
    }else {
        audio186.pause();
    } 
});
img187.addEventListener("click", function() {
    if (audio187.paused) {
        audio187.play();
    }else {
        audio187.pause();
    } 
});
img188.addEventListener("click", function() {
    if (audio188.paused) {
        audio188.play();
    }else {
        audio188.pause();
    } 
});
img189.addEventListener("click", function() {
    if (audio189.paused) {
        audio189.play();
    }else {
        audio189.pause();
    } 
});
img190.addEventListener("click", function() {
    if (audio190.paused) {
        audio190.play();
    }else {
        audio190.pause();
    } 
});
img191.addEventListener("click", function() {
    if (audio191.paused) {
        audio191.play();
    }else {
        audio191.pause();
    } 
});
img192.addEventListener("click", function() {
    if (audio192.paused) {
        audio192.play();
    }else {
        audio192.pause();
    } 
});
img193.addEventListener("click", function() {
    if (audio193.paused) {
        audio193.play();
    }else {
        audio193.pause();
    } 
});
img194.addEventListener("click", function() {
    if (audio194.paused) {
        audio194.play();
    }else {
        audio194.pause();
    } 
});
img195.addEventListener("click", function() {
    if (audio195.paused) {
        audio195.play();
    }else {
        audio195.pause();
    } 
});
img196.addEventListener("click", function() {
    if (audio196.paused) {
        audio196.play();
    }else {
        audio196.pause();
    } 
});


for(var i = 0; i < imgOne.length; i++) {
    imgOne[i].addEventListener("click", function() {
        if (audioOne.paused) {
            audioOne.play();
        }else {
            audioOne.pause();
        } 
    });
}
for(var i = 0; i < imgTwo.length; i++) {
    imgTwo[i].addEventListener("click", function() {
        if (audioTwo.paused) {
            audioTwo.play();
        }else {
            audioTwo.pause();
        } 
    });
}
for(var i = 0; i < imgThree.length; i++) {
    imgThree[i].addEventListener("click", function() {
        if (audioThree.paused) {
            audioThree.play();
        }else {
            audioThree.pause();
        } 
    });
}
for(var i = 0; i < imgFour.length; i++) {
    imgFour[i].addEventListener("click", function() {
        if (audioFour.paused) {
            audioFour.play();
        }else {
            audioFour.pause();
        } 
    });
}
for(var i = 0; i < imgFive.length; i++) {
    imgFive[i].addEventListener("click", function() {
        if (audioFive.paused) {
            audioFive.play();
        }else {
            audioFive.pause();
        } 
    });
}
for(var i = 0; i < imgSix.length; i++) {
    imgSix[i].addEventListener("click", function() {
        if (audioSix.paused) {
            audioSix.play();
        }else {
            audioSix.pause();
        } 
    });
}
for(var i = 0; i < imgSeven.length; i++) {
    imgSeven[i].addEventListener("click", function() {
        if (audioSeven.paused) {
            audioSeven.play();
        }else {
            audioSeven.pause();
        } 
    });
}
for(var i = 0; i < imgEight.length; i++) {
    imgEight[i].addEventListener("click", function() {
        if (audioEight.paused) {
            audioEight.play();
        }else {
            audioEight.pause();
        } 
    });
}
for(var i = 0; i < imgNine.length; i++) {
    imgNine[i].addEventListener("click", function() {
        if (audioNine.paused) {
            audioNine.play();
        }else {
            audioNine.pause();
        } 
    });
}
for(var i = 0; i < imgTen.length; i++) {
    imgTen[i].addEventListener("click", function() {
        if (audioTen.paused) {
            audioTen.play();
        }else {
            audioTen.pause();
        } 
    });
}




/*********************************************************************/
// CLOSE POPUPS

popUpBtn.addEventListener("click", function() {
    winPopUp.classList.remove("active-popup");
    conf.classList.remove("active-confetti");
});
/*********************************************************************/
// CONFETTI ANIMATION

confetti.render();

/********************************************************************/ 
// FOR RESPONSIVE NAVBAR

let navOpen = false;

navBtn.addEventListener("click", () => {
    if(!navOpen) {
        navBtn.classList.add('open');
        navOpen = true;
        nav.style.left = 0;
    }else {
        navBtn.classList.remove('open');
        navOpen = false;
        nav.style.left = '-100%';
    }
})
// -----------------------------------------------------
// nav tracker

onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight + 100) {
            var currentId = '#' + section.attributes.id.value;
            navLinks.forEach(navLink => {
                if (navLink.attributes.href.value === currentId) {
                    navLink.classList.add("active-link");
                }else {
                    navLink.classList.remove("active-link");
                }
            });
            console.log(currentId);
            console.log(scrollPosition);

            // console.log(navLink.attributes.href);
        }
    });
};


/********************************************************************/
// VARIABLES FOR THE GAME 1 SECTION

var squares = document.querySelectorAll(".gallery-game-container");
var allImages = [
    "<img src=\"assets/img/HIBA/B/BALL 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BALL 2.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BALL 3.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BALL 4.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BALL 5.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BEAR 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BEAR 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BEAR 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BEAR 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/BEAR 5.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/HAT 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/HAT 2.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/HAT 3.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/HAT 4.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/HAT 5.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/PEN 1.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/PEN 2.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/PEN 3.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/PEN 4.jpg\" class=\"gallery-game-img\">",
    "<img src=\"assets/img/HIBA/B/PEN 5.jpg\" class=\"gallery-game-img\">",
]
var numImg = 6;
var images = generateRandomImages(numImg);
var pickedImg = pickImage();
var goalImg = document.querySelector(".goal-img");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


/********************************************************************/
// GAME 1

// RESET BUTTON GAME 1

resetBtn.addEventListener("click", function() {
    images = generateRandomImages(numImg);
    pickedImg = pickImage();
    goalImg.innerHTML = pickedImg;
    for (var i = 0; i < squares.length; i++) {
        if (images[i]) {
            squares[i+1].style.cssText = "display : block;";
            squares[i+1].innerHTML = images[i];
        }else {
            squares[i+1].style.cssText = "display : none;";
        }
    }
});

/********************************************************************/
// EZ BUTTON GAME 1

easyBtn.addEventListener("click", function() {
    numImg = 3;
    easyBtn.classList.add("selected-btn");
    hardBtn.classList.remove("selected-btn");
    images = generateRandomImages(numImg);
    pickedImg = pickImage();
    goalImg.innerHTML = pickedImg;
    for (var i = 0; i < squares.length; i++) {
        if (images[i]) {
            squares[i+1].style.cssText = "display : block;";
            squares[i+1].innerHTML = images[i];
        }else {
            squares[i+1].style.cssText = "display : none;";
        }
    }
});

/********************************************************************/
// HARD BUTTON GAME 1

hardBtn.addEventListener("click", function() {
    numImg = 6;
    hardBtn.classList.add("selected-btn");
    easyBtn.classList.remove("selected-btn");
    images = generateRandomImages(numImg);
    pickedImg = pickImage();
    goalImg.innerHTML = pickedImg;
    for (var i = 0; i < squares.length; i++) {
        squares[i+1].style.cssText = "display : block;";
        squares[i+1].innerHTML = images[i];
    }
});


/********************************************************************/
// INIT GAME 1

goalImg.innerHTML = pickedImg;

for (var i = 0; i < squares.length; i++) {
    squares[i+1].innerHTML = images[i];
    squares[i+1].addEventListener("click", function(){
        var clickedImg = this.innerHTML;
        // console.log(clickedImg , pickedImg);
        if (clickedImg === pickedImg) {
            // alert("correct");
            winPopUp.classList.add("active-popup");
            conf.classList.add("active-confetti");
            changeImages(clickedImg);
        }else {
            this.style.cssText = "display : none;";
        };
    });
};

/********************************************************************/
// GAME 1 FUNCTIONS

/********************************************************************/
// CHANGE ALL THE IMAGES TO THE GOAL IMAGE WHEN THE GUESS IS CORRECT 

function changeImages(image) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.cssText = "display : block;";
        squares[i].innerHTML = pickedImg;
    }
}

/********************************************************************/
// DEFINE THE GOAL IMAGE RANDOMLY 

function pickImage() {
    var random = Math.floor(Math.random() * images.length);
    return images[random];
}

/********************************************************************/
// GENERATE AN ARRAY OF IMAGES RANDOMLY 

function generateRandomImages(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomImage());
    }
    return arr;
}

function randomImage() {
    var img = Math.floor(Math.random() * allImages.length);
    return allImages[img];
}


