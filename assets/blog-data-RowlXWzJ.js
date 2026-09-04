import{f as l}from"./marked.esm-DrzVhScH.js";const t=e=>e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(),u=e=>{const n=[],o=/<h2[^>]*>([^<]+)<\/h2>\s*<(p|ul|ol)[^>]*>([\s\S]*?)<\/(?:p|ul|ol)>/g;let a=o.exec(e);for(;a!==null;){const s=t(a[1]);if(s.includes("?")){const i=t(a[3]).slice(0,500);i&&n.push({question:s,answer:i})}a=o.exec(e)}return n},d=e=>e.replace(/^["']|["']$/g,""),p=(e,n)=>{const o=n.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/),a={};if(o)for(const r of o[1].split(`
`)){const c=r.indexOf(":");c>0&&(a[r.slice(0,c).trim()]=d(r.slice(c+1).trim()))}const s=o?n.slice(o[0].length):n,i=l.parse(s);return{slug:a.slug??e,title:a.title??e,metaTitle:a.metaTitle||void 0,image:a.image||void 0,date:a.date??"",excerpt:a.excerpt??"",draft:a.draft==="true",tags:(a.tags??"").replace(/[[\]"]/g,"").split(",").map(r=>r.trim()).filter(Boolean),contentHtml:i,wordCount:s.trim().split(/\s+/).length,faq:u(i)}},z=e=>{const[n,o,a]=e.split("-").map(Number);return n&&o&&a?`${a} de ${["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"][o-1]} de ${n}`:e},h=e=>Math.max(1,Math.round(e/200)),m=`---
title: "¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance"
metaTitle: "¿Cuánto cuesta SAP Business One en Perú?"
date: 2026-08-19
image: /images/blog/cuanto-cuesta-implementar-sap-business-one-peru.jpg
excerpt: "El costo de SAP Business One en Perú depende de licencias, alcance, add-ons SUNAT y migración. Aprenda a definir cada factor antes de cotizar."
tags: [implementación, alcance, licencias, erp]
---

«¿Cuánto cuesta implementar SAP Business One?» es una de las primeras preguntas de toda empresa peruana que evalúa un ERP. La respuesta honesta: **no hay un precio estándar, porque el costo depende del alcance del proyecto** — y definir ese alcance es exactamente el trabajo donde un consultor certificado aporta más valor.

## ¿Por qué el costo depende del alcance?

Dos empresas del mismo rubro pueden tener proyectos con costos muy distintos. Lo que cambia no es el «precio del sistema», sino lo que se necesita para que el sistema sirva a su operación:

1. **Las licencias y su modalidad** — SAP Business One se licencia por usuario, y la modalidad define la estructura de costos: on-premise (licencia propia con mantenimiento), nube con hosting administrado, o alquiler con cuota mensual por usuario. Cada una implica un nivel de inversión inicial y de costo recurrente distinto.
2. **El alcance funcional** — qué áreas se implementan (finanzas, compras, ventas, inventario, producción), qué procesos se parametrizan y qué reportes se necesitan.
3. **Los add-ons de cumplimiento local** — facturación electrónica SUNAT, detracciones, pago masivo o rendición de gastos se cotizan por separado y dependen de las obligaciones de su empresa.
4. **La migración de datos y las integraciones** — desde dónde se migra (Excel, otro sistema), la calidad de los datos y las integraciones con terceros.
5. **La capacitación y el soporte** — los programas de formación para su equipo y el nivel de acompañamiento posterior.

Cada uno de estos puntos es una decisión que su consultor le ayuda a tomar. Por eso el punto de partida nunca es un número: es un **alcance bien definido**.

## ¿Cómo se define un buen alcance?

Un alcance sólido se construye en cuatro pasos:

1. **Levantamiento de procesos** — entender cómo opera hoy su empresa: flujos, responsables, documentos y puntos de dolor.
2. **Identificación de necesidades** — qué módulos y funcionalidades resuelven esos puntos de dolor, y cuáles son opcionales o postergables.
3. **Definición de entregables** — qué se configura, qué se migra, qué se integra y qué se capacita, con responsables y tiempos.
4. **Propuesta con alcance y precio cerrado** — recién con el alcance definido tiene sentido hablar de números: la propuesta deja claro qué incluye y qué no, sin sorpresas.

Un alcance mal definido es la causa más común de sobrecostos y retrasos: se descubre a mitad de camino lo que faltaba. Un alcance bien definido, en cambio, es la garantía de que el proyecto termina en el plazo y con el resultado esperado.

## ¿Cómo lo hacemos en Cygnus?

En Cygnus, cada proyecto comienza con un **diagnóstico del alcance**: un consultor certificado revisa sus procesos, le propone la modalidad y los módulos que realmente necesita, y le alcanza una **propuesta con alcance y precio cerrado**. Sin esa definición previa, cualquier número sería una estimación sin fundamento.

> ¿Quiere saber cómo sería el caso de su empresa? Solicite un diagnóstico de alcance sin costo: le respondemos en menos de 24 horas hábiles con un consultor certificado.

## Sigue leyendo

- [On-Premise vs Nube vs Alquiler: cómo elegir la modalidad de SAP Business One](/blog/on-premise-vs-nube-vs-alquiler-sap-b1/)
- [Facturación electrónica SUNAT con SAP Business One](/blog/facturacion-electronica-sunat-sap-b1/)
`,g=`---
title: "¿Cuánto cuesta una licencia de SAP Business One en Perú? El desglose que nadie explica"
metaTitle: "¿Cuánto cuesta una licencia de SAP B1 en Perú?"
date: 2026-08-27
image: /images/blog/cuanto-cuesta-licencia-sap-business-one-peru.jpg
excerpt: "El precio de una licencia de SAP Business One en Perú se compone de licencias por usuario, mantenimiento anual, implementación, add-ons SUNAT e infraestructura. Conozca cada bloque antes de cotizar."
tags: [licencias, costos, mantenimiento, erp]
---

«¿Cuánto cuesta una licencia de SAP Business One?» es la pregunta más frecuente de toda empresa peruana que evalúa un ERP — y la más difícil de responder con un número suelto. SAP no publica tarifas oficiales, y cada partner cotiza según los usuarios y la modalidad que su empresa necesite. Pero el costo **sí se puede entender y presupuestar** si se desglosa en sus cinco componentes. Esta guía le muestra exactamente qué está pagando en cada uno.

## ¿Cuánto cuesta una licencia de SAP Business One?

SAP Business One se licencia **por usuario**, y no todos los usuarios pagan lo mismo. Existen tres tipos de licencia según el nivel de acceso:

1. **Professional** — acceso completo a todos los módulos y funciones. Es la licencia de quienes administran el sistema: gerencia, contabilidad, almacenes, compras, ventas.
2. **Limited** — acceso a módulos específicos (por ejemplo, solo consultas y reportes, o solo un área). Cuesta menos que la Professional y sirve para usuarios que no necesitan todo el sistema.
3. **Starter Package** — paquete de entrada para empresas pequeñas, con un número máximo de usuarios y módulos acotados. Útil para dar el primer paso, aunque tiene límites de crecimiento.

El precio de cada licencia depende además de la **modalidad**: licencia perpetua (se compra una vez y se paga mantenimiento anual) o suscripción mensual (se paga por usuario al mes, sin desembolso inicial grande). Por eso, dos empresas con el mismo número de usuarios pueden recibir cotizaciones con estructuras muy distintas.

> Dato clave: el precio por licencia baja en la medida en que se adquieren más usuarios. Cotizar «5 usuarios» no es lo mismo que cotizar «15 usuarios».

## ¿Qué incluye el mantenimiento anual y por qué se paga?

La licencia perpetua no termina con la compra: exige un **mantenimiento anual** que es un porcentaje del valor de las licencias. A cambio, la empresa recibe:

- **Actualizaciones de versión** del sistema (nuevas funcionalidades y mejoras).
- **Soporte de SAP** ante incidentes técnicos y correcciones oficiales.
- **Actualizaciones legales** locales, fundamentales en Perú: cambios de SUNAT, tablas tributarias y requisitos de facturación electrónica se incorporan vía estos parches.

No mantener el contrato vigente significa quedarse sin actualizaciones ni soporte oficial — algo crítico cuando la norma tributaria cambia. Muchos compradores lo ven como un «gasto extra»; en la práctica es la póliza que mantiene el sistema al día con la ley peruana.

## ¿Qué más hay que presupuestar además de las licencias?

Las licencias son solo una parte del proyecto. Un presupuesto realista considera:

1. **Implementación** — levantamiento de procesos, configuración, migración de datos y puesta en marcha. Es la inversión más significativa después de las licencias y depende del alcance ([¿Cuánto cuesta implementar SAP Business One?](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)).
2. **Add-ons de cumplimiento local** — facturación electrónica SUNAT, detracciones, SIRE, pago masivo, rendición de gastos. Se cotizan aparte y son obligatorios o casi obligatorios para operar en Perú.
3. **Infraestructura o modalidad** — si elige servidor propio, el hardware y su administración; si elige nube o alquiler, la cuota mensual los reemplaza ([On-Premise vs Nube vs Alquiler](/blog/on-premise-vs-nube-vs-alquiler-sap-b1/)).
4. **Capacitación** — la formación del equipo es parte del proyecto y suele estar incluida, pero conviene confirmarlo en la propuesta.

## ¿Licencia perpetua o suscripción mensual?

No hay una respuesta universal: depende de su flujo de caja y su política de TI. La **perpetua** exige un desembolso inicial mayor, pero el costo total a largo plazo suele ser menor. La **suscripción** elimina la inversión inicial y convierte el ERP en un gasto operativo mensual, ideal para empresas que prefieren no inmovilizar capital o que recién empiezan. La decisión correcta se toma con números propios: compare el costo total a 3 y 5 años de ambas opciones con su consultor.

## ¿Cómo obtener un precio real para su empresa?

Con un catálogo de usuarios definido (cuántos Professional, cuántos Limited), la modalidad elegida y el alcance de add-ons claro, cualquier partner certificado puede cotizar con precisión. El orden importa: primero el alcance, después el número.

> ¿Quiere saber cuánto costaría el caso de su empresa? Solicite un diagnóstico de alcance sin costo en Cygnus: un consultor certificado define usuarios, modalidad y add-ons necesarios, y le alcanza una propuesta con precio cerrado en menos de 24 horas hábiles.

## Sigue leyendo

- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
- [On-Premise vs Nube vs Alquiler: cómo elegir la modalidad de SAP Business One](/blog/on-premise-vs-nube-vs-alquiler-sap-b1/)
- [Facturación electrónica SUNAT con SAP Business One](/blog/facturacion-electronica-sunat-sap-b1/)
`,b=`---
title: "Detracciones SUNAT: guía práctica para empresas con SAP Business One"
metaTitle: "Detracciones SUNAT: guía práctica"
date: 2026-08-26
draft: true
excerpt: "Qué son las detracciones (SPOT), cómo funcionan y cómo automatizar su cálculo y pago desde SAP Business One con el módulo de Cygnus."
tags: [sunat, detracciones, pagos, add-ons]
---

Las detracciones (sistema SPOT) son una obligación tributaria que muchas empresas peruanas deben cumplir al comprar ciertos bienes o contratar determinados servicios. Gestionarlas manualmente genera riesgo de reparos, retrasos en los pagos y trabajo operativo innecesario. Esta guía explica qué son y cómo automatizarlas desde **SAP Business One**.

## ¿Qué son las detracciones?

Las detracciones son un mecanismo administrativo de recaudación tributaria (SPOT) mediante el cual el **comprador descuenta un porcentaje del pago** al proveedor y lo **deposita en la cuenta del Banco de la Nación** del propio proveedor. Ese monto queda "detraído" y solo puede usarse para el pago de obligaciones tributarias.

Aplican sobre una lista de bienes y servicios definida por SUNAT (entre ellos, algunos servicios como transporte de carga, construcción, intermediación laboral, y ciertos bienes como minerales o recursos hidrobiológicos). El porcentaje de la detracción depende del bien o servicio — SUNAT publica y actualiza la tabla oficial — por lo que conviene que el sistema lo calcule automáticamente y no de forma manual.

## ¿Cómo se paga una detracción?

El procedimiento general es:

1. El comprador identifica que la operación está sujeta a detracción.
2. Calcula el monto según el porcentaje vigente sobre el importe de la operación.
3. Realiza el **depósito en la cuenta de detracciones del proveedor** en el Banco de la Nación, dentro del plazo establecido.
4. Obtiene la **constancia de depósito** (hoy digital) y la registra en el comprobante de compra para sustentar el gasto.

Cumplir los plazos es clave: un depósito fuera de tiempo genera intereses y puede acarrear infracciones. Por eso la automatización del proceso reduce el riesgo de incumplimiento.

## ¿Cómo se automatizan las detracciones en SAP Business One?

El **módulo de Detracciones de Cygnus** automatiza el proceso de pago masivo de detracciones, completamente integrado a SAP Business One:

- **Visualiza y selecciona** los documentos pendientes de detracción en simples pasos.
- **Genera el archivo de detracciones** según el formato indicado por SUNAT para realizar el pago masivo.
- **Mantiene un historial** de archivos generados, con la información de la detracción y el usuario que la generó.
- **Importa la información del depósito** y actualiza automáticamente los datos en las facturas de compras.
- **Gestiona los gastos bancarios** en los que incurre el pago de las detracciones.

El resultado: pago masivo en corto tiempo, cumplimiento de los plazos establecidos, visibilidad y control de cada archivo generado, y las facturas de proveedores actualizadas para sustentar la operación ante SUNAT.

## ¿Qué beneficios trae automatizar las detracciones?

- **Cumplimiento tributario**: los depósitos se realizan en los tiempos establecidos, con constancias registradas.
- **Ahorro de tiempo**: se elimina el armado manual de archivos y la digitación de depósitos.
- **Control y trazabilidad**: historial completo de archivos generados, montos y usuarios.
- **Menos errores**: la actualización automática del depósito en las facturas de compras evita diferencias contables.

> ¿Quiere automatizar las detracciones de su empresa en SAP Business One? Hable con un consultor certificado de Cygnus: le respondemos en menos de 24 horas hábiles y le alcanzamos la ficha técnica del add-on.

## Sigue leyendo

- [Facturación electrónica SUNAT con SAP Business One](/blog/facturacion-electronica-sunat-sap-b1/)
- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
`,y=`---
title: "Facturación electrónica SUNAT con SAP Business One"
metaTitle: "Facturación electrónica SUNAT con SAP B1"
date: 2026-08-19
image: /images/blog/facturacion-electronica-sunat-sap-b1.jpg
excerpt: "Guía para emitir comprobantes electrónicos validados por SUNAT desde SAP Business One: cómo funciona la integración y por qué conviene emitir desde el ERP."
tags: [sunat, facturación electrónica, ose, add-ons]
---

La facturación electrónica es hoy una obligación para la gran mayoría de empresas peruanas, y emitir desde una planilla o un sistema contable aislado genera doble digitación, errores de validación y riesgo de reparos ante SUNAT. La alternativa natural es emitir desde **SAP Business One**, donde la venta ya está registrada.

## ¿Cómo funciona la facturación electrónica desde SAP B1?

El add-on de **Facturación Electrónica de Cygnus** integra SAP Business One con una **OSE certificada** (Operador de Servicios Electrónicos — Carvajal Tecnología y Servicios S.A.C.), de modo que el flujo es automático:

1. El usuario emite la factura, boleta o comprobante en las opciones estándar de SAP Business One.
2. El comprobante se envía automáticamente a SUNAT a través de la OSE.
3. SUNAT responde con el estado de aceptación y el sistema actualiza el documento en el formulario de ventas.
4. El PDF, el CDR y el XML quedan disponibles en la pestaña **Anexos** del documento.
5. Se puede enviar el comprobante al correo electrónico del cliente de forma directa.

## ¿Qué beneficios trae emitir desde el ERP?

- **Agiliza el proceso de ventas**: la facturación nace del documento de venta, sin reescribir datos.
- **Minimiza tiempos**: generación, validación y envío del documento en un solo flujo.
- **Asegura el cumplimiento**: la validación contra SUNAT ocurre en tiempo real, con trazabilidad de cada respuesta.
- **Reduce el uso de papel** y los costos de envío físico.
- Es **configurable**: permite agregar campos adicionales al comprobante según el negocio.

## ¿Qué pasa con los demás comprobantes y obligaciones?

La facturación electrónica convive con otras obligaciones que Cygnus también automatiza sobre SAP Business One: **detracciones** (con cálculo automático y constancias), **pago masivo** (telecrédito para BCP, BBVA, Scotiabank, Interbank y Banbif), **rendición de gastos** y **gestión de letras** para cobranza y tesorería. Todas operan sobre el mismo ERP, con un único registro contable.

## ¿Por dónde empezar?

Cada implementación parte de un diagnóstico del proceso de ventas actual: qué comprobantes emite, qué OSE usa (o si aún no tiene una) y qué campos adicionales necesita. Con ese alcance se define la configuración y el plan de pruebas.

> ¿Quiere emitir sus comprobantes desde SAP Business One? Hable con un consultor certificado de Cygnus: le respondemos en menos de 24 horas hábiles y le alcanzamos la ficha técnica del add-on.

## Sigue leyendo

- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
- [On-Premise vs Nube vs Alquiler: cómo elegir la modalidad de SAP Business One](/blog/on-premise-vs-nube-vs-alquiler-sap-b1/)
`,f=`---
title: "On-Premise vs Nube vs Alquiler: cómo elegir la modalidad de SAP Business One"
metaTitle: "On-Premise vs Nube vs Alquiler en SAP B1"
date: 2026-08-19
image: /images/blog/on-premise-vs-nube-vs-alquiler-sap-b1.jpg
excerpt: "Tres formas de operar SAP Business One en Perú: licencia propia, hosting administrado o alquiler por cuota mensual, según presupuesto y control de datos."
tags: [modalidades, nube, alquiler, on-premise, decisiones]
---

SAP Business One es una sola solución, pero se opera de **tres maneras** distintas: con licencia propia en su infraestructura (on-premise), en la nube con hosting administrado, o alquilando las licencias con una cuota mensual. Elegir bien define su estructura de costos y su flexibilidad por años.

## La comparación en una tabla

| Criterio | On-Premise | Nube · Hosting | Nube · Alquiler |
|---|---|---|---|
| Inversión inicial | Licencia perpetua | Baja (servicio) | **Ninguna** |
| Costo | Mantenimiento anual | Cuota mensual | **Cuota mensual por usuario, todo incluido** |
| Datos | 100% en su infraestructura | Administrados por el partner | Administrados por el partner |
| Hardware | Necesario (o servidor propio) | Ninguno | Ninguno |
| Acceso | Red corporativa / VPN | Desde cualquier lugar y dispositivo | Desde cualquier lugar y dispositivo |
| Escalabilidad | Comprar más licencias | Escala el servicio | **Escala o reduce licencias al ritmo del negocio** |
| Control de TI | Total | Delegado | Delegado |

## ¿Cuándo conviene cada una?

**On-Premise** es para empresas con políticas de TI estrictas, requisitos de control de accesos o datos sensibles que deben permanecer en su infraestructura, y que prefieren capitalizar la inversión en una licencia perpetua.

**Nube · Hosting** es para negocios que no quieren administrar servidores pero prefieren pagar por el servicio de infraestructura (respaldos, disponibilidad) sin cambiar el modelo de licencias.

**Nube · Alquiler** es la opción con menor barrera de capital: convierte la inversión en una **cuota mensual predecible**, incluye soporte y mantenimiento, y permite ajustar las licencias a la estacionalidad del negocio. Es especialmente atractiva para pymes en crecimiento que no quieren comprometer caja.

## Tres errores al decidir

1. **Comparar solo el precio del mes**: el costo real incluye hardware, soporte, capacitación y tiempo de tu equipo de TI.
2. **Elegir por el momento, no por la etapa**: una empresa en expansión que compra licencias fijas puede quedar corta a los 12 meses; el alquiler escala con ella.
3. **Ignorar la migración**: el cambio entre modalidades (por ejemplo, de on-premise a nube) se planifica; pregunte al partner por el costo y plazo antes de firmar.

## La decisión en tres preguntas

- ¿Tengo política de TI que exija datos en mi infraestructura? → **On-Premise**
- ¿Quiero cero mantenimiento de servidores pero mantener el modelo de compra? → **Nube · Hosting**
- ¿Quiero empezar sin desembolso inicial y pagar por usuario al mes? → **Nube · Alquiler**

> En Cygnus operamos las tres modalidades. Cuéntenos su situación y le recomendamos el escenario con el mejor costo total, sin compromiso. Solicite su cotización por WhatsApp.

## Sigue leyendo

- [Facturación electrónica SUNAT con SAP Business One](/blog/facturacion-electronica-sunat-sap-b1/)
- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
`,v=`---
title: "15 preguntas que debe hacerle a un partner de SAP Business One antes de firmar"
metaTitle: "15 preguntas a un partner de SAP B1"
date: 2026-08-28
draft: true
excerpt: "Elegir al partner de SAP Business One es la decisión más importante del proyecto. Checklist de 15 preguntas sobre experiencia, metodología, alcance, precio y soporte para firmar con tranquilidad."
tags: [partner, implementación, soporte, decisiones]
---

SAP Business One no se compra directamente a SAP: se adquiere, implementa y soporta a través de **partners certificados**. Y aquí está la verdad incómoda: dos empresas pueden comprar el mismo software y obtener resultados completamente distintos según quién lo implementó. Las licencias son de su empresa — el valor del proyecto depende del partner que elija.

Esta checklist reúne las 15 preguntas que separan a un proyecto bien conducido de una implementación interminable. Úsela tal cual en su próxima reunión con un partner.

## ¿Qué preguntar sobre experiencia y metodología?

1. **¿Cuántas implementaciones de SAP Business One han hecho y en qué rubros?** — Busque experiencia en industrias similares a la suya: distribución, manufactura, servicios, comercio exterior. Un partner con casos de su sector anticipa problemas que usted aún no sabe que tiene.
2. **¿Puedo hablar con un cliente de mi sector?** — Las referencias reales valen más que cualquier brochure. Un partner sólido tiene clientes que lo recomiendan.
3. **¿Quién será el consultor asignado a mi proyecto?** — Pregunte por nombre, certificaciones y experiencia. El que vende no es el que implementa: conozca al equipo que trabajará con usted.
4. **¿Qué metodología usan y cuánto dura el proyecto?** — Una metodología definida (con fases, entregables e hitos) es señal de madurez. Desconfíe de respuestas vagas como «depende de cómo avancemos».
5. **¿Quién es mi contraparte dentro de mi empresa?** — El partner debe pedirle un responsable interno (key user) con poder de decisión. Si no lo menciona, es una señal de alerta: los proyectos fracasan cuando la empresa no se involucra.

## ¿Qué preguntar sobre el alcance y el precio?

6. **¿La propuesta tiene alcance y precio cerrado?** — El documento debe decir exactamente qué se configura, qué se migra, qué se capacita y cuánto cuesta. Lo que no está escrito, no está incluido.
7. **¿Qué queda fuera del alcance?** — Tan importante como lo que incluye. Los sobrecostos nacen de lo que «se asumía incluido»: integraciones, reportes adicionales, add-ons.
8. **¿Cómo se manejan los cambios de alcance durante el proyecto?** — Pregunte el procedimiento: ¿quién aprueba, cómo se cotiza un cambio, cuánto tarda? Un proceso claro evita conflictos a mitad de camino.
9. **¿Cómo se migran mis datos y quién valida la calidad?** — Desde Excel o un ERP anterior, la migración necesita limpieza y validación. Pregunte qué datos migran, en qué formato y quién verifica que cuadren.
10. **¿La capacitación está incluida y para cuántos usuarios?** — La adopción del equipo decide el éxito. Confirme horas, roles cubiertos y si hay capacitación de refuerzo después del go-live.

## ¿Qué preguntar sobre soporte y continuidad?

11. **¿Qué tiempos de respuesta tienen ante incidentes?** — Un acuerdo de nivel de servicio (SLA) escrito: cuánto tarda la atención según la gravedad del problema. Sin SLA, el soporte es una promesa.
12. **¿Cómo me mantienen al día con los cambios de SUNAT?** — En Perú, la norma tributaria cambia (facturación electrónica, SIRE, detracciones). Pregunte cómo recibe esas actualizaciones y si están cubiertas por el mantenimiento.
13. **¿Qué pasa con mis datos y mi soporte si el partner cierra o deja de operar?** — Las licencias son suyas, no del partner. Un buen partner le explica cómo migrar el soporte a otro certificado: su continuidad no depende de una sola empresa.
14. **¿Las actualizaciones de versión están incluidas?** — Las actualizaciones de SAP Business One llegan vía el mantenimiento. Confirme que el partner las aplica y quién asume esa tarea.
15. **¿Qué indicadores usan para medir el éxito del proyecto?** — Go-live a tiempo, operación estable, usuarios activos. Un partner que mide resultados piensa en su negocio, no solo en facturar.

## ¿Qué hacer con las respuestas?

Compare partners con la misma checklist y la misma información. Pida las propuestas por escrito y revise que ambas contemplen lo mismo. Y recuerde: **el mejor momento para hacer preguntas es antes de firmar** — después, todo es más caro de corregir.

> En Cygnus respondemos estas 15 preguntas sin rodeos y con números. Solicite una consultoría inicial sin costo: un consultor certificado revisa su caso, le muestra casos de referencia y le alcanza una propuesta con alcance y precio cerrado en menos de 24 horas hábiles.

## Sigue leyendo

- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
- [On-Premise vs Nube vs Alquiler: cómo elegir la modalidad de SAP Business One](/blog/on-premise-vs-nube-vs-alquiler-sap-b1/)
`,q=`---
title: "¿Qué son las letras por pagar y por cobrar? Guía con SAP Business One"
metaTitle: "¿Qué son las letras por pagar y por cobrar?"
date: 2026-08-26
draft: true
excerpt: "Letras por pagar y letras por cobrar: qué son, cuándo se usan y cómo se administran en SAP Business One con el módulo de letras de Cygnus."
tags: [letras, tesorería, cobranza, add-ons]
---

Las letras son uno de los instrumentos de pago más usados por las empresas peruanas para financiar sus operaciones comerciales. Sin embargo, gestionarlas en planillas de Excel o con procesos manuales genera errores, retrasos en la cobranza y pérdida de trazabilidad. En esta guía explicamos qué son las letras por pagar y por cobrar, y cómo SAP Business One ayuda a automatizarlas.

## ¿Qué es una letra por pagar?

Una letra por pagar es un título de crédito mediante el cual su empresa se compromete a pagar una deuda a un proveedor en una fecha futura. Es una **obligación**: la contraparte que emite o acepta la letra queda obligada a cancelar el monto (más intereses, si se pactan) en el vencimiento.

En la práctica se usa cuando un proveedor otorga plazo a su empresa: en lugar de pagar al contado, se firma o acepta la letra y el pago queda programado. Desde el punto de vista contable, las letras por pagar forman parte del pasivo de la empresa.

## ¿Qué es una letra por cobrar?

Una letra por cobrar es el caso inverso: es el **derecho** de su empresa a cobrar un monto a un cliente en una fecha futura. Se origina típicamente cuando su empresa vende a crédito y el cliente acepta una letra como forma de pago, o cuando se realiza el canje de facturas por letras para formalizar el financiamiento de la venta.

Las letras por cobrar son un activo de la empresa y requieren seguimiento: control de vencimientos, cambios de estado (canje, protesto, cobro) y conciliación con el banco cuando se descuentan o negocian.

## ¿Por qué conviene administrar las letras en SAP Business One?

Llevar las letras fuera del ERP obliga a registrar cada movimiento dos veces y a conciliar manualmente, con riesgo de errores y de perder el estado real de cada documento. Con las letras gestionadas en SAP Business One:

- El **canje** de facturas, notas de crédito, notas de débito y letras se registra en simples pasos.
- El **estado de cada letra** (emitida, aceptada, protestada, cobrada) queda actualizado y con historial.
- La **impresión** de las letras se hace de forma masiva, en formato impreso o pre-impreso.
- La **conciliación bancaria** se automatiza con la actualización masiva del número único enviado por el banco.
- Se obtienen **informes de seguimiento** como el estado de cuenta de documentos por cobrar y las letras protestadas.

## ¿Qué beneficios trae el módulo de letras de Cygnus?

El **módulo de Letras por Cobrar de Cygnus** es un add-on 100% integrado a SAP Business One que automatiza todo el proceso, control, seguimiento y trazabilidad de las letras:

- Agiliza los tiempos operativos en el registro del canje y los cambios de estado.
- Garantiza visualización, control y trazabilidad completa de las letras por cobrar.
- Automatiza la conciliación y facilita el análisis financiero y contable.
- Permite obtener un claro estado de cuenta de sus clientes.
- Maximiza la productividad de la gestión de cobranzas en las fechas y plazos acordados.
- Con auditoría: navegación sencilla por los documentos y asientos contables generados.

> ¿Quiere automatizar la gestión de letras de su empresa? Hable con un consultor certificado de Cygnus: le respondemos en menos de 24 horas hábiles y le alcanzamos la ficha técnica del add-on.

## Sigue leyendo

- [Facturación electrónica SUNAT con SAP Business One](/blog/facturacion-electronica-sunat-sap-b1/)
- [¿Cuánto cuesta implementar SAP Business One? Primero, definamos el alcance](/blog/cuanto-cuesta-implementar-sap-business-one-peru/)
`,P=Object.assign({"../../content/blog/cuanto-cuesta-implementar-sap-business-one-peru.md":m,"../../content/blog/cuanto-cuesta-licencia-sap-business-one-peru.md":g,"../../content/blog/detracciones-sunat-guia-practica.md":b,"../../content/blog/facturacion-electronica-sunat-sap-b1.md":y,"../../content/blog/on-premise-vs-nube-vs-alquiler-sap-b1.md":f,"../../content/blog/preguntas-para-elegir-partner-sap-business-one.md":v,"../../content/blog/que-son-letras-por-pagar-y-letras-por-cobrar.md":q}),S=Object.entries(P).map(([e,n])=>{var a;const o=((a=e.split("/").pop())==null?void 0:a.replace(/\.md$/,""))??"post";return p(o,n)}).filter(e=>!e.draft).sort((e,n)=>e.date<n.date?1:-1),O=e=>S.find(n=>n.slug===e);export{S as b,z as f,O as g,h as r};
