// write your code here
fetch('http://localhost:3000/ramens')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        ramenNoodle = data;
    
        ramenNoodle.forEach((noodle) => {
            ramenBar(noodle);
        })
        currentRamen(ramenNoodle[0])
    }) 
function ramenBar(noodle) {
    let ramenNav = document.querySelector("#ramen-menu")
    let ramenImage = document.createElement("img");
    
    ramenImage.src = noodle.image
    ramenNav.append(ramenImage);

    ramenImage.addEventListener('click', () => {
        currentRamen(noodle);
    } )


}

function currentRamen(noodle) {
    let ramenDetail = document.querySelector('#ramen-detail')
    let ramenBigPic = document.querySelector('.detail-image')
    let ramenName = document.querySelector('.name')
    let ramenRestaurant = document.querySelector('.restaurant')
    let ramenComment = document.querySelector('#comment-display')
    let ramenRating = document.querySelector('#rating-display')

    ramenName.textContent = noodle.name;
    ramenRestaurant.textContent = noodle.restaurant;
    ramenBigPic.src = noodle.image;
    ramenComment.textContent = noodle.comment;
    ramenRating.textContent = noodle.rating;



}