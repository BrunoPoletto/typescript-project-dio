function test() {
    let div = document.createElement('div');
    div.id = 'lista-atual';
    document.body.appendChild(div);
    div.innerHTML = `Lista: $thisListName} <br> Descrição: $thisListDescription} <br> ID da lista: $thisListId} <br> Filmes:`
    let ul = document.createElement('ul');
    ul.id = 'filmes-lista-atual';
    div.appendChild(ul);
    let testArray : string[] = ['Bird Box', 'Annihilation']
    for (const item of testArray) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(item));
      ul.appendChild(li);
    }
   
  }
  