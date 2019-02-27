var stream=require('fs');

stream.readFile('archivo.txt','utf-8',(err,data)=>{
    if (err)console.log(err);
    else {
        let lines=data.split("\r\n");
        lines.forEach(function (data) {
            let row=data.split(",");
            console.log("No. Consecutivo: "+row[0]);
            console.log("#Control: "+row[1]);
            console.log("Nombre: "+row[2]);
            console.log("Calificacion: "+row[3]);
            console.log("------------------------");
        });
    }
});