const project = document.querySelector('.main-container .projects .project');
const projectContainer = document.querySelector('.main-container .projects');
const announcement = document.querySelector('.side-content .announcement');
const announcementContainer = document.querySelector('.main-container .announcements');
const trendingBox = document.querySelector('.side-content .trending-box');
const trendingContainer = document.querySelector('.side-content .trending');

// add projects
cloneProject('Less Cool Project','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione, sed corrupti quis, ad blanditiis praesentium, non pariatur fugiat aliquam laudantium laborum dolore sapiente quam? Sit, quaerat?aliquam laudantium laborum dolore sapiente quam? Sit, quaerat?');
cloneProject('Impossible App','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione, sed corrupti quis, ad blanditiis praesentium');
cloneProject('Easy Peasy App','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione, sed corrupti quis, ad blanditiis praesentium, non pariatur fugiat aliquam laudantium laborum dolore sapiente quam? Sit, quaerat?');
cloneProject('Ad Blocker','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione, sed corrupti quis, ad blanditiis praesentium, non pariaturfugiat aliquam  aliquam ');
cloneProject('Money Maker','Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione, sed corrupti quis, ad blanditiis praesentium, non pariatur fugiat aliquam laudantium laborum dolore sapiente quam? Sit, quaerat?');

// add announcements
cloneAnnouncement('Community Share Day', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim ratione');
cloneAnnouncement('Community Share Day', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dicta est enim rationeMoney Maker','Lorem ipsum dolor, sit amet');
// add trending
cloneTrendingBox('@morgan','Super Cool Project','./svg/Artboard 22.svg');
cloneTrendingBox('@kendall','Life Changing App','./svg/Artboard 18.svg');
cloneTrendingBox('@alex','No Traffic Maker','./svg/Artboard 19.svg');


function cloneProject(heading, content){
    let clone = project.cloneNode(true);
    let cloneH5 = clone.querySelector('h5');
    let cloneP = clone.querySelector('p');

    cloneH5.innerText = heading;
    cloneP.innerText = content;
    projectContainer.appendChild(clone);
}

function cloneAnnouncement(heading, content){
    let clone = announcement.cloneNode(true);
    let cloneH6 = clone.querySelector('h6');
    let cloneP = clone.querySelector('p');

    cloneH6.innerText = heading;
    cloneP.innerText = content;
    announcementContainer.appendChild(clone);
}

function cloneTrendingBox(nick, text, imgSrc){
    let clone = trendingBox.cloneNode(true);
    let p1 = clone.querySelector('.username');
    let p2 = clone.querySelector('p:last-of-type');
    let img = clone.querySelector('img');

    img.src = imgSrc;
    p1.innerText = nick;
    p2.innerText = text;
    trendingContainer.appendChild(clone);
}