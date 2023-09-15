export default {
  global: {
    componenteFormativo:
      'Ejecución y evaluación de procesos productivos en granjas avícolas',
    descripcionCurso:
      'Para determinar la eficacia de la ejecución de las actividades en los procesos productivos en granjas avícolas, es necesario realizar una evaluación mediante diferentes documentos como registros y listas de chequeo entre otros, obteniendo la información correspondiente para tomar las medidas adecuadas y proponer planes de mejoramiento con acciones correctivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Registro y documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formatos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Inventarios',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Listas de chequeo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Técnicas de diligenciamiento',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Acciones preventivas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Acciones correctivas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicación y estrategias',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_16_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Registro y documentación ',
      referencia:
        'Italcol. (2019). <em>Manejo - Registros productivos</em> (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UQpdmbqynfU',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Rincón Gómez, Y. Z. (2018). <em>Diseño de un sistema de gestión de inventarios para el control y monitoreo de las ventas en la distribuidora de huevos Shekina en la ciudad de Bogotá.</em> Repositorio UCC.',
      tipo: 'Documento',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/e5007946-7b5f-427e-a1ab-3e989c29c83f/content',
    },
    {
      tema: 'Acciones correctivas',
      referencia:
        'Torres, I. (2019). <em>5 pasos para realizar un Plan de Acciones Correctivas Sin Errores.</em> Iveconsultores.',
      tipo: 'Artículo',
      link: 'https://iveconsultores.com/plan-de-acciones-correctivas/',
    },
    {
      tema: 'Aplicación y estrategias',
      referencia:
        'Fenavi. (2020). <em>Nuestra Ruta de la sostenibilidad Avícola. Fenavi.</em>',
      tipo: 'PDF',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/La-ruta-de-la-Sostenibilidad-Digital.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas practicas avícolas',
      significado:
        'es el conjunto de medidas que le permiten al productor implementar y tener como guía en cuanto al manejo de los procesos sanitarios, ambientales, de producción e inocuidad.',
    },
    {
      termino: 'Inventarios',
      significado:
        'lista ordenada de bienes y demás cosas valorables que pertenecen a una persona, empresa o institución.',
    },
    {
      termino: 'Planes de producción',
      significado:
        'es un documento que específica qué procedimientos y recursos deben aplicarse, quién debe aplicarlos y cuándo deben aplicarse a un proceso o producto. Un plan hace referencia con frecuencia a partes del manual de la calidad o a procedimientos documentados, establecidos por la empresa.',
    },
    {
      termino: 'Registros',
      significado:
        'documento donde se relacionan ciertos acontecimientos o cosas; especialmente aquellos que deben constar permanentemente de forma oficial.',
    },
    {
      termino: 'Sistemas de producción',
      significado:
        'se refiere a la cría de aves de corral para mejorar la seguridad alimentaria y generar ingresos, pueden producción de carne (pollo de engorde) o producción de huevo (gallina ponedora).',
    },
  ],
  referencias: [
    {
      referencia:
        'Fenavi y Fonav. (2011). Código Buenas Prácticas Avícolas – BPAV.  Fenavi. ',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/C%C3%93DIGO-BUENAS-PR%C3%81CTICAS-AV%C3%8DCOLAS-BPAV-V2.pdf',
    },
    {
      referencia:
        'Merino, M. (2013). Definición Plan de Contingencia. Definicion.de. ',
      link: 'https://definicion.de/plan-de-contingencia/',
    },
    {
      referencia:
        'Rincón Gómez, Y. Z. (2018). Diseño de un sistema de gestión de inventarios para el control y monitoreo de las ventas en la distribuidora de huevos Shekina en la ciudad de Bogotá. Repositorio UCC. ',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/e5007946-7b5f-427e-a1ab-3e989c29c83f/content',
    },
    {
      referencia:
        'Torres, I. (2019). 5 pasos para realizar un Plan de Acciones Correctivas Sin Errores. Iveconsultores. ',
      link: 'https://iveconsultores.com/plan-de-acciones-correctivas/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
