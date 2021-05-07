let clicker = true;
let storyTrigger;
let tt;
let scrollPositionX = 0,
    scrollPositionY = 0;


gsap.registerPlugin(ScrollTrigger);

function delay(n) {
    n = n || 1000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}


function storyFunc(){

    ScrollTrigger.refresh();


    $('.horizontal').each(function (i, el) {

        console.log(el)

        let thisSection = $(this);
        let thisPinWrap = thisSection.find('.pin-wrap');
        let thisAnimWrap = thisPinWrap.find('.animation-wrap');
        let thisAnimWrapWidth = thisAnimWrap.width();


        let theseItems = thisAnimWrap.find('.item');
        let theseItemsWidth = theseItems.width();

        let scrollWidth = theseItemsWidth * theseItems.length;


        let windowWidth = $(window).innerWidth();

        let fromValue = 0;
        let toValue = -(scrollWidth - windowWidth);

        let horizontalSectionTween = gsap.fromTo(thisAnimWrap, {x: fromValue}, {x: toValue, ease: "none"});


        var itemWidth = theseItemsWidth * theseItems.length;

        var totalH = itemWidth + theseItems.height();



        tt = ScrollTrigger.create({
            id: "horizontalSectionScrolling",
            trigger: thisSection[0],
            start: "top top",
            end: "+=" + thisAnimWrapWidth,
            // end: "+=3000",
            animation: horizontalSectionTween,
            pin: "#pinThis-" + i,
            anticipatePin: 1,
            scrub: true,
            onUpdate: self => {
                if (self.isActive) {
                    thisAnimWrap.css({"top": scrollPositionY + "px"});
                    console.log('update');
                    thisPinWrap.css('overflow', 'initial');

                }
            },
            onLeave: ({progress, direction, isActive}) => {
                thisAnimWrap.css({"top": `${totalH}px`});
                console.log('onLeave');
            },
            onLeaveBack: ({progress, direction, isActive}) => {
                thisAnimWrap.css({"top": ""});
                console.log('onLeaveBack');
            }
        });


    })

}

function cursor_event() {


    $('.enter_scroll').mouseenter(function () {

        $('#flag').addClass('on2');
        $('.ch-img img').attr('src','intro/scroll_01.png');
    }).mouseleave(function () {
        $('#flag').removeClass('on2');
    })


    $('#section01 .container02 .items05').mouseenter(function () {

        console.log('enterrrrrr');
        $('#flag').addClass('on2');
        $('.ch-img img').attr('src','intro/over_button/click.png');
    }).mouseleave(function () {
        $('#flag').removeClass('on2');
    })


}


(function () {


    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0,
        $flag = $("#flag");


    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 32);
        $yp += (($mouseY - $yp) / 32);
        $flag.css({left: ($xp - $flag.width() * 0.5) + 'px', top: ($yp - $flag.height() * 0.5) + 'px'});
    }, 1);


    cursor_event();


})()


// 페이지별 자바스크립트 정의
const pageFunc = {
    home: () => {
        console.log('home 도착!');

        $('#section01 ').addClass('on');


        $('#section01').click(function () {
            $('#section02').addClass('on');

            setTimeout(()=>{
                $('#flag > div').css('border','1px solid transparent');
            },800);
        });


        const stage = document.querySelector('#section02');
        const container = Scrollbar.init(stage, {
            damping: 0.1,
            delegateTo: stage,
            continuousScrolling: true,
            alwaysShowTracks: false,
        });
        container.setPosition(0, 0);
        container.track.xAxis.element.remove();
        // Scrollbar.detachStyle();


        ScrollTrigger.scrollerProxy("body", {

            scrollTop(value) {

                if (arguments.length) {
                    container.scrollTop = value;
                }

                return container.scrollTop;

            }
        });


        let textList = $('#section02 .text01 > div');
        let numList = $('#section02 .page_number > div');

        /* 스 크 롤 이 벤 트 영 역 */
        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            console.log(scrollTop);


            $('#section02 .circle_fix').css('transform', `translateY(${scrollTop}px)`);
            $('#section02 .main_image01').css('transform', ` translateY(-50%) rotate(-${scrollTop * 0.01}deg)`);
            $('#section02 .scroll .inner').css('transform', ` translate(${scrollTop * 0.01}px)`);


            textList.removeClass('on');
            numList.removeClass('on');


            if (scrollTop >= 0 && scrollTop <= 3000) {
                textList.eq(0).addClass('on');
                numList.eq(0).addClass('on');
            }

            if (scrollTop >= 3000 && scrollTop <= 6000) {
                textList.eq(1).addClass('on');
                numList.eq(1).addClass('on');
            }

            if (scrollTop >= 6000 && scrollTop <= 9000) {
                textList.eq(2).addClass('on');
                numList.eq(2).addClass('on');
            }

            if (scrollTop >= 9000 && scrollTop <= 12000) {
                textList.eq(3).addClass('on');
                numList.eq(3).addClass('on');
            }

        });


        $('.startPoint').click(function () {

            container.scrollTo(0, 0, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });


        });


    },
    about: () => {
        console.log('about 도착!');


        const aboutVideo = document.querySelector('#about_video');


        $('#section04 .playbutton').click(function () {

            aboutVideo.play();
            $(this).fadeOut();
        });

        $('#about_video').click(function () {

            aboutVideo.pause();
            $('#section04 .playbutton').fadeIn();
        });


        (function () {


            const stage = document.querySelector('#about');
            const container = Scrollbar.init(stage, {
                damping: 0.1,
                delegateTo: stage,
                continuousScrolling: true,
                alwaysShowTracks: false,
            });
            container.setPosition(0, 0);
            container.track.xAxis.element.remove();
            // Scrollbar.detachStyle();


            ScrollTrigger.scrollerProxy("body", {

                scrollTop(value) {

                    if (arguments.length) {
                        container.scrollTop = value;
                    }

                    return container.scrollTop;

                }
            });


            /* 스 크 롤 이 벤 트 영 역 */
            container.addListener((e) => {

                let scrollTop = container.scrollTop;
                console.log(scrollTop);

                if (scrollTop >= 1) {
                    $('#section03').addClass('on');
                    $('#section04').addClass('on');
                } else {
                    $('#section03').removeClass('on');
                    $('#section04').removeClass('on');
                }

                if (scrollTop >= 2600) {
                    $('.editorial01').addClass('on');
                } else {
                    $('.editorial01').removeClass('on');
                }

                if (scrollTop >= 2600) {
                    $('.editorial02').addClass('on');
                } else {
                    $('.editorial02').removeClass('on');
                }

                if (scrollTop >= 3360) {
                    $('.editorial03').addClass('on');
                } else {
                    $('.editorial03').removeClass('on');
                }

                if (scrollTop >= 3542) {
                    $('.editorial05').addClass('on');
                } else {
                    $('.editorial05').removeClass('on');
                }

                if (scrollTop >= 3580) {
                    $('.editorial04').addClass('on');
                } else {
                    $('.editorial04').removeClass('on');
                }

                if (scrollTop >= 4250) {
                    $('.editorial06').addClass('on');
                } else {
                    $('.editorial06').removeClass('on');
                }

                if (scrollTop >= 4682) {
                    $('.editorial07').addClass('on');
                } else {
                    $('.editorial07').removeClass('on');
                }


                if (scrollTop >= 5600) {
                    $('.text_premium_collection').addClass('on');
                } else {
                    $('.text_premium_collection').removeClass('on');
                }

                if (scrollTop >= 6300) {
                    $('.text01_premium_collection').addClass('on');
                } else {
                    $('.text01_premium_collection').removeClass('on');
                }

                if (scrollTop >= 6300) {
                    $('.text02_premium_collection').addClass('on');
                } else {
                    $('.text02_premium_collection').removeClass('on');
                }

                if (scrollTop >= 7000) {
                    $('.text03_premium_collection').addClass('on');
                } else {
                    $('.text03_premium_collection').removeClass('on');
                }

                if (scrollTop >= 7087) {
                    $('.text_sacred_profane').addClass('on');
                } else {
                    $('.text_sacred_profane').removeClass('on');
                }

                if (scrollTop >= 7230) {
                    $('.sacred_profane').addClass('on');
                } else {
                    $('.sacred_profane').removeClass('on');
                }


                if (scrollTop >= 8600) {
                    $('#section09').addClass('on');
                } else {
                    $('#section09').removeClass('on');
                }

                if (scrollTop >= 1008) {
                    $('.editorial11').addClass('on');
                } else {
                    $('.editorial11').removeClass('on');
                }

                if (scrollTop >= 11200) {
                    $('#section10').addClass('on');
                } else {
                    $('#section10').removeClass('on');
                }

                if (scrollTop >= 12600) {
                    $('#section11').addClass('on');
                } else {
                    $('#section11').removeClass('on');
                }

                if (scrollTop >= 13900) {
                    $('#section12').addClass('on');
                } else {
                    $('#section12').removeClass('on');
                }

                if (scrollTop >= 14600) {
                    $('#section13').addClass('on');
                } else {
                    $('#section13').removeClass('on');
                }


                // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

            });


            $('.startPoint').click(function () {

                container.scrollTo(0, 0, 600, {
                    callback: () => console.log('done!'),
                    easing: easing.easeInOutCirc,
                });


            });

        })()


    },
    love: () => {
        console.log('love 도착!');

        (function () {


            const stage = document.querySelector('#love');
            const container = Scrollbar.init(stage, {
                damping: 0.1,
                delegateTo: stage,
                continuousScrolling: true,
                alwaysShowTracks: false,
            });
            container.setPosition(0, 0);
            container.track.xAxis.element.remove();
            // Scrollbar.detachStyle();


            ScrollTrigger.scrollerProxy("body", {

                scrollTop(value) {

                    if (arguments.length) {
                        container.scrollTop = value;
                    }

                    return container.scrollTop;

                }
            });


            /* 스 크 롤 이 벤 트 영 역 */
            container.addListener((e) => {

                let scrollTop = container.scrollTop;
                console.log(scrollTop);


                $('#fix_section').css('transform', `translateY(${scrollTop}px)`);


                $('#fix_section .left_box').css('transform', `translate(${scrollTop * 0.4}px,-${scrollTop * 1.25}px)`);

                $('#fix_section .right_box').css('transform', `translate(-${scrollTop * 0.4}px,${scrollTop * 1.25}px)`);


                if (scrollTop >= 2000) {
                    $('#fix_section').addClass('on');
                } else {
                    $('#fix_section').removeClass('on');
                }


            });


            $('.startPoint').click(function () {

                container.scrollTo(0, 0, 600, {
                    callback: () => console.log('done!'),
                    easing: easing.easeInOutCirc,
                });


            });

        })()

    },
    category: () => {

        let value = 0;

        console.log('category 도착!');

        const category = $('#category');
        const leftElem = $('.long_text .inner');
        const rightElem = $('#right_box .text_container .inner');
        const imgList = $('.img_necklace > div');
        let leftTop;
        let rightTop;


        category.on('wheel', function (e) {

            console.log();

            let v = e.originalEvent.deltaY;

            leftTop = leftElem[0].getBoundingClientRect().top;
            rightTop = rightElem[0].getBoundingClientRect().top;
            console.log(rightTop);

            /*        if(leftTop < -3000){
                        console.log('down');
                    }
        */


            // 오차범위 800 ~ -10000 까지

            if (rightTop <= 800 && rightTop >= 0) {
                imgList.removeClass('on');
                imgList.eq(0).addClass('on');
            }


            if (rightTop <= 0 && rightTop >= -1000) {
                imgList.removeClass('on');
                imgList.eq(1).addClass('on');
            }


            if (rightTop <= -1000 && rightTop >= -2000) {
                imgList.removeClass('on');
                imgList.eq(2).addClass('on');
            }


            if (rightTop <= -2000 && rightTop >= -3000) {
                imgList.removeClass('on');
                imgList.eq(3).addClass('on');
            }


            if (rightTop <= -4000 && rightTop >= -5000) {
                imgList.removeClass('on');
                imgList.eq(0).addClass('on');
            }

            if (rightTop <= -5000 && rightTop >= -6000) {
                imgList.removeClass('on');
                imgList.eq(1).addClass('on');
            }

            if (rightTop <= -6000 && rightTop >= -7000) {
                imgList.removeClass('on');
                imgList.eq(2).addClass('on');
            }


            if (rightTop <= -7000 && rightTop >= -8000) {
                imgList.removeClass('on');
                imgList.eq(3).addClass('on');
            }

            if (rightTop <= -8000 && rightTop >= -9000) {
                imgList.removeClass('on');
                imgList.eq(0).addClass('on');
            }


            if (rightTop <= -9000 && rightTop >= -10000) {
                imgList.removeClass('on');
                imgList.eq(1).addClass('on');
            }


            if (v < 0) { // up

                TweenMax.to('#left_box .long_text .inner', .5, {
                    y: '+=200',
                    onUpdate: () => {

                        if (leftTop > 800) {


                            TweenMax.set('#left_box .long_text .inner', {
                                y: -5890,
                            })
                        }
                    }
                })


                TweenMax.to('#right_box .text_container .inner', .5, {
                    y: '-=200',
                    onUpdate: () => {

                        if (rightTop < -10000) {

                            // console.log('upupppp')

                            // console.log('upupppp')
                            TweenMax.set('#right_box .text_container .inner', {
                                y: 5800,
                            })
                        }
                    }
                })


            } else {  //down
                TweenMax.to('#right_box .text_container .inner', .5, {
                    y: '+=200',
                    onUpdate: () => {

                        if (rightTop > 800) {

                            // console.log('upupppp')

                            console.log('upupppp')
                            TweenMax.set('#right_box .text_container .inner', {
                                y: -5500,
                            })
                        }
                    }
                })

                TweenMax.to('#left_box .long_text .inner', .5, {
                    y: '-=200',
                    onUpdate: () => {

                        if (leftTop < -8400) {


                            TweenMax.set('#left_box .long_text .inner', {
                                y: 3800,
                            })
                        }
                    }
                })


            }

            // console.log(value);

        });

    },
    menu: () => {
        console.log('menu 도착!')
    },
    story: () => {
        console.log('story 도착!')

            // window.location.reload();



        const container = document.querySelector('#story');


          let bodyScrollBar = Scrollbar.init(container, {damping: 0.1, delegateTo: container});


        ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
                if (arguments.length) {
                    bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
        });


        bodyScrollBar.addListener(({offset}) => {
            scrollPositionX = offset.x;
            scrollPositionY = offset.y;

            console.log(scrollPositionY);

            if (scrollPositionY >= 900) {

                $('#sec01 .txt_container .stroke').addClass('on');
            } else {
                $('#sec01 .txt_container .stroke').removeClass('on');
            }

            if (scrollPositionY >= 1700) {

                $('#sec02 .txt_container02 .stroke02').addClass('on');
            } else {
                $('#sec02 .txt_container02 .stroke02').removeClass('on');
            }

            if (scrollPositionY >= 5000) {

                $('#sec03 .txt_container03 .stroke03').addClass('on');
            } else {
                $('#sec03 .txt_container03 .stroke03').removeClass('on');
            }


        });


        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove();


        bodyScrollBar.addListener(ScrollTrigger.update);


        storyFunc();





        // tt.getAll().forEach(t => t.kill());


        console.log('eeeee');


    }

};


const pagesInfo = {
    home: {
        addAnimation: function () {
            pageFunc.home();
        },
        removeAnimation: function () {

            console.log('bye');
        }
    },
    about: {
        addAnimation: function () {

            pageFunc.about();

        },
        removeAnimation: function () {


        }
    },
    love: {
        addAnimation: function () {

            pageFunc.love();

        },
        removeAnimation: function () {


        }
    },
    category: {

        addAnimation: function () {

            pageFunc.category();

        },
        removeAnimation: function () {


        }
    },
    menu: {

        addAnimation: function () {

            pageFunc.category();

        },
        removeAnimation: function () {


        }
    },
    story: {

        addAnimation: function () {

            pageFunc.story();

        },
        removeAnimation: function () {


        }
    }
};


function leavePageTransition(data) {

    let tl = gsap.timeline();

    $('#flag').removeClass('on2');
    $('#flag > div').css('border','1px solid #fff');

    // console.log
    setTimeout(() => {
        $('#menu').removeClass('on');
    }, 500)


    TweenMax.to('#menu > div', 1, {
        // delay:.5,
        y: 100,
        opacity: 0,
        stagger: -0.1,
        onComplete: () => {
            clicker = true;

        }
    })


    const currentPage = data.current;

    if(data.current.namespace === 'story'){
        // console.log('스토리 떠났다.')

        data.current.container.remove();


        // tt.kill()
        ScrollTrigger.kill();



    }



    tl.to('.loading-screen', .5, {
        y: 0,
        ease: Power3.easeInOut,
    })
    tl.to('.loading-screen', .5, {
        y: -innerHeight,
        ease: Power3.easeInOut,
    })
    tl.set('.loading-screen', {
        y: innerHeight
    })


    /*
        if(currentPage.namespace === 'home'){
            console.log('home 떠난다 ')

            tl.to("h1", {
                duration: 0.5,
                scale: 2,
                opacity: 0,
                ease: "Expo.easeInOut",
            });

        }else if(currentPage.namespace === 'about'){
            console.log('about 떠난다')

            tl.to("h1", {
                duration: 0.5,
                x: 500,
                opacity: 0,
                ease: "Expo.easeInOut",
            });

        }else if(currentPage.namespace === 'love'){
            console.log('love 떠난다')

            tl.to("h1", {
                duration: 0.5,
                y:500,
                opacity: 0,
                ease: "Expo.easeInOut",
            });
        }*/


    // tl.set("h1", { left: "-100%" });
}


function startAnimation() {
    // console.log('start animation');
    // var tl = gsap.timeline();
    // tl.from(".animate-this", { duration: 0.5, y: 30, opacity: 0, stagger: 0.2, delay: 0.1 });
}


function enterPageTransition(pageData) {
    clicker = true;
    console.log(clicker);
    const currentPage = pageData.current;
    const nextPage = pageData.next;


    $('.menu').fadeIn();
    $('#flag').removeClass('on');
    cursor_event();


    var tl = gsap.timeline();

    /*
        tl.to("h1", {
            duration: 0.5,
            scale: 1,
            opacity: 1,
            ease: "Expo.easeInOut",
        });


    */

    pagesInfo[nextPage.namespace].addAnimation();
    pagesInfo[currentPage.namespace].removeAnimation();
}


$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    // data.current.container.remove();

                    leavePageTransition(data);
                    await delay(500);
                    done();
                },

                async beforeEnter(data) {
                    // ScrollTrigger.getAll().forEach(t => t.kill());
                },

                async enter(data) {
                    enterPageTransition(data);
                },

                async once(data) {

                    enterPageTransition(data);
                },
            },
        ],
    });
});
