const granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'jungle.jpg',
        blendingMode: 'multiply',
        poaition: ['center','bottom']
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});

var quotes = [
    {
        content: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
        author: "Albert Einstein"
    },
    {
        content: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        content: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        content: "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
        author: "Richard Feynman"
    },
    {
        content: "It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.",
        author: "Jacob Bronowski"
    }
];

$(document).ready(function(){
    $(this).click(() => {
        splitting('.text-split', quotes[Math.floor(Math.random()*quotes.length)])
    })
    splitting('.text-split', quotes[Math.floor(Math.random()*quotes.length)])
    setInterval(() => {
        splitting('.text-split', quotes[Math.floor(Math.random()*quotes.length)])
    }, 15000)
})

function splitting(el, quote){
    let content, a
    $(el).text("").html("")

    $(el).each(function() {
        content = '“' + quote.content + '”' + '#— ' + quote.author
        a = content.split(' ').join('~')
      
        for(let i = 0; i < a.length; i+= 1) {
            if(a[i] !== '~'){
                if(a[i+1] === '~'){
                    $(this).append($('<span class="each-word fade-in">').text(a[i]+' '));
                }else{
                    if(a[i] === '#'){
                        $(this).append('<br><br>');
                    }else{
                        $(this).append($('<span class="each-word fade-in">').text(a[i]));
                    }
                    
                }
            }
        }
        
    })
    
    let elems = $('span.each-word');
    let position = ['top', 'left'];
    let min = ['-', '', '-', '', '-', ''];
    
    for(let i = 0; i < elems.length; i += 1) {
      elems[i].style.cssText = position[Math.floor(Math.random()*position.length)] + ': ' + min[Math.floor(Math.random()*min.length)] + Math.random() * 1000+'px'
    }
    
    setTimeout(() => {
        $('span.each-word').css('top', 0);
        $('span.each-word').css('left', 0);
    }, 300)

    setTimeout(() => {
        elems.removeClass('fade-in')
        elems.addClass('fade-out')
        let randomLef, rnum
        let arah = min[Math.floor(Math.random()*min.length)]
        for(let i = 0; i < elems.length; i += 1) {
            rnum = (Math.random() * 3320)
            randomLeft = rnum < 1200 ? 1200 + Math.random() * 40 : rnum
            elems[i].style.cssText = 'left : ' + arah + randomLeft + 'px'
        }
    }, 12000)
}