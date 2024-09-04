<template>
    <section class="container" id="productos">
        <h1 class=" text-center">Contactanos</h1>
        <div class="d-flex justify-content-center">
            <form @submit.prevent class="w-75">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input id="nombre" class="form-control" type="text">
                </div>
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo Electronico</label>
                    <input id="correo" class="form-control" type="email">
                </div>
                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea id="mensaje" class="form-control" rows="5"></textarea>
                </div>
                <button type="submit" class="btn mb-3">Submit</button>
                <router-link to="/" class="float-end text-secondary"><i class="fa-solid fa-angle-left"></i>Volver a Inicio</router-link>
            </form>
        </div>
        
    </section>
</template>

<style scoped>
textarea{
    resize: none;
}
button{
    background-color: #e83e8c;
    color: #fff;
}
</style>