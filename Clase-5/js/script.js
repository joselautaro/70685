document.getElementById('cotizadorForm').addEventListener('submit', function(e){
        e.preventDefault();

        //Establecemos 4 variables que nos permitan obtener el valor de los input
        const marca = document.getElementById('marca').value;

        const modelo = document.getElementById('modelo').value;

        const precio = document.getElementById('precio').value;

        const descuento = document.getElementById('descuento').value;

        if( isNaN(precio) ){
            showModal('Por favor introduce un precio valido')
        }else{
            let precioTotal = precio;

            if(!isNaN(descuento)){
                precioTotal -= descuento;
            }
        

        setTimeout(() =>{
            const cotizacionInfo = document.getElementById('cotizacionInfo');

            cotizacionInfo.innerHTML = `
            <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
            `
            showModal()
        }, 500)

        //Simular una espera de 2 segundos

        setTimeout(() =>{
            const cotizacionInfo = document.getElementById('cotizacionInfo');

            cotizacionInfo.innerHTML = `
                <p>Marca: ${marca}</p>
                <p>Modelo: ${modelo}</p>
                <p>Precio: $${precio}</p>
                <p>Descuento: ${descuento}%</p>
            `;
            showModal()
        }, 3000)
    }
})

const showModal = () =>{
    const modal = document.getElementById('myModal');

    modal.style.display = 'block';

    //Cerrar el modal cuando hacemos click en la x

    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', e =>{
        modal.style.display = 'none';
    })

    window.addEventListener('click', e =>{
        if( e.target === modal ){
            modal.style.display = 'none';
            cotizadorForm.reset();
        }
    })
}

