// const newElement = document.createElement('container')
// const url = "./virat.webp"
// newElement.innerHTML = `<img id="img" src="${url}"/>`



// const target = document.querySelector('h1')
// target.appendChild(newElement)
// newElement.classList.add('container')
// // const image = document.querySelector('p')

// newElement.addEventListener('mouseover' , 'virat')
// function virat(){
    




//     // <img height="500px" width="500px"/>
//     Image. style. 'width=500px'
//     Image. style. 'height=500px'
// }

    
// }
// document.querySelector('button')
// function() {
//     var image = document.getElementsByClassName('container')
//     image.style.width = '156px'
//     image.style.height = 'auto'
// }
document.querySelector('h1').innerHTML = `<img class="normal-size" src="./virat.webp" />`

const imageElement = document.querySelector('img')

imageElement.addEventListener('mouseover' , increaseSize)

function increaseSize(){
    
    imageElement.classList = 'large-size'
    // imageElement.classList.remove('normal-size')
    // imageElement.classList.add('large-size')
}

imageElement.addEventListener('mouseout' , originalSize)

function originalSize(){
    // imageElement.classList.remove('large-size')
    imageElement.classList = 'normal-size'
}
// class = 'large-size normal-size'