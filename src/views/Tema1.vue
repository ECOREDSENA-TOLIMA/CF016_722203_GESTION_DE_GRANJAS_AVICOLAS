<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan de contingencia

    p.mb-5(data-aos="flip-down") La contingencia hace referencia a la posibilidad que ocurra algo o no, por tal motivo, los planes de contingencia son necesarios para controlar una determinada situación de emergencia, brindando una reacción rápida y positiva, garantizando la continuidad del funcionamiento de la producción avícola frente a cualquier eventualidad, ya sean personas, equipos o materiales.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Tipos

    p.mb-4(data-aos="flip-down") Para los procesos en la producción avícolas es necesario identificar los posibles riesgos que se pueden presentar en cada una de las fases o ciclos productivos, para así determinar qué tipo de plan de contingencia es necesario planificar e implementar.
    p.mb-5(data-aos="flip-down") Según (Merino, 2013) se pueden encontrar tres (3) tipos de planes de contingencia, los cuales se describen a continuación:
    
    
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-1.svg' alt='')
          .tarjeta.color-primario
            .text-white.p-4
              h4.texto-negro.text-center Plan de respaldo
              p.texto-negro Es aquel que se encarga de determinar las medidas de prevención, es decir, las que se tienen que llevar a cabo con el claro objetivo de evitar que pueda tener lugar la materialización de una amenaza en concreto.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-2.svg' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.texto-negro.text-center Plan de emergencia
              p.texto-negro Está conformado por el conjunto de acciones que hay que llevar a efecto durante la materialización de la amenaza y también después de la misma, y es que gracias a aquellas se conseguirá reducir y acabar con los efectos negativos de aquella.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-3.svg' alt='')
          .tarjeta.color-acento-botones
            .p-4
              h4.text-center Plan de recuperación
              p El claro objetivo de recuperar el estado en el que se encontraban las cosas antes de que el riesgo se materializara.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Características 

    p.mb-5(data-aos="flip-down") Para poder implementar los planes de contingencia se deben tener en cuenta cuatro etapas básicas: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="La evaluación")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-4.svg', alt='')
        .col-md-9.col-lg
          p Es importante realizar y aplicar diferentes sistemas para evaluar la producción, así se puede determinar en qué área se requiere un plan de contingencia.
      .row(titulo="La planificación")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-5.svg', alt='')
        .col-md-9.col-lg
          p Posterior a la evaluación se realiza el respectivo diseño de los planes de contingencia, teniendo en cuenta en que áreas, procesos o actividades se pueda requerir.
      .row(titulo="Las pruebas de viabilidad")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-6.svg', alt='')
        .col-md-9.col-lg
          p Una vez se tengan los planes de contingencia, se debe revisar su viabilidad para determinar qué tan eficaz es o si es necesario modificarlo.
      .row(titulo="La ejecución")
        .col-md-3.col-lg-2.col-12.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/tema1-7.svg', alt='')
        .col-md-9.col-lg
          p Como etapa final, después de la evaluación, planificación y pruebas de viabilidad, se realiza la respectiva ejecución de los planes de contingencia en cada proceso productivo de la industria avícola, en casos de emergencias.

    p.mb-5(data-aos="flip-down") Las características que deben tener los planes de contingencia son:
      
    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold ● 
        | Establecer objetivos claros.
      li 
        span.text-bold ● 
        | Ser dinámico.
      li 
        span.text-bold ● 
        | Permitir modificaciones.
      li 
        span.text-bold ● 
        | Tener un plan de acción.
      li 
        span.text-bold ● 
        | Ser revisados y actualizados de manera periódica.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
