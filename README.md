# 🏥 MediEquipDB — Sistema de Gestión de Equipo Médico con QR

Sistema web para la gestión y acceso rápido a guías de uso de equipo médico hospitalario mediante códigos QR. Sin backend requerido — funciona 100% como sitio estático en GitHub Pages.

---

## 📋 Equipos incluidos

| ID | Equipo | Modelo | Ubicación |
|----|--------|--------|-----------|
| DEF-001 | Desfibrilador | ZOLL R Series Plus | Urgencias — Cubículo 1 |
| VENT-001 | Ventilador Volumétrico | Puritan Bennett 840 | UCI — Cama 4 |
| MON-001 | Monitor de Signos Vitales | Philips IntelliVue MX450 | Medicina Interna — Cuarto 12 |

---

## 🚀 Despliegue en GitHub Pages (paso a paso)

### 1. Crear repositorio en GitHub

```bash
git init
git add .
git commit -m "feat: MediEquipDB v1.0 — sistema equipo médico con QR"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mediequipdb.git
git push -u origin main
```

### 2. Activar GitHub Pages

1. Ir a tu repositorio en GitHub
2. **Settings** → **Pages** (menú lateral)
3. En **Source**: seleccionar `Deploy from a branch`
4. En **Branch**: seleccionar `main` y carpeta `/ (root)`
5. Clic en **Save**

Tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/mediequipdb/
```

### 3. Actualizar URLs de QR

Los QR generados apuntan automáticamente al dominio actual. En producción, cada QR apuntará a:
```
https://TU_USUARIO.github.io/mediequipdb/?guide=DEF-001
https://TU_USUARIO.github.io/mediequipdb/?guide=VENT-001
https://TU_USUARIO.github.io/mediequipdb/?guide=MON-001
```

---

## 📁 Estructura del proyecto

```
mediequipdb/
├── index.html                  # Entrada principal
├── README.md
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD automático (opcional)
└── src/
    ├── styles/
    │   └── main.css            # Estilos principales
    ├── data/
    │   └── equipment.js        # 📦 Base de datos de equipos y guías
    ├── components/
    │   ├── equipmentCard.js    # Tarjetas del dashboard
    │   ├── guideRenderer.js    # Renderizador de guías de uso
    │   ├── qrGenerator.js      # Generador de códigos QR
    │   └── admin.js            # Panel de administración
    └── app.js                  # Enrutamiento e inicialización
```

---

## ➕ Agregar un nuevo equipo

### Opción A — Desde la interfaz (Admin)
1. Ir a la sección **Administrar**
2. Completar el formulario al final de la página
3. El equipo aparece inmediatamente en el dashboard y QR generator

> ⚠️ Los cambios hechos desde la UI son **temporales** (en memoria). Para hacerlos permanentes, edita `equipment.js`.

### Opción B — Editando `equipment.js`

Agrega un nuevo objeto al array `EQUIPMENT_DB`:

```javascript
{
  id: "MON-002",                          // ID único
  name: "Monitor de Signos Vitales",      // Nombre del equipo
  model: "Philips MX500",                 // Marca y modelo
  type: "monitor",                        // desfibrilador | ventilador | monitor
  icon: "📊",                             // Emoji representativo
  location: "UCI — Cama 8",              // Ubicación física
  status: "active",                       // active | inactive
  lastMaintenance: "2025-01-10",          // Fecha último mantenimiento
  serialNumber: "MX500-001",              // Número de serie
  guide: {
    alert: "Texto de aviso de seguridad...",
    sections: [
      {
        title: "🔌 Encendido",
        steps: [
          { text: "Paso 1..." },
          { text: "Paso 2..." },
        ]
      },
      {
        title: "📊 Parámetros",
        type: "params",
        params: [
          { label: "FC mínima", value: "50 lpm" },
        ]
      },
      {
        title: "⚠️ Alarmas",
        type: "alarms",
        alarms: [
          { color: "#ff5c6a", name: "ALARMA CRÍTICA", desc: "Descripción" },
        ]
      }
    ]
  }
}
```

---

## 🔄 CI/CD automático con GitHub Actions (opcional)

El archivo `.github/workflows/deploy.yml` despliega automáticamente al hacer push a `main`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

---

## 📱 Uso del sistema QR

1. **Generar QR**: Ir a "Generar QR" → seleccionar equipo → imprimir etiqueta
2. **Adherir**: Pegar la etiqueta QR en el equipo físico (lugar visible)
3. **Escanear**: El personal médico escanea el QR con cualquier smartphone
4. **Acceso directo**: La guía de uso rápido se abre inmediatamente sin necesidad de login

---

## 🛠️ Personalización del hospital

Editar en `index.html`:
```html
<div class="nav-badge">Hospital General</div>  <!-- Nombre del hospital -->
```

---

## 📄 Licencia

Uso institucional hospitalario. Adaptado libremente para necesidades clínicas.

---

*MediEquipDB v1.0 — Sistema de Gestión de Equipo Médico*
