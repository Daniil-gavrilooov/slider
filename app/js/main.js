$(document).ready(function() {
    let position = 0;
    const slidesToShow = 6;
    const slidesToScroll = 2;
    const container = $('.slider__container');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const btnPrev = $('.btn__prev')
    const btnNext = $('.btn__next')
    const itemsCount = item.length;
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    console.log(container.width())

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth - 18,
        });
    });

    btnNext.click(function() {

        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow *itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

       setPostion()
       checkBtns()
       console.log(position)
    });
    btnPrev.click(function() {
            
        const itemsLeft = Math.abs(position) / itemWidth;

       position +=  itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPostion()
        checkBtns()
        console.log(position)
    });

    const setPostion = () => {
        track.css({
            transform: `translateX(${position}px)`,
        });
    }
    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth
        )
    }

    checkBtns()

    

})