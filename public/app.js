const pokeTable = document.querySelector('#poke-table');
const form = document.querySelector("#add-pokemon-form");
// create element & render 
function renderPokemon(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().primaryType;
    td3.textContent = doc.data().secondaryType;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('myPokemons').doc(id).delete();
    });
    //

    pokeTable.appendChild(tr);
}

// getting data 
db.collection('myPokemons').get().then(data => {
    data.docs.forEach(doc => {
        renderPokemon(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form);
    db.collection('myPokemons').add({
        name: form.name.value,
        primaryType: form.primaryType.value,
        secondaryType: form.secondaryType.value
    });
    form.name.value = '';
    form.primaryType.value = '';
    form.secondaryType.value = '';
});
//