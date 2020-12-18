var removeEl = document.getElementsByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

var removeEl = document.getElementById('header');
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

var removeEl = document.getElementsByTagName('h2')[0];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);

for (let i = 0; i < 3; i++) {
    var removeEl = document.getElementsByTagName('li')[i];
    var containerEl = removeEl.parentNode;
    containerEl.removeChild(removeEl);
}
