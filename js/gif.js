const imageButtons = document.querySelectorAll('.gif-selector div');
const images = document.querySelectorAll('.background-gif img')

for(let i = 0;i < imageButtons.length;i++){
    imageButtons[i].addEventListener('click',function(){
        imageButtons.forEach(function(imageButton,index){
            imageButton.classList.remove('active');
            if(i == index){
                imageButton.classList.add('active');
                images.forEach(function(image){
                    image.classList.remove('image-active');
                })
                images[i].classList.add('image-active');
            }
        })
    })
}