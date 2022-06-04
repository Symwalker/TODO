const firebaseConfig = {
    apiKey: "AIzaSyBzsrEReHRDDFkuT_kI1ywvnNR0Ru7DA7A",
    authDomain: "to-do-app-a4952.firebaseapp.com",
    projectId: "to-do-app-a4952",
    storageBucket: "to-do-app-a4952.appspot.com",
    messagingSenderId: "720580737870",
    appId: "1:720580737870:web:6b44577bc60a56ed7f3c1f"
  };
  
//   Initialize Firebase
  



  var app = firebase.initializeApp(firebaseConfig);
//   console.log(app);

// //   function saveData(){
// // }

// firebase.database().ref('todos').on('child_added',function(data){
//     // console.log(data.val());
//         var val = document.getElementById("item")

//     var trVar = document.createElement("tr")
//     var txt = document.createElement("td")
//     var editBtn = document.createElement("td")
//     var delBtn = document.createElement("td")

//     var eBtn = document.createElement("button")
//     var dBtn = document.createElement("button")

//     var val_Value = document.createTextNode(data.val().value) 
//     var ediBtnTxt = document.createTextNode("Edit") 
//     var delBtnTxt = document.createTextNode("Delete") 

//     eBtn.setAttribute("class","editBtn")
//     eBtn.setAttribute("id",data.val().key)
//     dBtn.setAttribute("class","delBtn")
//     dBtn.setAttribute("id",data.val().key)
    
//     eBtn.setAttribute("onClick","editBtn(this)")
//     dBtn.setAttribute("Onclick","deleBtn(this)")
    
//     txt.appendChild(val_Value)
//     editBtn.appendChild(eBtn)
//     delBtn.appendChild(dBtn)
    
//     eBtn.appendChild(ediBtnTxt)
//     dBtn.appendChild(delBtnTxt)
    
//     trVar.appendChild(txt)
//     trVar.appendChild(editBtn)
//     trVar.appendChild(delBtn)
    
    
//     txt.setAttribute("class","firstTd")
//     editBtn.setAttribute("class","secondtTd")
//     delBtn.setAttribute("class","thirdTd")

//     var  tbVar = document.getElementById("table")
//     tbVar.appendChild(trVar)
//     val.value = ""

// })

// function addItem(){

// var todoItem = document.getElementById("item")
// var database = firebase.database().ref("todos")
// var key = database.push().key
// // console.log(key);
// var toto = {
//     value:todoItem.value,
//     key:key
// }
// database.child(key).set(toto);




    
// }


// function deleBtn(e){
//     firebase.database().ref('todos').child(e.id).remove()
// e.parentNode.parentNode.remove()
// // console.log(e.id);

// }
// function editBtn(e){
//     // console.log(e.id);
//     var val = e.parentNode.previousSibling.innerText;
//     var uptval = prompt("enter new Text",val) 
//     var eTodo = {
//         value: uptval,
//         key:e.id
//     }
//     firebase.database().ref('todos').child(e.id).set(eTodo)

//     // console.log(eTodo);
//     e.parentNode.previousSibling.innerText = uptval
//     }

//     // we can also use this iff statement
// // if(!uptvel.trim()){
// //     alert("Empty Input,no Changes made",vel)
// // }
// // else{
// //     e.parentNode.parentNode.firstChild.innerText=uptvel

    
// //     }


// // abhi yeh krna baki he....
// function deleteAll(){
//     var dtData = document.getElementById("table")
//     dtData.innerHTML = "";
//     firebase.database().ref('todos').remove()
// }



firebase.database().ref('todos').on("child_added",function(data){
    var val = document.getElementById('item')
    
    var trVar = document.createElement('tr')

    var oTd  = document.createElement('td')
    var val_Value = document.createTextNode(data.val().value)
    oTd.setAttribute("class","firstTd")
    oTd.appendChild(val_Value)
    console.log(val_Value);

    var editBtnTd = document.createElement('td')
    editBtnTd.setAttribute("class","secondTd")
    var editBtn =document.createElement('button')
    editBtn.setAttribute("class","editBtn")
    editBtn.setAttribute("onClick","eBtn(this)")
    editBtn.setAttribute("id",data.val().key)

    var ediBtnTxt = document.createTextNode("EDIT")
    editBtnTd.appendChild(editBtn)
    editBtn.appendChild(ediBtnTxt)


    var delBtnTd = document.createElement('td')
    delBtnTd.setAttribute("class","thirdTd")
    var delBtn = document.createElement('button')
    delBtn.setAttribute("class","delBtn")
    delBtn.setAttribute("onClick","dBtn(this)")
    delBtn.setAttribute("id",data.val().key)
    var delBtnTxt = document.createTextNode("DELETE")
    delBtnTd.appendChild(delBtn)
    delBtn.appendChild(delBtnTxt)

    trVar.appendChild(oTd)
    trVar.appendChild(editBtnTd)
    trVar.appendChild(delBtnTd)

    var tab = document.getElementById('table')
    tab.appendChild(trVar)
    val.value = ""

})

    function addItem(){
        var val = document.getElementById('item')
        var database = firebase.database().ref('todos')
        var key = database.push().key

        var items = {
            value : val.value,
            key : key
        }
        console.log(key);

        database.child(key).set(items)



    }


    function eBtn(e){
        var val = e.parentNode.parentNode.firstChild.innerText 
        var uptval = prompt("Enter new value",val)
        var eTodo = {
            value:uptval,
            key:e.id
        }
        firebase.database().ref('todos').child(e.id).set(eTodo)
        e.parentNode.parentNode.firstChild.innerText = uptval
        
    }
    function dBtn(e){
        e.parentNode.parentNode.remove()
        firebase.database().ref('todos').child(e.id).remove()

        
    }


    function deleteAll() {
        var dele = document.getElementById('table')
        dele.innerHTML = ""
        firebase.database().ref('todos').remove()
    }
