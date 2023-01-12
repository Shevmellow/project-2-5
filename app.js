const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart',dragstart)
item.addEventListener('dragend',dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //когда элемент находится над плейсхолдером
    placeholder.addEventListener('dragenter', dragenter) //когда мы заходим на территорию конкретного плейсхолдера
    placeholder.addEventListener('dragleave', dragleave) // когда мы перетащили элемент, но вышли оттуда
    placeholder.addEventListener('drop', dragdrop) //когда отпустили элемент

}

function dragstart(event) {
    event.target.classList.add('hold')    
    setTimeout(() => event.target.classList.add('hide'), 0)

}

function dragend(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    // console.log('drag over')
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')


}