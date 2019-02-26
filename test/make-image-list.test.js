import images from '../data/images.js';
import './html-equal.js';

const test = QUnit.test;

function makeImageList(image) {
    const html = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
</li>`;
    return html;
}

test('test that template produces expected html', function(assert) {
    const image = images[0];
    const result = makeImageList(image);
    const expected = `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`;
    assert.htmlEqual(result, expected);
});