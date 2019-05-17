const child_process = require("child_process")

function button_clicked() {
    child_process.exec("python ./test.py", (err, stdout, stderr) =>{
        document.getElementById("my-label").innerText = stdout;
    });
}