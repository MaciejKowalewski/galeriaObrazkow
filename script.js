(function () {
    function showImg() {
        if (document.querySelector('.big-div')) {
            document.querySelector('.big-div').parentNode.removeChild(document.querySelector('.big-div'));
        }
        const srcOfImg = this.src;
        const bigPicture = document.createElement('img');
        const div = document.createElement('div');
        const button = document.createElement('button');
        const textArea = document.createElement('textarea')

        button.classList.add('close-pic');

        textArea.setAttribute('disabled', 'false');
        textArea.textContent = srcOfImg;

        bigPicture.setAttribute('src', srcOfImg);
        bigPicture.classList.add('big-picture-from');

        div.classList.add('big-div');
        div.appendChild(bigPicture);
        div.appendChild(button);
        div.appendChild(textArea);

        document.querySelector('body').appendChild(div);

        setTimeout(function () {
            bigPicture.classList.add('big-picture');
        }, 0);

        document.querySelector('.close-pic').addEventListener('click', function () {
            this.parentNode.parentNode.removeChild(document.querySelector('.big-div'));
        })
    }
    const imgs = document.querySelectorAll('.img-small');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', showImg);
    }
}())
