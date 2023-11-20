function updateCode() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const output = document.getElementById("output");

    //output.contentDocument.body.innerHTML = htmlCode + "<style>" +cssCode +"</style>";
    const combinedCode = `${htmlCode}\n<style>${cssCode}</style>\n<script>${jsCode}</script>`;
    output.srcdoc = combinedCode;

    // Actualizar el código generado en el área de texto
    document.getElementById("code-output").value = combinedCode;
}

function copyCode() {
    const codeOutput = document.getElementById("code-output");
    codeOutput.select();
    document.execCommand("copy");
}

function downloadCode() {
    const combinedCode = document.getElementById("code-output").value;
    const blob = new Blob([combinedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "codigo_generado.html";
    a.click();
}

// ...

// Cargar el código almacenado desde el almacenamiento local al cargar la página
window.addEventListener("load", function () {
    const storedCode = localStorage.getItem("codigoGenerado");
    if (storedCode) {
        document.getElementById("code-output").value = storedCode;
        
        // Dividir el código en HTML, CSS y JavaScript
        const parts = storedCode.split('<style>');
        if (parts.length === 2) {
            document.getElementById("html-code").value = parts[0];
            const cssAndJs = parts[1].split('<script>');
            if (cssAndJs.length === 2) {
                document.getElementById("css-code").value = cssAndJs[0];
                document.getElementById("js-code").value = cssAndJs[1].replace('</script>', '');
            }
        }
    }
    updateCode(); // Actualizar la vista previa
});

document.getElementById("html-code").addEventListener("input", saveGeneratedCode);
document.getElementById("css-code").addEventListener("input", saveGeneratedCode);
document.getElementById("js-code").addEventListener("input", saveGeneratedCode);

function saveGeneratedCode() {
    const combinedCode = document.getElementById("code-output").value;
    localStorage.setItem("codigoGenerado", combinedCode);
}

document.getElementById('img-logo').addEventListener('click', function() {
    window.location.href = 'index.html';
});