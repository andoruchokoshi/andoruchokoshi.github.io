const previewImg = document.getElementById("preview-img");
const previewTitle = document.getElementById("preview-title");
const previewDescription = document.getElementById("preview-description");

const previewImg2 = document.getElementById("preview-img2");
const previewTitle2 = document.getElementById("preview-title2");
const previewDescription2 = document.getElementById("preview-description2");

const images = [
"/resources/img/3D%20blueprint%20arcade%20machine%20(2020).jpg",
"/resources/img/3D%20render%20-%20%E2%80%9CNew%E2%80%9D%20Sprite%201960%20(2020).jpg",
"/resources/img/Baby%20Yoda%20and%20Dart%20Wader%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Box%202gis%20(2023).jpg",
"/resources/img/Calendar%202gis%20(2022).jpg",
"/resources/img/Diploma%202GIS%20%20(2023).jpg",
"/resources/img/Dipper%20and%20Mable%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Earon%20Fox%20-%20Voices%20(2022).jpg",
"/resources/img/Harry%20Potter%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Hoco%20shop%20(2020).png",
"/resources/img/Morty%20fail%20(2020).jpg",
"/resources/img/Note%202gis%20(2023).jpg",
"/resources/img/Nothing%20but%20Thieves%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Poster%20ibig%20(2020).jpg",
"/resources/img/Rick%20and%20Morty%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Rick%20and%20Morty%20run%20(2020).jpg",
"/resources/img/Sticker%202gis%20(2022).jpg",
"/resources/img/Super%20homeless%20in%20Simpson%20universe%20(2020).jpg",
"/resources/img/Watch%203d%202gis%20(2020).jpg",
"/resources/img/night%20japan%20street%20(2020).jpg"
];

if (images.length === 0) {
console.log("No images found.");
} else {
setRandomImage(previewImg, previewTitle, previewDescription);
setRandomImage(previewImg2, previewTitle2, previewDescription2);
}

function setRandomImage(imgElem, titleElem, descElem) {
if (images.length === 0) {
console.log("No images found.");
return;
}
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
images.splice(randomIndex, 1);
imgElem.src = randomImage;
const filename = randomImage.split("/").pop();
const lastDotIndex = filename.lastIndexOf(".");
const lastSlashIndex = filename.lastIndexOf("\\");
const title = lastSlashIndex === -1 ? filename.substring(0, lastDotIndex) : filename.substring(lastSlashIndex + 1, lastDotIndex).replace(/\([^()]*\)/, '').trim();
const description = /\(([^)]+)\)/.exec(filename)[1];
titleElem.textContent = title;
descElem.textContent = description;
}


// LOCAL

//const previewImg = document.getElementById("preview-img");
//const previewTitle = document.getElementById("preview-title");
//const previewDescription = document.getElementById("preview-description");
//
//const previewImg2 = document.getElementById("preview-img2");
//const previewTitle2 = document.getElementById("preview-title2");
//const previewDescription2 = document.getElementById("preview-description2");
//
//const images = [];
//
//fetch("resources/img/")
//    .then(response => response.text())
//    .then(data => {
//        const parser = new DOMParser();
//        const html = parser.parseFromString(data, "text/html");
//        const links = html.querySelectorAll("a");
//        links.forEach(link => {
//            const href = link.getAttribute("href");
//            if (/\.(jpe?g|png|gif)$/i.test(href)) {
//                images.push(href);
//            }
//        });
//        if (images.length === 0) {
//            console.log("No images found.");
//        } else {
//            setRandomImage(previewImg, previewTitle, previewDescription);
//            setRandomImage(previewImg2, previewTitle2, previewDescription2);
//        }
//    })
//    .catch(error => console.error(error));
//
//function setRandomImage(imgElem, titleElem, descElem) {
//    if (images.length === 0) {
//        console.log("No images found.");
//        return;
//    }
//    const randomIndex = Math.floor(Math.random() * images.length);
//    const randomImage = images[randomIndex];
//    images.splice(randomIndex, 1);
//    imgElem.src = randomImage;
//    const filename = randomImage.split("/").pop();
//    const lastDotIndex = filename.lastIndexOf(".");
//    const lastSlashIndex = filename.lastIndexOf("\\");
//    const title = lastSlashIndex === -1 ? filename.substring(0, lastDotIndex) : filename.substring(lastSlashIndex + 1, lastDotIndex).replace(/\([^()]*\)/, '').trim();
//    const description = /\(([^)]+)\)/.exec(filename)[1];
//    titleElem.textContent = title;
//    descElem.textContent = description;
//}
