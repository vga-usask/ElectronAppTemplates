const child_process = require("child_process")

function button_clicked() {
    var command = process.platform == "win32" ? "python" : "python3";
    child_process.exec(command + " ./test.py", (err, stdout, stderr) => {
        alert(stdout);
    });
}

