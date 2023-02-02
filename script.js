fetch('data.json').then(function(response) { 
    response.json().then(function(data){ 
        console.log(data);
        for (let numCase = 0; numCase < data.length; numCase++) {
            const element = data[numCase]
            console.log(numCase)
            document.querySelector(".liste-analogies").innerHTML += "<div class='block' class='"+ element.id +"'><h2>Si j’étais "+ element.anal + ", je serais "+ element.val+ " car " +element.explication+"</h2><img src= "+element.images+"></div>";
            
        }
    })
 }) 
 
 fetch(urlVisitee).then(function(response) {
    response.json().then(function(data){
        console.log("Réponse reçue : ")
        console.log(data);
    })
 })  