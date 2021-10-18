import firebase from '../../Fire.js'

function getData(){
    
    return new Promise((resolve, reject) => {

        const response = firebase.database().ref(`/database`).once('value', function(data) {
            resolve({
                data: data.val()
            })
            reject({
                data: 'erro'
            })
        })
          
    })
}

export default getData