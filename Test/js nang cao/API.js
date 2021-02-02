
var ulr='https://5f47e14295646700168da11e.mockapi.io/Classs';
fetch(ulr,{
    method : "get"
})
.then(response => response.json())
.then(data=>{
    console.log(data);
    if(data.length > 0){
        var content = "";   // khai báo content dạng chuỗi
        data.forEach(element => {
            content += `
            <tr id="obj${element.id}">
                <th class = "ID">${element.id}
                <th class = "create">${element.createdAt}</th>
                <th class = "name">${element.name}</th>
                <th>
                    <img src="${element.avatar}" class = "img img-avatar " width="100px">
                </th>
                <th>
                    <button class="btn btn-sm btn-primary" onclick="DeleteForever(${element.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="Delete(${element.id})">Delete</button>

                </th>
            </tr>    
            `
        
        });
        document.getElementById('body').innerHTML = content;

    }

});

function Delete(id){
    let node = document.getElementById('obj'+id);
    node.parentNode.removeChild(node);
}

function DeleteForever(id){
    let node = document.getElementById('obj'+id);
    node.parentNode.removeChild(node);

    var ulrRemove = ulr + "/" + id;
    console.log(ulrRemove);
    fetch(ulrRemove,{
        method : "DELETE"
    })
    .then(response => response.json())
    .then(data=>{
        console.log(data);
    })
}
