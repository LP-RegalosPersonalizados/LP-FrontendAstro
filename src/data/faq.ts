export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  label: string;
  items: FAQItem[];
}

export const faqGroups: FAQGroup[] = [
  {
    id: 'personalizacion',
    label: 'Personalización',
    items: [
      {
        question: '¿Cuál es el proceso de personalización?',
        answer: 'Selecciona un producto, envíanos tus fotos o diseño, lo revisamos juntos, y una vez aprobado comenzamos la producción.',
      },
      {
        question: '¿Puedo enviar mis propias imágenes?',
        answer: 'Claro. Aceptamos fotos, logos, textos y diseños. Preferimos archivos de alta resolución (300 dpi) para mejor resultado.',
      },
      {
        question: '¿Qué formatos de imagen aceptan?',
        answer: 'Aceptamos JPG, PNG, PDF y PSD. Formatos vectoriales como AI y EPS también son bienvenidos.',
      },
      {
        question: '¿Cuántas revisiones de diseño puedo pedir?',
        answer: 'Revisiones ilimitadas. No hay límite mientras estés en fase de diseño, antes de iniciar la producción.',
      },
      {
        question: '¿Veo el producto antes de que se produzca?',
        answer: 'Sí, te enviamos un mockup digital para tu aprobación. Cambios adicionales son permitidos en esta fase.',
      },
    ],
  },
  {
    id: 'entregas',
    label: 'Entregas',
    items: [
      {
        question: '¿Cuánto tarda en llegar mi pedido?',
        answer: 'Depende del volumen: 1-24 unidades (1-2 días) | 25-50 unidades (3-4 días) | 50+ unidades (A consultar). Para pedidos grandes o personalizados, ofrecemos cronogramas adaptados a tus necesidades.',
      },
      {
        question: '¿Hacen entregas a todo el país?',
        answer: 'Si coordinamos envíos mediante transporte privado externo, servicio de mensajería o retiro en tienda. Para pedidos grandes o entregas especiales, ofrecemos opciones de logística adaptadas a tus necesidades.',
      },
      {
        question: '¿Cómo se envasan los productos?',
        answer: 'Los productos se envasan cuidadosamente para garantizar su protección durante el transporte. Utilizamos materiales de embalaje resistentes y adecuados para cada tipo de producto.',
      },
      {
        question: '¿Puedo elegir fecha de entrega?',
        answer: 'Coordinamos la entrega según tus necesidades. Para fechas específicas, por favor contáctanos con anticipación para verificar disponibilidad.',
      },
      {
        question: '¿Qué hago si me llega dañado?',
        answer: 'Reporta cualquier daño dentro de las 24 horas posteriores a la recepción. Proporciona fotos del daño y detalles del pedido. Si se confirma un defecto de fabricación o daño durante el transporte, ofreceremos un reemplazo sin costo.',
      },
    ],
  },
  {
    id: 'pagos',
    label: 'Pagos',
    items: [
      {
        question: '¿Cómo funciona el pago?',
        answer: 'Al confirmar el diseño se solicita un anticipo del 50%. El 50% restante se paga antes de la entrega.',
      },
      {
        question: '¿Qué formas de pago aceptan?',
        answer: 'Se aceptan transferencias bancarias, depósitos en efectivo, pagos por QR y otras opciones. Para más información, contáctanos directamente.',
      },
      {
        question: '¿Puedo pagar todo de una vez?',
        answer: 'Claro, si prefieres pagar el 100% al confirmar también lo aceptamos. Consulta sin compromiso.',
      },
      {
        question: '¿Cuánto tiempo es válido un presupuesto?',
        answer: 'Los presupuestos son válidos por 7 días. Después de ese período, los precios pueden estar sujetos a cambios. Si necesitas una extensión del presupuesto, contáctanos para evaluar la situación.',
      },
      {
        question: '¿Hay recargo por volúmenes muy grandes?',
        answer: 'No, al contrario, para volúmenes grandes ofrecemos descuentos. A mayor cantidad, mejor precio unitario.',
      },
    ],
  },
  {
    id: 'garantia',
    label: 'Garantía',
    items: [
      {
        question: '¿Hay garantía en los productos?',
        answer: 'Sí, garantizamos la calidad de nuestros productos. Si recibes un producto con defectos de fabricación, contáctanos dentro de las 24 horas posteriores a la recepción para evaluar el caso y proceder con un reemplazo sin costo.',
      },
      {
        question: '¿Cuándo caduca la garantía?',
        answer: 'Los reclamos asociados a defectos de fabricación deben ser reportados dentro de las 24 horas posteriores a la recepción del producto.',
      },
      {
        question: '¿Qué se considera defecto de fabricación?',
        answer: 'Colores que no coinciden con el diseño aprobado, impresión borrosa, materiales defectuosos o cualquier daño que ocurra durante la producción. No se consideran daños causados por mal manejo, desgaste normal o uso inadecuado.',
      },
      {
        question: '¿Debo guardar el empaque para reclamos?',
        answer: 'No es necesario guardar el empaque para reclamos por defectos de fabricación. Sin embargo, te recomendamos conservarlo hasta revisar el producto.',
      },
      {
        question: '¿Puedo devolver un producto si cambié de opinión?',
        answer: 'No, no aceptamos devoluciones por cambio de opinión. Nuestra política de garantía se enfoca exclusivamente en defectos de fabricación comprobados.',
      },
      {
        question: '¿Cómo reporto un defecto?',
        answer: 'Contactanos por WhatsApp al +591 6269-9702 o envíanos un email a Recuerdoscompartidoscznl@gmail.com. Proporciona fotos del defecto, detalles del pedido y tu información de contacto.',
      },
    ],
  },
  {
    id: 'empresas',
    label: 'Servicios para Empresas',
    items: [
      {
        question: '¿Cuál es el pedido mínimo para empresas?',
        answer: 'El pedido mínimo es de 4 unidades. Trabajamos desde pequeños detalles corporativos hasta proyectos de 100+ unidades. Para volúmenes especiales, consultamos caso por caso.',
      },
      {
        question: '¿Qué opciones de personalización corporativa ofrecen?',
        answer: 'Puedes personalizar con logos, nombres, colores corporativos, textos personalizados, fotos y diseños exclusivos. Nuestro equipo de diseño trabaja contigo para crear algo único que represente tu marca.',
      },
      {
        question: '¿Ofrecen descuentos por volumen?',
        answer: 'Sí, tenemos descuentos progresivos según la cantidad, pero varían según el producto y la personalización requerida. Para una cotización personalizada, contáctanos directamente.',
      },
      {
        question: '¿Cuál es el tiempo de producción según volumen?',
        answer: 'Varía según la cantidad y tipo de personalización: 4-24 unidades (1-2 días) | 25-50 unidades (3-4 días) | 50+ unidades (A consultar).',
      },
      {
        question: '¿Cómo es el proceso de diseño y aprobación?',
        answer: 'Primero consultamos tus necesidades. Luego enviamos diseños digitales para tu revisión. Puedes solicitar cambios ilimitados hasta tu conformidad total. Todo el proceso se coordina vía WhatsApp, email o reunión presencial.',
      },
      {
        question: '¿Puedo hacer cambios después de confirmar el pedido?',
        answer: 'Sí, cambios menores en diseño son permitidos hasta 24 horas antes del inicio de producción. Cambios posteriores o mayores podrían afectar tiempos y presupuesto.',
      },
      {
        question: '¿Cómo es el proceso de pago para empresas?',
        answer: '50% de anticipo al confirmar el pedido | 50% restante antes de la entrega. Aceptamos transferencia bancaria, depósito en efectivo, Paypal y otras opciones. Factura formal disponible.',
      },
      {
        question: '¿Ofrecen muestras antes de confirmar grandes volúmenes?',
        answer: 'Sí, podemos preparar muestras de los productos personalizados para que valides calidad y diseño. El costo de muestras puede descontarse del pedido final.',
      },
      {
        question: '¿Qué opciones de envío tienen?',
        answer: 'Coordinamos la entrega mediante transporte privado externo, servicio de mensajería o retiro en tienda. Para pedidos grandes ofrecemos logística adaptada.',
      },
      {
        question: '¿Qué garantía ofrecen en productos corporativos?',
        answer: 'Revisamos productos dentro de 24 horas de recibidos. Defectos de fabricación comprobados serán reemplazados sin costo. Ofrecemos garantía de calidad en impresión, acabado y durabilidad.',
      },
      {
        question: '¿Pueden personalizar productos que no están en catálogo?',
        answer: 'Absolutamente. Si tienes un producto corporativo específico en mente, podemos investigar viabilidad, costos y tiempos. Primera consulta sin compromiso.',
      },
      {
        question: '¿Cómo me comunico para hacer un pedido corporativo?',
        answer: 'Puedes escribirnos por WhatsApp al +591 6269-9702 o enviar email a Recuerdoscompartidoscznl@gmail.com. Tu asesor dedicado te guiará en todo el proceso.',
      },
      {
        question: '¿Cuentan con experiencia en regalos de fin de año?',
        answer: 'Sí, es uno de nuestros servicios estrella. Hemos preparado campañas de fin de año para decenas de empresas, desde selección de productos hasta logística completa.',
      },
    ],
  },
];
