<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Aplicación y estrategias

    p.mb-4(data-aos="flip-down") Para la aplicación de las acciones correctivas es necesario ubicar exactamente donde se está generando la causa real del problema o situación, teniendo un efecto preciso de las acciones tomadas para el desarrollo positivo de estas medias de solución.
    p.mb-5(data-aos="flip-down") Según Torres (2019), se pueden organizar las acciones correctivas en cinco (5) pasos, para su mayor entendimiento:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 d-flex align-items-stretch" data-aos="flip-down")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/uno.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Entiende la no conformidad o hallazgo encontrado.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/dos.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Corrección para cerrar la no conformidad.

      .row.justify-content-center.mb-3(style="width:-webkit-fill-available")
        .col-12(style="width:100%")
          .tarjeta-avatar(style="width:100%")
            img(src='@/assets/curso/temas/tema4/tres.svg' alt='')
            .tarjeta.color-acento-contenido.p-4(style="width:100%")
              p.text-center.texto-negro Analiza la causa raíz.
              
      .row.justify-content-center.mb-3(style="width:-webkit-fill-available")
        .col-12(style="width:100%")
          .tarjeta-avatar(style="width:100%")
            img(src='@/assets/curso/temas/tema4/cuatro.svg' alt='')
            .tarjeta.color-acento-botones.p-4(style="width:100%")
              p.text-center Establece la acción correctiva.
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/cinco.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Verifica la eficacia de la acción correctiva.
      
    p.mb-4(data-aos="flip-down") Es importante implementar acciones correctivas dentro de los procesos productivos después de una auditoría, ya sea externa o interna.
    p.mb-5(data-aos="flip-down") Como estrategia es necesario tener implementado el sistema de gestión de la calidad en los procesos de las granjas avícolas, porque nos permiten el buen funcionamiento organizacional, debido a que estos estarán acompañados de procesos de auditorías internas y externas, que conducen a cumplir con todos los protocolos y normatividad vigente.


    

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
