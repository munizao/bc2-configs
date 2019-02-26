import images from '../data/images.js';
import makeTemplateForList from './make-template-for-list.js';

const imageList = document.getElementById('image-list');
images.forEach(image => makeTemplateForList(image));