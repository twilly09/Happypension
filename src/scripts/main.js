

// // Arrow Animation
// $(function(){
//     const $arrow = document.querySelector('.section-1__svg');
//     const $scroll = document.querySelector(".section-1__scrollText");


//     anime({
//         targets : $arrow,
//         translateY : 20,
//         easing : 'easeInOutQuad',
//         enddelay : 1000,
//         direction : 'alternate',
//         loop : true
//     });

//     anime({
//         targets : $scroll,
//         translateY : 20,
//         easing : 'linear',
//         enddelay : 1000,
//         direction : 'alternate',
//         loop : true
//     });
    
    
// });

$(function(){
    // 색션
    const $section = document.getElementsByTagName('section');
    
    // Section-1
    const $title = document.querySelector('.section-1__mainTitle');
    const $arrow = document.querySelector('.section-1__svg');
    const $scroll = document.querySelector(".section-1__scrollText");

    const $arrow_event = anime({
        targets : $arrow,
        translateY : 20,
        easing : 'easeInOutQuad',
        enddelay : 1000,
        direction : 'alternate',
        autoplay : false,
        loop : true
    });
    const $scroll_event = anime({
        targets : $scroll,
        translateY : 20,
        easing : 'linear',
        enddelay : 1000,
        direction : 'alternate',
        autoplay : false,
        loop : true
    });

    // Section-4 ROOM
    const $card = document.querySelectorAll('.section-4__card');

    // 현재 페이지 번호
    let pageNum = 0;
    

    // 총 페이지 수
    let totalNum = $section.length;

    // 스크롤 이벤트
    window.addEventListener('scroll', function(event){
        // 문서가 수직으로 얼마나 스크롤 되었는지 픽셀 단위로 반환한다.
        let scroll = Math.round(this.scrollY);

        // console.log(`Scroll : ${scroll}`);
        for(var i = 0; i < totalNum; i++)
        {
            // 스크롤 페이지 구하는 공식
            let value = $section[i].offsetTop - window.outerHeight / 1.5;

            if(scroll > value && scroll < $section[i].offsetTop - window.outerHeight / 1.5 +$section[i].offsetHeight)
            {
                pageNum = i;
                break;
            }
        }

        // console.log(`Page Num : ${pageNum}`);

        // 페이지 변경 함수
        pageChangeFunc();
        pageEvent();
    });


    // 버튼 이벤트
    $card.forEach((item) => {
        item.addEventListener('click', (e) => {
            reset($card);
            item.classList.add('reverse');
        });
    });

    // Reset
    function reset(dom)
    {
        dom.forEach((n) => {
            n.classList.remove('reverse');
        });
    }

    // 페이지 전환 active
    function pageChangeFunc()
    {
        for(var i = 0 ; i < totalNum; i++)
        {
            $section[i].classList.remove("active");
        }

        $section[pageNum].classList.add("active");
    }

    // 페이지 전환 이벤트
    function pageEvent()
    {
        // 페이지 1
        if(pageNum === 1)
        {
            if($arrow_event.paused)
            {
                $arrow_event.play();
            }
            if($scroll_event.paused)
            {
                $scroll_event.play();
            }
        }
        else
        {
            if(!$arrow_event.paused)
            {
                $arrow_event.pause();
            }
            if(!$scroll_event.paused)
            {
                $scroll_event.pause();
            }
        }



    }

    // 페이지 로드 시 실행
    pageChangeFunc();
})
