window.addEventListener('load', function () {
    for (let imgIdx = 1; imgIdx <= 33; imgIdx++) {
        var imgDiv = document.createElement('div')
        imgDiv.className = "pure-u-1-1 pure-u-lg-1-2"

        var img = document.createElement('img')
        img.className = "pure-img"
        img.src = `/img/comics/${imgIdx}.JPG`
        img.alt = `Страница ${imgIdx}`
        imgDiv.appendChild(img)

        document.getElementById('main-img-grid').appendChild(imgDiv)
    }
})