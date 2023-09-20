<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registro y documentación

    p.mb-4(data-aos="fade-down") Los registros son herramientas de la información, se emplean para controlar y organizar toda la información que se recolecta de cada proceso, para obtener un mejor panorama del funcionamiento de las actividades desarrolladas en las granjas avícolas y así determinar qué decisiones y acciones se deben tomar según el desempeño realizado en cada tarea. 

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos

    p.mb-4(data-aos="fade-down") Se pueden encontrar varios tipos de formatos de registros, lo ideal es escoger el adecuado de acuerdo con las necesidades de productor avícola, para así ajustarse a la mejor opción para el diligenciamiento y manejo de sus operarios, buscando que sea de fácil entendimiento y tengan claridad.

    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      ) 
      .bloque-texto-g__texto.p-4
        p.mb-0 Los registros deben llevarse diariamente, por lo cual es necesario capacitar a todos los operarios según su área de trabajo y actividad a desarrollar.  Se recomienda que sean de fácil diligenciamiento y comprensión, recordándole a quienes los diligencian la importancia de la información que plasman en ellos, debido a que de estos dependen las decisiones que se toman y las  determinaciones de si hay o no fallas en el manejo de los procesos en cada lote de aves; adicionalmente se deben archivar de manera cronológica y con la mayor precaución posible, porque por ser documentos físicos deben estar protegidos del ambiente, para su control  y análisis.

    p.mb-4(data-aos="fade-down") Se puede encontrar diferentes tipos de registros según Fenavi y Fonav (2011), los cuales proponen algunos modelos como guía en la industria avícola, porque cuentan con la implementación de los protocolos de bioseguridad y las buenas prácticas avícolas en todos los procesos productivos y administrativos.
    p.mb-4(data-aos="fade-down") Para llevar un adecuado control de la documentación en los procesos de las granjas avícolas, se deben considerar los siguientes tipos de registros:

    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold ● 
        | #[b Los registros administrativos:] son todos los que se manejan en los diferentes procesos con el fin de llevar control, gestionar adecuadamente el recurso humano y la producción, estos aportan evidencias al momento de realizar auditorías internas, al reconocimiento de las acciones correctivas, a la seguridad en el trabajo y a la formación profesional. 
      li 
        span.text-bold ● 
        | #[b Los registros operativos:] son todos los registros que se realizan en las actividades operativas, tales como: el inventario de aves, el inventario de huevos por ciclo, el inventario de insumos, el inventario de equipos e implementos, los registros de mantenimiento preventivo o correctivo de las instalaciones maquinaria y equipos, los registros de las actividades de limpieza y desinfección, planilla de control de plagas, control de visitas, medidas de bioseguridad, entre otros según las necesidades y actividades de la organización.
      li 
        span.text-bold ● 
        | #[b Los registros productivos:] son todos los que se aplican para el control y manejo de los procesos productivos, con el fin de obtener un balance general de la producción, a continuación, se mencionan algunos ejemplos: parámetros productivos, de producción y consumo de alimento diario, manejo de residuos, manejo de subproductos, control de temperatura y humedad, manejo sanitario, tratamientos, medicación y vacunación, inventario de productos veterinarios y concentrados, entre otros según los requerimientos de la organización.

    p.mb-4(data-aos="fade-down") Para profundizar sobre esta temática, se sugiere ingresar al siguiente enlace, donde se encontrará toda la información concerniente sobre los procesos y registros.

    .tarjeta-c.color-primario.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/tema2-2.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small En el código de buenas prácticas avícolas, publicado por Fenavi y Fovav (2011), se entregan elementos claves acerca de la identificación, trazabilidad y registros, además en el apartado de Anexos, se proponen formatos para el diligenciamiento de estos.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://fenavi.org/wp-content/uploads/2019/02/CÓDIGO-BUENAS-PRÁCTICAS-AVÍCOLAS-BPAV-V2.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download 

    p.mb-4(data-aos="fade-down") La siguiente tabla es un ejemplo de un modelo de registro para auditoría que se puede implementar según la organización de cada granja avícola, teniendo presente el control y las actividades que se desarrollan, disponible en el código de buenas prácticas avícolas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Ejemplo registro auditoría interna] 
        figure 
          img(src='@/assets/curso/temas/tema2/tema2-t1.png', alt='')  
          figcaption.mt-2 Nota. Adaptado de Fenavi y Fonav (2011).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-12
        a.anexo.mb-4(:href="obtenerLink('/downloads/Registro_Auditoria_Interna.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p #[b Anexo.] Registro AUDITORÍA INTERNA
      
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Formatos

    p.mb-4(data-aos="fade-down") Los formatos son las plantillas que se pueden aplicar en cada archivo de registro, adaptándose a las necesidades y requerimientos de cada productor en su granja avícola, incorporando el tipo de sistema productivo, las áreas, actividades y la información que desean manejar para tener un mejor control y organización de todos los procesos productivos.
    p.mb-4(data-aos="fade-down") A continuación, en las tablas 2 y 3 se relacionan algunas guías disponibles en Fenavi y Fonav (2011) de los registros mencionados anteriormente. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Ejemplo de formato de acciones correctivas] 
        figure 
          img(src='@/assets/curso/temas/tema2/tema2-t2.png', alt='')  
          figcaption.mt-2 Nota. Adaptado de Fenavi y Fonav (2011).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-12
        a.anexo.mb-4(:href="obtenerLink('/downloads/Registro_Acciones_Correctivas.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p #[b Anexo.] Registro ACCIONES CORRECTIVAS


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Ejemplo de formato de salud y seguridad laboral] 
        figure 
          img(src='@/assets/curso/temas/tema2/tema2-t3.png', alt='')  
          figcaption.mt-2 Nota. Adaptado de Fenavi y Fonav (2011).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-12
        a.anexo.mb-4(:href="obtenerLink('/downloads/Registro_Salud_y_Seguridad_Laboral.xlsx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p #[b Anexo.] Registro SALUD Y SEGURIDAD LABORAL 

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Inventarios

    p.mb-4(data-aos="fade-down") Los inventarios hacen parte de los sistemas de la información, ellos nos permiten mantener un control real de todos los bienes con los que cuenta una granja avícola, tales como: materias primas, equipos, herramientas, animales etc., además permiten proveer y distribuir de manera adecuada los materiales necesarios para cada proceso productivo,  según Rincón Gómez (2018) un método para la implementación de los inventarios es el sistema de gestión de los mismos que permita cumplir el control de la información, por esto es importante  la actualización constante del inventario, otro beneficio es la reducción de los tiempos mejorando la  efectividad de los procesos.
    p.mb-4(data-aos="fade-down") En la actualidad se encuentran inventarios para materias primas, teniendo como objetivo medir y controlar el uso de las materias y las entradas del proceso, como también inventarios para el producto final, resultado de un proceso de producción y con especificaciones concretas para llenar las expectativas de la empresa avícola.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-3.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 La periodicidad del inventario dependerá de las necesidades de cada empresa, estos se pueden ajustar y se pueden encontrar anuales, periódicos, cíclicos y permanentes.

    p.mb-4(data-aos="fade-down") En las siguientes tablas se presenta un ejemplo de inventario anual y un modelo para registro de inventario diario.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Ejemplo de un inventario de materias primas anual] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Rincón Gómez (2018).
            thead
              tr.cabecera-a.text-center
                th Año
                th Frijol soya
                th Maíz amarillo
                th Sorgo
                th Torta de soya
                th Total
            tbody
              tr.text-center
                th.cabecera-b 2010
                td 352,848
                td 3,434,221
                td 167,537
                td 912,886
                td 4,867,491
              tr.text-center
                th.cabecera-b 2011
                td 271,994
                td 2,703,920
                td 471,105
                td 1,013,997
                td 4,461,016
              tr.text-center
                th.cabecera-b 2012
                td 276,134
                td 3,122,578
                td 639,718
                td 1,041,728
                td 5,080,159
              tr.text-center
                th.cabecera-b 2013
                td 359,524
                td 3,506,786
                td 496,851
                td 1,048,949
                td 5,412,110
              tr.text-center
                th.cabecera-b 2014
                td 391,818
                td 3,742,523
                td 101,384
                td 1,016,341
                td 5,252,067
              tr.text-center
                th.cabecera-b 2015
                td 626,973
                td 4,480,730
                td 23,015
                td 1,160,890
                td 6,291,607
              tr.text-center
                th.cabecera-b 2016
                td 431,152
                td 3,910,608
                td 43,038
                td 1,047,547
                td 5,432,346


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 5.] #[i Modelo de inventario de materias primas diario] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota: los valores, materiales o materia prima son un ejemplo que puede ajustarse a las necesidades de la empresa.
            thead
              tr.cabecera-a.text-center
                th Día
                th Frijol soya
                th Maíz amarillo
                th Sorgo
                th Torta de soya
                th Total
            tbody
              tr.text-center
                th.cabecera-b 1
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 2
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 3
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 4
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 5
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 6
                td
                td
                td
                td
                td
              tr.text-center
                th.cabecera-b 7
                td
                td
                td
                td
                td

    .row.justify-content-center.mb-3(data-aos="fade-down")
        .col-12.col-md-10.col-lg-8
          .cajon.color-primario.p-4
            p.mb-0 Los inventarios se pueden diseñar según las actividades que se realizan para el manejo y control de los bienes e insumos que hacen parte de las granjas avícolas.


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Listas de chequeo

    p.mb-4(data-aos="fade-down") Las listas de chequeo son formatos que se utilizan para controlar las actividades que se realizan de manera repetitiva durante una jornada o ciclo productivo, su función básicamente es brindar un panorama acertado o real sobre el desempeño tanto de los operarios como del funcionamiento de las instalaciones, maquinaria y equipos que se emplean para el desarrollo de la producción, se considera como un formato de diagnóstico o evaluación según se requiera.
    p.mb-4(data-aos="fade-down") Para el diseño de las listas de chequeo es importante identificar qué se va a evaluar, analizar o medir, para así determinar el número de ítems que se requieren para una acertada recolección de datos o información; ejemplo del contenido de una lista de chequeo, serían el número de ítems, descripción de cada ítem, criterio de evaluación cumple o no cumple y observaciones, como se observa en la siguiente tabla 6.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 6.] #[i Ejemplo de modelo de lista de chequeo] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th(rowspan="2") Ítem
                th(rowspan="2") Descripción
                th(colspan="2") Criterio
                th(rowspan="2") Observación
              tr.text-center.cabecera-a
                th Cumple
                th No cumple
            tbody
              tr
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td

    p.mb-4(data-aos="fade-down") Existe gran variedad de modelos de formato de lista de chequeo, lo importante es identificar qué se quiere evaluar para poder plasmar la información y realizar un análisis de los datos recolectados, entre más sencillo es el formato, será más fácil y práctico el diligenciamiento de este por parte del personal. A continuación, se muestra un formato de ejemplo:
       
    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 7.] #[i Ejemplo de lista de chequeo de análisis de una distribuidora de huevos comercial] 
      .col-12(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Rincón Gómez (2018).
            thead
              tr.cabecera-a.text-center
                th Principios
                th ¿En qué consiste?
                th Cumple
                th No cumple
                th Aspecto critico
                th Aspecto a mejorar
            tbody
              tr
                td.p-2 Principio de la satisfacción y la seguridad.
                td.p-2 A igualdad de condiciones, será siempre más efectiva la distribución que haga el trabajo más satisfactorio y seguro para los trabajadores.
                td 
                td.text-center X
                td.p-2 No cuenta con zonas seguras para realizar el trabajo, ni cuenta con señalización y elementos de emergencia.
                td.p-2 Incluir señalización y elementos de emergencia.
              tr
                td.p-2 Principio de la integración de conjunto.
                td.p-2 Integra a los hombres, materiales, maquinaria, actividades auxiliares y cualquier otro factor, de modo que resulte el compromiso mejor entre todas estas partes.
                td.p-2
                td.p-2.text-center X
                td.p-2 Congestión en el momento de despachar los pedidos.
                td.p-2 Se diseña manual de inventarios con políticas y responsabilidades como base del funcionamiento de la gestión.
              tr
                td.p-2 Principio de la misma distancia recorrida.
                td.p-2 A igualdad de condiciones, es siempre mejor la distribución que permite que la distancia a recorrer por el material sea la menor posible.
                td.p-2
                td.p-2.text-center X 
                td.p-2 Para poder seleccionar un producto dentro del almacén hay que recorrer todo el almacén.
                td.p-2 Dentro del diseño de planta las buenas prácticas de ubicación del producto.
              tr
                td.p-2 Principio de la circulación o flujo de materiales.
                td.p-2 En igualdad de condiciones, es mejor aquella distribución que ordene las áreas de trabajo de modo que cada operación o proceso esté en el mismo orden o secuencia en que se transformen, tratan o montan los materiales.
                td.p-2
                td.p-2.text-center X 
                td.p-2 Largas distancias por recorrer entre varios lugares y flujos de trabajos cruzados.
                td.p-2 Es importen dentro del diseño de planta tener en cuenta los espacios y flujos de recorridos.
              tr
                td.p-2 Principios del espacio cúbico.
                td.p-2 La economía se obtiene utilizando de un modo efectivo todo el espacio disponible, tanto en horizontal como en vertical.
                td.p-2
                td.p-2.text-center X 
                td.p-2 No cuenta con el espacio respectivo en m#[sup 3].
                td.p-2 Es necesario trasladar la distribuidora de huevos a un lugar más apropiado.
              tr
                td.p-2 Principio de la flexibilidad.
                td.p-2 A igualdad de condiciones era siempre más efectiva la distribución que puede ser ajustada o reordenada con menos costo o inconvenientes.
                td.p-2 
                td.p-2.text-center X
                td.p-2 No se ha llegado a una mejora porque no se tiene el conocimiento y la experticia para realizarlo.
                td.p-2 Se realiza diseño anexo 2 teniendo como base la cantidad de productos y su nivel de rotación. 
              tr
                td.p-2 Principio de la planeación.
                td.p-2 Todo manejo de materiales debe ser el resultado de un plan deliberado en el que las necesidades, objetivos de desempeño y específica acciones funcionales d ellos métodos propuestos serán definidos totalmente desde el inicio.
                td.p-2
                td.p-2.text-center X 
                td.p-2 No se cuenta con una mejora porque no se tiene el conocimiento para realizar una respectiva planeación.
                td.p-2 Se diseña una metodología, manual de inventarios y base de datos para suplir la necesidad de planeación. 


    .row.justify-content-center.mb-3(data-aos="fade-down")
        .col-12.col-md-10.col-lg-8
          .cajon.color-primario.p-4
            p.mb-0 Recordar: las listas de chequeo son una herramienta muy práctica para realizar análisis de desempeño o producto según se requiera en el proceso o granja en general.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Técnicas de diligenciamiento

    p.mb-4(data-aos="fade-down") Las técnicas de diligenciamiento hacen referencia a la forma correcta en que se debe plasmar la información en cada formato o documento, es importante identificar los tipos de prestación, los cuales pueden ser físicos o digitales, según esto se manejarían ciertos criterios para su diligenciamiento, teniendo en cuenta cada área y proceso tienen su respectivo formativo y control, por tal motivo es necesario que cada operario, jefe de área o galponera identifique para que se está recolectando la información de manera que le permitirá a él tener claro los datos que deben registrar según lo que se indica en el formato.

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-4.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 Para el diligenciamiento de formatos físicos se debe tener letra clara y para los digitales se necesita que conozca el manejo de los programas digitales.





</template>

<script>
export default {
  name: 'Tema2',
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
