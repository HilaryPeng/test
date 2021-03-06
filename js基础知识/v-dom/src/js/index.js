import {createElement, render, renderDom} from './virtualDom'
const vDom = createElement('ul',
{
    class:'list',
    style:'width: 300px;height: 300px; background-color:orange'
},
[
    createElement('li', {class: 'item', 'data-index' : 0}, 
        [
            createElement('p', {class: 'text'}, ['第一个列表项']),
        ]),
    createElement('li', {class: 'item', 'data-index' : 1}, 
        [
            createElement('p', {class: 'text'}, [
                createElement('span', {class: 'title'}, ['第二个列表项'])
            ]),
        ]),
    createElement('li', {class: 'item', 'data-index' : 2}, ['第三个个列表项'])
]);

const rDom = render(vDom);
renderDom(rDom, document.getElementById('app'))
