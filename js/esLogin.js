
let elements = document.getElementsByClassName('message error');
let myCollection = Array.from(elements)

if(myCollection.length === 0){
    if(document.getElementById("username") != null){
        chrome.storage.sync.get("user", function(result) {
            if(result.user !== undefined){
                document.getElementById("username").value = result.user.email
                document.getElementById("password").value = result.user.password

                document.querySelector('button').click()
            }
        })
    }
}

