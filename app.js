window.addEventListener('load', () => {

    const bottomUnderIndicator = document.querySelector('.bottom-nav .underIndicator')
    bottomUnderIndicator.style.left = `${document.querySelector('.bottom-nav .item.on').offsetLeft - 3}px`
    bottomUnderIndicator.style.width = `${document.querySelector('.bottom-nav .item.on').offsetWidth + 6}px`
    const pagesWidth = document.querySelector('.home-page').offsetWidth
    let pagescrolltopositionticker = 2
    for (btn of document.querySelectorAll('.bottom-nav .item')) {
        const i = btn
        btn.addEventListener('click', () => {
            document.querySelector('.con').scrollLeft = document.querySelector(`.${i.classList[1]}-page`).offsetLeft
            switch (i.classList) {
                case 'home' :
                    break
            }
            
        })
    }
    document.querySelector('.con').addEventListener('scroll', () => {
        const persen = (document.querySelector('.con').scrollLeft / pagesWidth) * 100
        const wpos = bottomUnderIndicator.offsetLeft
        const kpos = (pagescrolltopositionticker == 2) ? document.querySelector('.bottom-nav .explore').offsetLeft - 3 : (pagescrolltopositionticker == 3) ? document.querySelector('.bottom-nav .reels').offsetLeft - 3 : (pagescrolltopositionticker == 4) ? document.querySelector('.bottom-nav .shop').offsetLeft - 3 : (pagescrolltopositionticker == 5) ? document.querySelector('.bottom-nav .user').offsetLeft - 3 : 0
        bottomUnderIndicator.style.left = document.querySelector('.bottom-nav .item.on').offsetLeft - 9 + (persen / 100 * kpos - wpos / 2 + 32) +'px'
    })

    const pages = document.querySelectorAll('.pages')
    for (page of pages) {
        page.addEventListener('scroll', () => {
            if (page.scrollTop > 0) {
                document.querySelector('.home-page .nav').classList.add('on')
            } else document.querySelector('.home-page .nav').classList.remove('on')
        })
    }
    document.querySelector('.home-page .nav .back-to-top').addEventListener('click', () => {
        document.querySelector('.home-page').scrollTop = 0
    })
    document.querySelector('.home-page').style.scrollPaddingTop = document.querySelector('.home-page .nav').offsetHeight * 1 + 'px'
    let intervalLoadingGradient = 0
    // setInterval(() => {
    //     let timeLoadingGradient = 3
    //     let i = 0
    //     while (i <= 200) {
    //         setTimeout(() => {
    //             for (ele of document.querySelectorAll('.home-page .story-followed .profile')) {
    //                 ele.style.backgroundImage = `linear-gradient(30deg, #63656765 0%, #d2d5d865 ${i}%, #63656765 100%)`
    //             }
    //         }, timeLoadingGradient)
    //         timeLoadingGradient += 3
    //         i++
    //     }
    //     intervalLoadingGradient = 6000
    // }, intervalLoadingGradient)

    document.querySelector('.loading-page').addEventListener('scroll', () => {
        if (document.fullscreenElement == null) {
            document.querySelector('body').requestFullscreen()
            .then(() => {
            })
            .catch((err) => {
                console.log(err)
            })
        }
        const full = document.querySelector('.loading-page .ele').offsetHeight
        document.querySelector('.loading-page').style.filter = `opacity(${100 - ((document.querySelector('.loading-page').scrollTop / full) * 100)}%)`
        if (document.querySelector('.loading-page').scrollTop == document.querySelector('.loading-page .ele').offsetHeight) {
            document.querySelector('.loading-page').style.display = 'none'
        }
        
})
})