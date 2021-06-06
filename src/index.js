import Person from './person'
import './styles/style.css'
import './styles/style.less'
import './styles/style.scss'
import logo from './images/icon.png'


const Elena = new Person('Elena', 30, 'Russia')

console.log(Elena)

document.querySelector('.img img').src = logo