// $(function() { 
//     $("#btnSave").click(function() { 
//         html2canvas($("#widget"), {
//             onrendered: function(canvas) {
               
                


//                 var imageData = canvas.toDataURL("image/png");
//                 var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
//                 $("#btnSave").attr("download", "image.png").attr("href", newData);
//                 $("#img-out").append(canvas);
//                 // Clean up 

//             }
//         });
//     });
// }); 

document.getElementById("btnSave").addEventListener("click", function() {
    //Код для сохранения фрагмента HTML-страницы в виде изображения 
    html2canvas(document.querySelector("#widget")).then(canvas => { 
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "filename.png";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click(); 
    }); 
});

