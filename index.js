novaString = ''

const regex = /[^a-z\s\']/g

function showError() {
    document.getElementById("box-cod").style.transition = "all 0.5s"
    document.getElementById("box-cod").style.outline = "solid red"

    setTimeout(() => {
        document.getElementById("box-cod").style.transition = "all 1.5s"
        document.getElementById("box-cod").style.outline = "solid #FFAFB8"
    }, 1000)
    setTimeout(() => document.getElementById("box-cod").style.outline = "none", 1700)
    document.getElementById("box-cod").placeholder = "campo vazio!"
    setTimeout(() => document.getElementById("box-cod").placeholder = "digite seu texto", 1500)
}

function showCopy() {
    document.getElementById("copy").hidden = false
    setTimeout(() => {
        document.getElementById("copy").hidden = true
        document.getElementById('box-dec').innerText = ''
    }, 250000)
}

function Codificar(palavra) {
    palavra = document.getElementById("box-cod").value
    arr = palavra.split("")

    if (palavra[palavra.search(regex)]) {
        showError()
    } else {

        if (document.getElementById('box-cod').value !== '') {
            showCopy()
            for (i = 0; i < arr.length; i++) {
                if (arr[i] === 'e') {
                    arr[i] = 'enter'
                }
                else if (arr[i] === 'i') {
                    arr[i] = 'imes'
                }
                else if (arr[i] === 'a') {
                    arr[i] = 'ai'
                }
                else if (arr[i] === 'o') {
                    arr[i] = 'ober'
                }
                else if (arr[i] === 'u') {
                    arr[i] = 'ufat'
                }
                novaString += arr[i]
            }

            setTimeout(() => novaString = '', 0.5)
            return document.getElementById('box-dec').innerText = novaString

        } else {
            showError()

        }

    }

}

function Decodificar(palavra) {
    palavra = document.getElementById("box-cod").value
    if (document.getElementById('box-cod').value !== '') {
        if (palavra[palavra.search(regex)]) {
            showError()
        } else {
            showCopy()
            palavra = document.getElementById("box-cod").value
            resultadoCod = palavra
                .replaceAll('ai', 'a')
                .replaceAll('enter', 'e')
                .replaceAll('imes', 'i')
                .replaceAll('ober', 'o')
                .replaceAll('ufat', 'u')

            return document.getElementById('box-dec').innerText = resultadoCod
        }
    } else {
        showError()
    }
}

function Copy() {
    navigator.clipboard.writeText(document.getElementById("box-dec").value)
    if (document.getElementById('box-dec').value === '') {
        alert("Não há nada para copiar")
    } else {
        document.getElementById('copy').hidden = false
        document.getElementById('copy').innerText = "copiado"
        setTimeout(() => document.getElementById('copy').innerText = "copiar", 1000)
        setTimeout(() => document.getElementById('copy').hidden = true, 3000)
    }
}