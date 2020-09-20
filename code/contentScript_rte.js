document.addEventListener('DOMContentLoaded', init, false);

function init() {
    console.log('HELLO THERE I RAN')
    let links = document.querySelectorAll('a[href*="/news/"]');
    console.log('[DEBUG] Amount of links is ' + links.length)
    let tooltips = []
    for (let link of links) {
        let tooltip = make_tooltip()
        tooltips.push(tooltip)
        link.appendChild(tooltip);
    }
    // window.onmousemove = function (e) {
    //     let x = e.clientX,
    //         y = e.clientY
    //     for (let tooltip of tooltips) {
    //         tooltip.style.top = (y + 5) + 'px';
    //         tooltip.style.left = (x + 5) + 'px';
    //     }
    // };
}

function make_tooltip(){
    let tooltip = document.createElement('span');
    tooltip.innerHTML = 'This is a tooltip'
    tooltip.className = 'twtooltip'
    return tooltip;
}