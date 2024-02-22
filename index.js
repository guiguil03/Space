const btn2 = document.querySelector(".second");
const btn1 = document.querySelector(".first");
const btn3= document.querySelector(".third")
const bas= document.querySelector(".bas");
const dest=document.querySelector(".dest");
const crew1=document.querySelector(".crew1");
const crew2=document.querySelector(".crew2");




let dataBase = {
    "destinations": [
        {
            "name": "MARS",
            "images": {
                "png": "./assets/destination/image-mars.png",
                "webp": "./assets/destination/image-mars.webp"
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 MIL. KM",
            "travel": "9 MONTHS"
        },
        {
            "name": "MOON",
            "images": {
                "png": "./assets/destination/image-moon.png",
                "webp": "./assets/destination/image-moon.webp"
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 KM",
            "travel": "3 DAYS"
        },
        {
            "name": "EUROPA",
            "images": {
                "png": "./assets/destination/image-europa.png",
                "webp": "./assets/destination/image-europa.webp"
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 MIL. KM",
            "travel": "3 YEARS"
        },
        {
            "name": "TITAN",
            "images": {
                "png": "./assets/destination/image-titan.png",
                "webp": "./assets/destination/image-titan.webp"
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 BIL. KM",
            "travel": "7 YEARS"
        }
    ],
    "crew": [
        {
            "name": "Douglas Hurley",
            "images": {
                "png": "./assets/crew/image-douglas-hurley.png",
                "webp": "./assets/crew/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": {
                "png": "./assets/crew/image-mark-shuttleworth.png",
                "webp": "./assets/crew/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": {
                "png": "./assets/crew/image-victor-glover.png",
                "webp": "./assets/crew/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": {
                "png": "./assets/crew/image-anousheh-ansari.png",
                "webp": "./assets/crew/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ],
    "technology": [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
                "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "./assets/technology/image-spaceport-portrait.jpg",
                "landscape": "./assets/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
                "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
}
//----------------------------------------
let body = document.querySelector("body");
let home = document.querySelector(".bas");
let action1=document.querySelector(".action1")
let action2=document.querySelector(".action2")
let action3=document.querySelector(".action3")
let action4=document.querySelector(".action4")
let destination = document.querySelector(".dest");
let crew=document.querySelector(".crew")
let homeButton = document.querySelector(".first");
let destinationButton = document.querySelector(".second");
let crewButton=document.querySelector(".third")
let marsButton = document.querySelector(".bout1");
let moonButton = document.querySelector(".bout2");
let europaButton = document.querySelector(".bout3");
let titanButton = document.querySelector(".bout4");
let planetImage = document.querySelector(".img");
let planetName = document.querySelector(".name");
let planetStory = document.querySelector(".para");
let planetTime = document.querySelector(".tete");
let planetDist = document.querySelector(".time");
let crewImage=document.querySelector(".img1")
let crewName=document.querySelector("h1")
let crewRole=document.querySelector(".h2")
let crewStory= document.querySelector(".text")
let crewChange= document.querySelector(".action2")
//----------------------------------------
const marsName = dataBase["destinations"][0].name;
const marsImage = dataBase["destinations"][0].images.webp;
const marsDescrition = dataBase["destinations"][0].description;
const marsDistance = dataBase["destinations"][0].distance;
const marsTime = dataBase["destinations"][0].travel;
//----------------------------------------
const moonName = dataBase["destinations"][1].name;
const moonImage = dataBase["destinations"][1].images.webp;
const moonDescrition = dataBase["destinations"][1].description;
const moonDistance = dataBase["destinations"][1].distance;
const moonTime = dataBase["destinations"][1].travel;
//----------------------------------------
const europaName = dataBase["destinations"][2].name;
const europaImage = dataBase["destinations"][2].images.webp;
const europaDescrition = dataBase["destinations"][2].description;
const europaDistance = dataBase["destinations"][2].distance;
const europaTime = dataBase["destinations"][2].travel;
//----------------------------------------
const titanName = dataBase["destinations"][3].name;
const titanImage = dataBase["destinations"][3].images.webp;
const titanDescrition = dataBase["destinations"][3].description;
const titanDistance = dataBase["destinations"][3].distance;
const titanTime = dataBase["destinations"][3].travel;
//----------------------------------------
const DouglasName=dataBase["crew"][0].name;
const DouglasImage=dataBase["crew"][0].images.webp;
const Douglasrole=dataBase["crew"][0].role;
const DouglasBio=dataBase["crew"][0].bio;
//--------------------------------Mark
const MarkName=dataBase["crew"][1].name;
const MarkImage=dataBase["crew"][1].images.webp;
const Markrole=dataBase["crew"][1].role;
const MarkBio=dataBase["crew"][1].bio;
//------------------------------------;----
const VictorName=dataBase["crew"][2].name;
const VictorImage=dataBase["crew"][2].images.webp;
const Victorrole=dataBase["crew"][2].role;
const VictorkBio=dataBase["crew"][2].bio;
//---------------------------------------
const AnousheName=dataBase["crew"][3].name;
const AnousheImage=dataBase["crew"][3].images.webp;
const Anousherole=dataBase["crew"][3].role;
const AnousheBio=dataBase["crew"][3].bio;
//------------------------------------------
homeButton.addEventListener("click", function () {
    home.style.display="flex";
    destination.style.display="none"
    body.style.background = "url('./assets/home/background-home-desktop.jpg')";
    crew.style.display="none";
});
//----------------------------------------
destinationButton.addEventListener("click",()=> {
    home.style.display="none";
    destination.style.display="flex"
    planetName.innerHTML=marsName;
    planetImage.src=marsImage;
    planetStory.innerHTML=marsDescrition;
    planetDist.innerHTML=marsDistance;
    planetTime.innerHTML=marsTime;
    crew.style.display="none";
    body.style.background="url('./assets/destination/background-destination-desktop.jpg')";

});
//---------------------------------------
crewButton.addEventListener("click", ()=>{
    home.style.display="none";
    destination.style.display="none"
    crew.style.display="flex";
    body.style.background="url('./assets/crew/background-crew-desktop.jpg')";
    crewImage.src=DouglasImage;
    crewName.innerHTML=DouglasName;
    crewStory.innerHTML=DouglasBio;
    crewRole.innerHTML=Douglasrole;


})
//----------------------------------------
marsButton.addEventListener("click", function () {
    planetName.innerHTML=marsName;
    planetImage.src=marsImage;
    planetStory.innerHTML=marsDescrition;
    planetDist.innerHTML=marsDistance;
    planetTime.innerHTML=marsTime;
});
//----------------------------------------
moonButton.addEventListener("click", function () {
    planetName.innerHTML=moonName;
    planetImage.src=moonImage
    planetStory.innerHTML=moonDescrition;
    planetDist.innerHTML=moonDistance;
    planetTime.innerHTML=moonTime;
});
//----------------------------------------
europaButton.addEventListener("click", function () {
    planetName.innerHTML=europaName;
    planetImage.src=europaImage;
    planetStory.innerHTML=europaDescrition;
    planetDist.innerHTML=europaDistance;
    planetTime.innerHTML=europaTime;
});
//----------------------------------------
titanButton.addEventListener("click", function () {
    planetName.innerHTML=titanName;
    planetImage.src=titanImage;
    planetStory.innerHTML=titanDescrition;
    planetDist.innerHTML=titanDistance;
    planetTime.innerHTML=titanTime;
});

crewChange.addEventListener("click", ()=> {
    crewImage.src=DouglasImage;
    crewName.innerHTML=DouglasName;
    crewStory.innerHTML=DouglasBio;
    crewRole.innerHTML=Douglasrole;

   
})
action1 .addEventListener("mouseover", function() {
    crewImage.src=MarkImage;
    crewName.innerHTML=MarkName;
    crewStory.innerHTML=MarkBio;
    crewRole.innerHTML=Markrole;   

})
action2.addEventListener("mouseover", function() {
    crewImage.src=MarkImage;
    crewName.innerHTML=MarkName;
    crewStory.innerHTML=MarkBio;
    crewRole.innerHTML=Markrole;   

})
action3.addEventListener("click", function() {
    crewImage.src=MarkImage;
    crewName.innerHTML=MarkName;
    crewStory.innerHTML=MarkBio;
    crewRole.innerHTML=Markrole;

})

