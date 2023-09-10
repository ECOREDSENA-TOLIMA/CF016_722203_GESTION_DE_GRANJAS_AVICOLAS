<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.mb-4(data-aos="fade-down")
      .col-12
        p Se invita a revisar el siguiente video para que se comprendan algunas indicaciones iniciales del proceso de aprendizaje y los elementos de abordaje acerca del control en la ejecución de los procesos productivos de la granja avícola.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/B-Jg12XdQso" title="Ejecución y evaluación de procesos productivos en granjas avícolas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Ejecución y evaluación de procesos productivos en granjas avícolas

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
