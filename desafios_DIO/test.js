function test() {
    var div = document.createElement('div');
    div.id = 'lista-atual';
    document.body.appendChild(div);
    div.innerHTML = "Lista: $thisListName} <br> Descri\u00E7\u00E3o: $thisListDescription} <br> ID da lista: $thisListId} <br> Filmes:";
    var ul = document.createElement('ul');
    ul.id = 'filmes-lista-atual';
    div.appendChild(ul);
    var testArray = ['Bird Box', 'Annihilation'];
    for (var _i = 0, testArray_1 = testArray; _i < testArray_1.length; _i++) {
        var item = testArray_1[_i];
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    }
}
