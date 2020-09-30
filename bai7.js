let arrList = []
let arrListItem = []


function openPopup(){
    document.getElementById("myForm").style.display = "block";
    document.getElementById("openPopup").style.display = "none";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("openPopup").style.display = "block";
}

function createNewItemLists(){
    var itemId = arrListItem.length + 1;
    var itemContent = document.getElementById("addNewListItem").value;
    document.getElementById("modalHeaderContent").innerHTML = itemContent
    let list_item = new list_items(itemId,1,itemContent);
    arrListItem.push(list_item);

    document.getElementById("newCard").innerHTML +=
        "<div onclick='openItemModal()' class=\"list-item\"" + " id = " + list_item.id + " + '>"  + "</br>" +
        "<button onclick='moveLeft(" + itemId + ")' id='leftButton'> << </button>" + "</br>" +
        "<p id= '" + list_item.id + "'>" + list_item.content + "</p>" +
        "<button onclick='moveRight("+itemId+")' id='rightButton'> >> </button>"+ "</div>"
    document.getElementById("addNewListItem").value = "";

    // document.getElementById("leftButton").style.display = "none"
}

class list_items{
    constructor(id,index,content) {
        this.id = id;
        this.index = index;
        this.content = content;
    }


}
function moveRight(itemId) {
    let myObj = document.getElementById("a"+itemId);
    myObj.remove();
    let node = document.createElement("p");
    node.appendChild(myObj);

    let obj = checkID(itemId);

    if (obj.index <3){
        if (obj.index == 1){
            obj.index ++
            document.getElementById("list2").appendChild(node);
            // document.getElementById("leftButton").style.display = "block"
        }else
        if (obj.index == 2){
            obj.index ++
            document.getElementById("list3").appendChild(node);
            // document.getElementById("rightButton").style.display = "none";
        }

    }
    console.log(itemId)

}



function moveLeft(itemId) {
    let myObj = document.getElementById(itemId);
    myObj.remove();
    let node = document.createElement("p");
    node.appendChild(myObj);

    let obj = checkID(itemId);

    if (obj.index >1){
        if (obj.index == 3){
            obj.index --
            document.getElementById("list2").appendChild(node);
            // document.getElementById("rightButton").style.display = "block";
        }else
        if (obj.index == 2){
            obj.index --
            document.getElementById("list1").appendChild(node);
            // document.getElementById("leftButton").style.display = "none";
        }

    } else {

    }
}

function checkID(itemId){
    for (let i = 0; i < arrListItem.length;i++){
        if (arrListItem[i].id == itemId){
            return arrListItem[i];
        }
    }
}

const modal = document.querySelector('#myModal');

// Events
// window.addEventListener('click', outsideClick);

// Open
function openItemModal() {
    modal.style.display = 'block';
    // overlay.addEventListener('click', () => {
    // 	const modals = document.querySelectorAll('.modal.active')
    // 	modals.forEach(modal => {
    // 		closeModal(modal)
    // 	})
}

// Close
// function outsideClick(e) {
// 	if (e.target == modal) {
// 		modal.style.display = 'none';
// 	}
// }

const overlay = document.getElementById('overlay')

























// const lists = document.querySelectorAll('.list');
//
//
//
// function openPopup(){
//     document.getElementById("myForm").style.display = "block";
// 	document.getElementById("openPopup").style.display = "none";
// }
// function closeForm(){
//     document.getElementById("myForm").style.display = "none";
// 	document.getElementById("openPopup").style.display = "block";
//
// }
// function showHide(){
//
// }
//
// function createTask(){
// 	let list_items = new list_items()
// 	list_items.createNewItems()
// 	list_items.draggable()
// }
//
// class list_items {
// 	constructor(name, createdAt) {
// 		const list_items = document.querySelectorAll('.list-item');
// 		this.name = name
// 		this.createdAt = createdAt
// 	}
// 	createNewItems(){
// 		let itemTitle = document.getElementById("addNewListItem").value;
// 		document.getElementById("newCard").innerHTML += "<div class=\"list-item\" draggable=\"true\">" + itemTitle + " " + "</div>"
// 		document.getElementById("addNewListItem").value = "";
// 	}
// 	draggable(){
// 		let draggedItem = null;
//
// 		for (let i = 0; i < list_items.length; i++) {
// 			const item = list_items[i];
//
// 			item.addEventListener('dragstart', function () {
// 				draggedItem = item;
//
// 				setTimeout(function () {
// 					item.style.display = 'none';
// 				}, 0)
// 			});
//
// 			item.addEventListener('dragend', function () {
// 				setTimeout(function () {
// 					draggedItem.style.display = 'block';
// 					draggedItem = null;
// 				}, 0);
// 			})
//
// 			for (let j = 0; j < lists.length; j ++) {
// 				const list = lists[j];
//
//
// 				list.addEventListener('dragover', function (e) {
// 					e.preventDefault();
// 				});
//
// 				list.addEventListener('dragenter', function (e) {
// 					e.preventDefault();
// 					this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
// 				});
//
// 				list.addEventListener('dragleave', function (e) {
// 					this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
// 				});
//
// 				list.addEventListener('drop', function (e) {
// 					console.log('drop');
// 					this.append(draggedItem);
// 					this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
// 				});
// 			}
// 		}
// 	}
// }
//
