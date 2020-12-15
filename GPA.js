document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#calculatecontainer').onsubmit = function(){
    var text = document.querySelector('#tablist');
    var text1 = document.querySelector('#subject');
    var text2 = document.querySelector('#term');
    var text3 = document.querySelector('#credit');
    var bt = document.querySelector('#addbutton');
    
    var list = document.createElement('li');
    var topic = document.createElement('span');
    topic.innerHTML = text1.value;
    topic.innerHTML = text2.value;
    topic.innerHTML = text3.value;
    
    var deletebutton = document.createElement('button');
    deletebutton.innerHTML = 'X';
    deletebutton.onclick = function(){
        text.removeChild(list);
    };
    
    list.append(topic);
    list.append(deletebutton);
    text.append(list);
    
    return false
    }
    })
    