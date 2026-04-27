# 🚀 GUÍA DE IMPLEMENTACIÓN - 6 FASES DETALLADAS

**Proyecto:** Recuerdos Compartidos - Reestructuración Completa  
**Fecha Inicio:** Abril 20, 2026  
**Duración Total:** 5-6 horas (distribuidas en fases)  
**Framework:** Astro 4.16 + Tailwind CSS 3.4 + React 18.3  

---

## 📌 RECORDATORIO: Documentos de Referencia

Durante la implementación, consulta:
- `ZANALISIS/PLAN_RESTRUCTURACION_COMPLETA.md` - Estructura completa
- `ZANALISIS/RECOMENDACIONES_DISEÑO.md` - Código Tailwind y componentes
- `ZANALISIS/PLAN_ACCION_IMPLEMENTACION_FASES.md` - Detalles específicos por componente

---

# ⚙️ FASE 0: SETUP INICIAL (10 MIN)

## 🎯 Objetivo
Preparar ambiente: carpetas, configuración Tailwind, verificaciones

## ✅ Tareas Detalladas

### 0.1 Crear Carpetas de Componentes
```bash
# Desde la raíz del proyecto
mkdir -p src/components/servicios-empresariales
mkdir -p src/components/legal
mkdir -p src/components/faq
```

**Resultado esperado:** 3 carpetas nuevas vacías

---

### 0.2 Actualizar `src/tailwind.config.ts` - Agregar Colores Nuevos

**Archivo:** `src/tailwind.config.ts`

Busca la sección `extend > colors` y agrega DESPUÉS de los colores existentes (primary, secondary, accent):

```typescript
colors: {
  // ... Colores existentes (primary, secondary, accent, neutral-light) ...

  // NUEVOS COLORES PARA B2B
  business: {
    DEFAULT: '#0d3f2a',
    light: '#1a5c40',
  },

  energy: {
    DEFAULT: '#99D98E',
    light: '#a8e599',
    dark: '#6ab563',
  },

  information: {
    DEFAULT: '#4B7BA7',
    light: '#6496c0',
  },

  trust: {
    DEFAULT: '#6B7280',
    light: '#9CA3AF',
  },

  success: {
    DEFAULT: '#10B981',
    light: '#34D399',
  },
},
```

---

### 0.3 Verificar Imports Globales

**Archivo:** `src/styles/globals.css`

Asegurar que contiene:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
```

**Resultado:** Las 3 fuentes cargadas correctamente

---

### 0.4 Verificar Archivos Base

- ✅ `src/data/trabajos.ts` - Debe existir con datos de proyectos
- ✅ `src/layouts/MainLayout.astro` - Layout base para todas las páginas
- ✅ `src/components/ui/SectionTitle.astro` - Componente de título de sección

---

## 📋 CHECKPOINT FASE 0

**Validaciones:**
```
☐ Carpetas creadas: servicios-empresariales, legal, faq
☐ tailwind.config.ts tiene 5 colores nuevos
☐ globals.css tiene todas las fuentes
☐ trabajos.ts existe en src/data/
☐ npm run build → Sin errores
```

**Cuando todo esté OK:**
```bash
git add -A
git commit -m "FASE 0: Setup - Carpetas, colores Tailwind, verificaciones"
```

**Duración:** 10 min  
**Siguiente:** FASE 1

---

# 🏢 FASE 1: COMPONENTES CORE B2B (60 MIN)

## 🎯 Objetivo
Crear 2 componentes principales que son la base de /servicios-empresariales

---

## 1.1 Crear `src/components/servicios-empresariales/PlanesYPrecios.astro`

### Contenido Completo:

```astro
---
interface Plan {
  name: string;
  range: string;
  pricePerUnit: string;
  features: { label: string; included: boolean }[];
  cta: string;
  featured?: boolean;
}

interface Props {
  plans?: Plan[];
}

const defaultPlans: Plan[] = [
  {
    name: 'Small',
    range: '10-50 unidades',
    pricePerUnit: '$X-XX',
    features: [
      { label: 'Diseño personalizado', included: true },
      { label: 'Revisiones ilimitadas', included: true },
      { label: 'Soporte prioritario', included: false },
      { label: 'Descuento por volumen', included: false },
    ],
    cta: 'Solicitar Presupuesto',
  },
  {
    name: 'Medium',
    range: '50-200 unidades',
    pricePerUnit: '$X-XX',
    features: [
      { label: 'Diseño personalizado', included: true },
      { label: 'Revisiones ilimitadas', included: true },
      { label: 'Soporte prioritario', included: true },
      { label: 'Descuento por volumen', included: true },
    ],
    cta: 'Solicitar Presupuesto',
    featured: true,
  },
  {
    name: 'Large',
    range: '200+ unidades',
    pricePerUnit: 'Consultar',
    features: [
      { label: 'Diseño personalizado', included: true },
      { label: 'Revisiones ilimitadas', included: true },
      { label: 'Soporte prioritario', included: true },
      { label: 'Descuento por volumen', included: true },
    ],
    cta: 'Cotizar Proyecto',
  },
];

const { plans = defaultPlans } = Astro.props;
---

<section class="section-padding bg-white" aria-labelledby="pricing-title">
  <div class="container-main">
    <div class="text-center mb-16">
      <h2 id="pricing-title" class="font-display text-4xl font-bold text-primary mb-3">
        Planes de Precios por Volumen
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Precios especiales según la cantidad de unidades. Mayor volumen, mejor precio.
      </p>
    </div>

    <!-- Desktop: Grid 3 columnas -->
    <div class="hidden lg:grid lg:grid-cols-3 gap-6 mb-12">
      {plans.map((plan, idx) => (
        <div
          class={`card p-8 flex flex-col transition-all duration-300 ${
            plan.featured
              ? 'lg:scale-105 border-2 border-accent shadow-lg'
              : 'border border-neutral-light'
          }`}
        >
          {plan.featured && (
            <div class="bg-accent text-white text-center py-2 px-4 rounded-full mb-4 text-sm font-semibold">
              Más Popular
            </div>
          )}

          <h3 class="font-display text-2xl font-bold text-primary-dark mb-2">
            Plan {plan.name}
          </h3>

          <p class="text-sm text-gray-600 mb-4">{plan.range}</p>

          <div class="mb-6">
            <p class="text-gray-500 text-sm mb-1">Precio unitario</p>
            <p class="font-mono text-3xl font-bold text-accent">{plan.pricePerUnit}</p>
          </div>

          <ul class="space-y-3 mb-8 flex-grow">
            {plan.features.map((feature) => (
              <li class="flex items-start gap-2">
                <span
                  class={`${
                    feature.included ? 'text-success' : 'text-gray-300'
                  } font-bold text-lg`}
                >
                  {feature.included ? '✓' : '✗'}
                </span>
                <span class={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/59162699702"
            target="_blank"
            rel="noopener noreferrer"
            class={`btn-primary text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              plan.featured
                ? 'bg-accent text-white hover:bg-accent/90'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            {plan.cta}
          </a>
        </div>
      ))}
    </div>

    <!-- Mobile: Carrusel simple -->
    <div class="lg:hidden overflow-x-auto pb-4">
      <div class="flex gap-4 w-max">
        {plans.map((plan) => (
          <div class="card p-6 w-80 flex flex-col flex-shrink-0 border border-neutral-light">
            <h3 class="font-display text-xl font-bold text-primary mb-2">
              {plan.name}
            </h3>
            <p class="text-sm text-gray-600 mb-3">{plan.range}</p>
            <p class="font-mono text-2xl font-bold text-accent mb-4">
              {plan.pricePerUnit}
            </p>
            <a
              href="https://wa.me/59162699702"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary text-center py-2 px-4 rounded-lg font-semibold bg-primary text-white hover:bg-primary/90"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes slideInPrice {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .card {
    animation: slideInPrice 0.5s ease-out forwards;
  }

  .card:nth-child(2) {
    animation-delay: 0.1s;
  }

  .card:nth-child(3) {
    animation-delay: 0.2s;
  }
</style>
```

---

## 1.2 Crear `src/components/servicios-empresariales/ProcesoEmpresarial.astro`

### Contenido Completo:

```astro
---
interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: 'accent' | 'energy';
}

interface Props {
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: 'Elección de Producto y Personalización',
    description:
      'Selecciona un producto del catálogo y personalízalo con una o varias imágenes según lo requiera.',
    icon: '📦',
    color: 'accent',
  },
  {
    number: 2,
    title: 'Confirmación de Diseño',
    description:
      'Revisamos el diseño juntos. Cambios ilimitados hasta tu conformidad.',
    icon: '✏️',
    color: 'energy',
  },
  {
    number: 3,
    title: 'Cotización',
    description: 'Confirmamos el precio final y los detalles acordados.',
    icon: '💰',
    color: 'accent',
  },
  {
    number: 4,
    title: 'Realización del Pedido',
    description:
      'Posterior al depósito del 50%, iniciamos la producción con control de calidad.',
    icon: '🏭',
    color: 'energy',
  },
  {
    number: 5,
    title: 'Coordinación de Entrega',
    description:
      'Al terminar, coordinamos entrega (retiro en punto de entrega o envío externo).',
    icon: '🚚',
    color: 'accent',
  },
];

const { steps = defaultSteps } = Astro.props;
---

<section
  class="section-padding bg-gradient-to-br from-white to-business/3"
  aria-labelledby="process-title"
>
  <div class="container-main">
    <div class="text-center mb-16">
      <h2 id="process-title" class="font-display text-4xl font-bold text-primary mb-3">
        Nuestro Proceso Empresarial
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        5 pasos claros desde tu idea hasta la entrega final de tus regalos corporativos.
      </p>
    </div>

    <!-- Desktop: Timeline Horizontal -->
    <div class="hidden md:block">
      <div class="relative">
        <!-- Línea conectora -->
        <div class="absolute top-8 left-0 right-0 h-1 bg-neutral-light/50 z-0"></div>

        <!-- Steps -->
        <div class="grid grid-cols-5 gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div class="flex flex-col items-center">
              <!-- Círculo con número -->
              <div
                class={`w-16 h-16 rounded-full flex items-center justify-center font-mono text-2xl font-bold text-white mb-4 ${
                  step.color === 'accent' ? 'bg-accent' : 'bg-energy'
                }`}
              >
                {step.number}
              </div>

              <!-- Ícono -->
              <div class="text-4xl mb-3">{step.icon}</div>

              <!-- Título -->
              <h3 class="font-display text-lg font-semibold text-primary text-center mb-2">
                {step.title}
              </h3>

              <!-- Descripción -->
              <p class="text-sm text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <!-- Mobile: Timeline Vertical -->
    <div class="md:hidden space-y-6">
      {steps.map((step, idx) => (
        <div class="flex gap-4">
          <!-- Línea vertical -->
          <div class="flex flex-col items-center">
            <div
              class={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-white mb-2 ${
                step.color === 'accent' ? 'bg-accent' : 'bg-energy'
              }`}
            >
              {step.number}
            </div>
            {idx < steps.length - 1 && <div class="w-1 h-12 bg-neutral-light/50"></div>}
          </div>

          <!-- Contenido -->
          <div class="pb-4">
            <div class="text-3xl mb-2">{step.icon}</div>
            <h3 class="font-display text-lg font-semibold text-primary mb-1">
              {step.title}
            </h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  @keyframes slideInStep {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  div[class*='grid-cols-5'] > div {
    animation: slideInStep 0.6s ease-out forwards;
  }

  div[class*='grid-cols-5'] > div:nth-child(1) {
    animation-delay: 0.1s;
  }
  div[class*='grid-cols-5'] > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div[class*='grid-cols-5'] > div:nth-child(3) {
    animation-delay: 0.3s;
  }
  div[class*='grid-cols-5'] > div:nth-child(4) {
    animation-delay: 0.4s;
  }
  div[class*='grid-cols-5'] > div:nth-child(5) {
    animation-delay: 0.5s;
  }
</style>
```

---

## 📋 CHECKPOINT FASE 1

**Validaciones:**
```
☐ PlanesYPrecios.astro creado en servicios-empresariales/
☐ ProcesoEmpresarial.astro creado en servicios-empresariales/
☐ Ambos archivos tienen sintaxis Astro correcta
☐ npm run build → Sin errores
☐ Revisar visualmente en navegador (si deseas)
```

**Cuando todo esté OK:**
```bash
git add -A
git commit -m "FASE 1: Componentes core PlanesYPrecios + ProcesoEmpresarial"
```

**Duración:** 60 min  
**Siguiente:** FASE 2 (8 componentes B2B complementarios)

---

# 🎨 FASE 2: COMPONENTES B2B COMPLEMENTARIOS (90 MIN)

## 🎯 Objetivo
Crear 8 componentes B2B que completan la página /servicios-empresariales

Consulta `ZANALISIS/PLAN_ACCION_IMPLEMENTACION_FASES.md` Sección "FASE 2" para el contenido exacto de cada componente:

1. **HeroEmpresarial.astro** - Hero específico para empresas
2. **BeneficiosEmpresa.astro** - 5-6 beneficios con iconos
3. **CasosExito.astro** - Galería de proyectos (reusar trabajos.ts)
4. **ProductosB2B.astro** - 4 productos realizables
5. **CronogramaProduccion.astro** - Tabla de tiempos
6. **PoliticasEmpresa.astro** - Políticas B2B
7. **FAQEmpresarial.astro** - Preguntas frecuentes empresas
8. **CTAEmpresarial.astro** - Banner CTA final

**📋 CHECKPOINT FASE 2:**
```
☐ 8 componentes creados en servicios-empresariales/
☐ npm run build → Sin errores
☐ Revisar colores Tailwind aplicados
☐ Responsive: mobile, tablet, desktop
```

**Commit:**
```bash
git commit -m "FASE 2: 8 componentes B2B complementarios"
```

---

# ⚖️ FASE 3: LEGAL + FAQ (60 MIN)

## 🎯 Objetivo
Crear 8 componentes: 3 para legal, 5 para FAQ

Consulta `ZANALISIS/PLAN_ACCION_IMPLEMENTACION_FASES.md` Sección "FASE 3" para contenido exacto.

**Legal (3 componentes en src/components/legal/):**
1. PoliticaPrivacidad.astro
2. TerminosCondiciones.astro
3. PoliticaEntregas.astro

**FAQ (5 componentes en src/components/faq/):**
1. FAQPersonalizacion.astro
2. FAQEntregas.astro
3. FAQPagos.astro
4. FAQGarantia.astro
5. FAQEmpresas.astro

**📋 CHECKPOINT FASE 3:**
```
☐ 8 componentes creados
☐ npm run build → Sin errores
☐ Estructura <details> con animaciones
```

**Commit:**
```bash
git commit -m "FASE 3: 8 componentes Legal + FAQ"
```

---

# 📄 FASE 4: CREAR PÁGINAS NUEVAS (45 MIN)

## 🎯 Objetivo
Crear 3 páginas que importan todos los componentes

Consulta `ZANALISIS/PLAN_ACCION_IMPLEMENTACION_FASES.md` Sección "FASE 4" para código exacto.

**Páginas:**
1. `src/pages/servicios-empresariales.astro` (importa 10 componentes B2B)
2. `src/pages/legal.astro` (importa 3 componentes legal)
3. `src/pages/faq.astro` (importa 5 componentes faq)

**📋 CHECKPOINT FASE 4:**
```
☐ 3 páginas creadas
☐ npm run build → Sin errores
☐ Navegar a cada URL funciona
☐ Meta tags SEO correctos
```

**Commit:**
```bash
git commit -m "FASE 4: 3 páginas nuevas (servicios-empresariales, legal, faq)"
```

---

# 🔄 FASE 5: MODIFICACIONES EXISTENTES (60 MIN)

## 🎯 Objetivo
Actualizar homepage, catálogo, header, footer y eliminar páginas viejas

Consulta `ZANALISIS/PLAN_ACCION_IMPLEMENTACION_FASES.md` Sección "FASE 5" para detalles.

**Cambios principales:**
- `src/pages/index.astro` - 9 secciones (eliminar WorkPreview, WhyChooseUs)
- `src/pages/catalogo.astro` - Agregar proceso completo
- `src/components/home/PersonalizationProcess.astro` - Versión compacta (3 pasos)
- `src/components/layout/Header.astro` - Links actualizados
- `src/components/layout/Footer.astro` - Links + sección Legal
- `src/tailwind.config.ts` y `src/astro.config.mjs` - Configuración
- **Eliminar:** `src/pages/empresas.astro`, `src/pages/trabajos-previos.astro`

**📋 CHECKPOINT FASE 5:**
```
☐ Homepage tiene 9 secciones (visible en navegador)
☐ Header/Footer links correctos
☐ Antiguas páginas eliminadas
☐ npm run build → Sin errores
```

**Commit:**
```bash
git commit -m "FASE 5: Modificaciones homepage, header, footer, config"
```

---

# ✅ FASE 6: VALIDACIÓN FINAL (30 MIN)

## 🎯 Objetivo
Validar que TODO funciona correctamente

**Checklist completo:**
```
☐ npm run build sin errores
☐ Páginas accesibles: /, /catalogo, /servicios-empresariales, /legal, /faq
☐ Links internos funcionan (Header, Footer, CTAs)
☐ Responsive: mobile (375px), tablet (768px), desktop (1920px)
☐ Meta tags SEO en cada página
☐ Imágenes cargan desde Cloudinary
☐ Sitemap.xml generado (dist/sitemap-0.xml)
☐ Colores Tailwind aplicados correctamente
☐ Animaciones suaves (no jumpy)
☐ Lighthouse score > 80 (performance)
```

**Commit:**
```bash
git commit -m "FASE 6: Validación completa - LISTO PARA PRODUCCIÓN"
```

---

## 📊 RESUMEN DE CAMBIOS

| Tipo | Cantidad | Detalles |
|------|----------|---------|
| **Nuevas Páginas** | 3 | servicios-empresariales, legal, faq |
| **Nuevos Componentes** | 16 | 10 B2B + 3 Legal + 5 FAQ |
| **Archivos Modificados** | 7 | index, catalogo, Header, Footer, config |
| **Archivos Eliminados** | 2 | empresas.astro, trabajos-previos.astro |
| **Total Archivos** | 28 | Cambios en proyecto |

---

## 🎯 REGLAS IMPORTANTES

1. ✅ **Leer RECOMENDACIONES_DISEÑO.md** cuando necesites código Tailwind
2. ✅ **Copiar contenido EXACTO** del usuario (políticas, FAQ, etc.)
3. ✅ **Validar checkpoint** antes de siguiente fase
4. ✅ **Hacer commit** después de CADA fase
5. ✅ **Mobile-first:** xs/sm → md → lg/xl
6. ✅ **Si npm build falla**, DETENER y revisar

---

## 🚀 PROCEDER CON FASE 0

**Estado actual:** ✅ Listo para comenzar

Procediendo ahora con **FASE 0** (Setup):
1. Crear 3 carpetas
2. Actualizar tailwind.config.ts
3. Verificaciones
4. npm run build
5. Commit

¡Empezando! 🚀
