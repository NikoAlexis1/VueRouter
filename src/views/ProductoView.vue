<template lang="">

    <section class="d-flex justify-content-center" id="productos">
        <div class="w-50">
            <div class="p-5 mb-4">
                <div class="card">
                <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{{ nombre }}</h5>
                    <p class="card-text">{{ descripcion }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Precio: ${{ precio }}</li>
                    <li class="list-group-item">Cantidad: {{ cantidad }}</li>
                </ul>
                <div class="card-body">
                    <router-link class="card-link" to="/">Volver a inicio</router-link>
                    <a href="#" class="card-link">Comprar</a>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    props: {
        id: {
            type: Number,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        cantidad: {
            type: String,
            required: true
        }
    }
}

</script>