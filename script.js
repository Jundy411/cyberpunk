
//watch trailer button
const part1 = document.getElementById("part-1");
const part2 = document.getElementById("part-2");
function move(){
    part1.style.left="365px";
    part2.style.left="350px";
    part2.style.color="black";
    part2.style.backgroundColor="#fcee0c"
    part1.style.backgroundColor="transparent"

}

function out(){
    part1.style.left="340px";
    part2.style.left="400px";
    part2.style.color="#f1f1f1";
    part2.style.backgroundColor="transparent"
    part1.style.backgroundColor="#fcee0c"
}

//scroll hover
const scroll = document.getElementsByClassName("scroll");
const arrow = document.getElementById("arrow");

for (const scrolls of scroll) {
    scrolls.addEventListener("mouseover", function(){
        arrow.style.top="10px";
    })
}

for (const scrolls of scroll) {
    scrolls.addEventListener("mouseout", function(){
        arrow.style.top="0px";
    })
}

//button download 
const button = document.getElementsByClassName("button");
const download = document.getElementById("download");

for(const buttons of button){
    buttons.addEventListener("mouseover", function(){
        download.style.left="-10px";
    })
}
for(const buttons of button){
    buttons.addEventListener("mouseout", function(){
        download.style.left="0px";
    })
}
