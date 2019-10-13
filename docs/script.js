const db = firebase.firestore();

function writeData() {
    db.collection('users').doc('firstUser').set({
        name:'Jimmy Smith'
    })
    .then(function(){
        console.log('data written');
    })
    .catch(function(error){
        console.error('Error adding document', error);
    });
}