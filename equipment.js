// ============================================================
// equipment.js — Base de datos de equipos médicos
// Incluye guías de uso rápido para cada equipo
// ============================================================

const EQUIPMENT_DB = [
  // ────────────────────────────────────────────────
  // 1. DESFIBRILADOR
  // ────────────────────────────────────────────────
  {
    id: "DEF-001",
    name: "Desfibrilador",
    model: "ZOLL R Series Plus",
    type: "desfibrilador",
    icon: "⚡",
    location: "Urgencias — Cubículo 1",
    status: "active",
    lastMaintenance: "2024-11-15",
    serialNumber: "ZR-2024-00142",
    guide: {
      alert: "⚠️ EMERGENCIA CARDÍACA — Activar código azul simultáneamente. Iniciar RCP hasta disponibilidad del equipo.",
      sections: [
        {
          title: "🔌 Encendido y preparación",
          steps: [
            { text: "<strong>Enciende</strong> el equipo presionando el botón de encendido (esquina superior derecha). El autotest tarda ~10 segundos." },
            { text: "Conecta los <strong>electrodos adhesivos</strong>: parche negro (ápex, debajo clavícula derecha) y rojo (línea medioaxilar izquierda, nivel V5)." },
            { text: "Selecciona el modo: <strong>DEA automático</strong> para personal no especializado; <strong>Manual</strong> para médico/enfermería capacitada." },
            { text: "Confirma que el paciente <strong>no esté en contacto</strong> con agua ni metal conductor." },
          ]
        },
        {
          title: "⚡ Desfibrilación (modo manual)",
          steps: [
            { text: "Selecciona energía: <strong>200 J bifásico</strong> (primera descarga). Adulto estándar 75 kg." },
            { text: "Presiona botón <strong>CARGA</strong> (naranja). El equipo emite tono continuo al estar listo (~6 seg)." },
            { text: "Anuncia en voz alta: <strong>\"Todos fuera\"</strong>. Verifica que nadie toque al paciente." },
            { text: "Presiona botón <strong>DESCARGA</strong> (rojo). El equipo registra la descarga automáticamente." },
            { text: "Retoma <strong>RCP inmediatamente</strong> por 2 minutos antes de re-evaluar ritmo." },
          ]
        },
        {
          title: "📊 Parámetros de referencia",
          type: "params",
          params: [
            { label: "1ª descarga", value: "200 J" },
            { label: "2ª descarga", value: "300 J" },
            { label: "3ª descarga", value: "360 J" },
            { label: "FV/TVSP adulto", value: "200–360 J" },
            { label: "Pediátrico (<8 años)", value: "2–4 J/kg" },
            { label: "Intervalo mínimo", value: "2 min RCP" },
          ]
        },
        {
          title: "⚠️ Alarmas frecuentes",
          type: "alarms",
          alarms: [
            { color: "#ff5c6a", name: "ELECTRODOS DESCONECTADOS", desc: "Verificar adhesión y conexión de parches" },
            { color: "#ffd166", name: "BAJA BATERÍA", desc: "Conectar a corriente AC antes de continuar" },
            { color: "#ffd166", name: "MOVIMIENTO DEL PACIENTE", desc: "Detener análisis, inmovilizar y reiniciar" },
            { color: "#00e5a0", name: "LISTO PARA DESCARGA", desc: "Tono continuo + LED verde parpadeante" },
          ]
        },
        {
          title: "🔒 Apagado y mantenimiento",
          steps: [
            { text: "Mantén presionado el botón de apagado 3 segundos. El equipo generará <strong>reporte de evento</strong> automático." },
            { text: "Retira y desecha los electrodos usados. Coloca <strong>electrodos nuevos</strong> en la bolsa de repuesto." },
            { text: "Conecta a cargador AC. La carga completa toma <strong>2–3 horas</strong>." },
            { text: "Documenta el evento en el <strong>sistema de registros clínicos</strong> HIS." },
          ]
        },
      ]
    }
  },

  // ────────────────────────────────────────────────
  // 2. VENTILADOR VOLUMÉTRICO PURITAN BENNETT 840
  // ────────────────────────────────────────────────
  {
    id: "VENT-001",
    name: "Ventilador Volumétrico",
    model: "Puritan Bennett 840",
    type: "ventilador",
    icon: "🫁",
    location: "UCI — Cama 4",
    status: "active",
    lastMaintenance: "2024-10-28",
    serialNumber: "PB840-19-0883",
    guide: {
      alert: "⚠️ Nunca modificar parámetros sin orden médica. Ante alarma crítica, cambia a ventilación manual (ambú) y llama al médico de guardia.",
      sections: [
        {
          title: "🔌 Encendido e inicio",
          steps: [
            { text: "Conecta el equipo a <strong>corriente y gases medicinales</strong> (O₂ y aire comprimido). Verifica presión de gases ≥ 45 psi." },
            { text: "Presiona <strong>ON/OFF</strong>. El autotest dura ~120 segundos. No interrumpir." },
            { text: "Cuando aparezca la pantalla de bienvenida, selecciona <strong>\"Nuevo Paciente\"</strong> e ingresa tipo (adulto/pediátrico) y peso ideal." },
            { text: "Conecta el circuito de paciente y realiza el <strong>test de fuga</strong> antes de conectar al paciente (menú Service → Circuit Test)." },
          ]
        },
        {
          title: "⚙️ Configuración de modo ventilatorio",
          steps: [
            { text: "<strong>Modo A/C VC</strong>: Ventilación controlada por volumen. Configura VC, FR, PEEP, FiO₂ y tiempo inspiratorio." },
            { text: "<strong>Modo SIMV</strong>: Para destete. Reduce FR gradualmente mientras el paciente asume respiraciones espontáneas." },
            { text: "<strong>Modo PSV</strong>: Soporte de presión. Configura PS sobre PEEP. El paciente inicia cada ciclo." },
            { text: "Para modificar un parámetro: toca el valor en pantalla → gira la perilla → presiona <strong>ACCEPT</strong>. Los cambios se aplican al siguiente ciclo." },
          ]
        },
        {
          title: "📊 Parámetros iniciales (adulto 70 kg)",
          type: "params",
          params: [
            { label: "Volumen corriente (VC)", value: "420–490 mL" },
            { label: "Frecuencia respiratoria", value: "12–16 rpm" },
            { label: "PEEP", value: "5 cmH₂O" },
            { label: "FiO₂ inicial", value: "0.40" },
            { label: "Flujo pico", value: "40–60 L/min" },
            { label: "Presión límite (Pmax)", value: "35–40 cmH₂O" },
          ]
        },
        {
          title: "⚠️ Alarmas frecuentes",
          type: "alarms",
          alarms: [
            { color: "#ff5c6a", name: "APNEA", desc: "Sin respiración espontánea — el equipo activa backup automático" },
            { color: "#ff5c6a", name: "ALTA PRESIÓN VÍA AÉREA", desc: "Verificar secreciones, broncoespasmo o mordedura del tubo" },
            { color: "#ffd166", name: "BAJA PRESIÓN / FUGA", desc: "Revisar conexiones del circuito y hermeticidad" },
            { color: "#ffd166", name: "FiO₂ FUERA DE RANGO", desc: "Verificar suministro de O₂ y calibración de sensor" },
            { color: "#00e5a0", name: "ALARMA SILENCIADA", desc: "Activa solo por 2 min; evalúa causa antes de silenciar de nuevo" },
          ]
        },
        {
          title: "🔒 Proceso de desconexión / retiro",
          steps: [
            { text: "Solo bajo <strong>orden médica explícita</strong>. Prepara ambú y O₂ suplementario antes de desconectar." },
            { text: "Realiza un ensayo de respiración espontánea (ERS) en modo CPAP/PS a 5/5 por <strong>30–120 min</strong>. Monitorear signos vitales." },
            { text: "Si tolera el ERS, extubar bajo supervisión médica. Coloca <strong>oxígeno de alto flujo</strong> inmediatamente post extubación." },
            { text: "Desinfectar circuito y equipo según protocolo de <strong>CEYE</strong>. Registrar horas de uso en bitácora." },
          ]
        },
      ]
    }
  },

  // ────────────────────────────────────────────────
  // 3. MONITOR PHILIPS MX450
  // ────────────────────────────────────────────────
  {
    id: "MON-001",
    name: "Monitor de Signos Vitales",
    model: "Philips IntelliVue MX450",
    type: "monitor",
    icon: "📊",
    location: "Medicina Interna — Cuarto 12",
    status: "active",
    lastMaintenance: "2024-12-01",
    serialNumber: "MX450-22-4417",
    guide: {
      alert: "ℹ️ No silenciar alarmas sin evaluación clínica del paciente. Ante alarma roja, evaluar al paciente de inmediato.",
      sections: [
        {
          title: "🔌 Encendido y configuración",
          steps: [
            { text: "Presiona el botón de encendido (esquina inferior derecha). Tiempo de arranque: <strong>~40 segundos</strong>." },
            { text: "En la pantalla de inicio, selecciona el <strong>perfil del paciente</strong>: Adulto, Pediátrico o Neonatal." },
            { text: "Admite al paciente: menú <strong>Paciente → Admitir →</strong> ingresa nombre, ID y fecha de nacimiento. Esto sincroniza con el HIS." },
            { text: "Conecta los sensores en el siguiente orden: <strong>ECG → SpO₂ → NIBP → Temperatura → CO₂</strong> si aplica." },
          ]
        },
        {
          title: "❤️ Configuración de ECG / Ritmo",
          steps: [
            { text: "Conecta el cable de 5 derivaciones. Coloca electrodos: <strong>RA</strong> (hombro der), <strong>LA</strong> (hombro izq), <strong>LL</strong> (muslo izq), <strong>RL</strong> (muslo der), <strong>V</strong> (tórax, 4° EIC línea paraesternal izq)." },
            { text: "Selecciona derivación de monitoreo: menú ECG → Derivación → recomendado <strong>II y V1</strong>." },
            { text: "Activa el <strong>análisis de ST</strong>: menú ECG → ST → Activar. Ajusta los umbrales de alarma a ±0.2 mV." },
            { text: "Para análisis de arritmias: asegura que el modo <strong>ARRHYTHMIA ON</strong> esté activo (ícono verde en la barra superior)." },
          ]
        },
        {
          title: "📊 Parámetros y rangos normales (adulto)",
          type: "params",
          params: [
            { label: "FC (alarmas)", value: "50 – 120 lpm" },
            { label: "SpO₂ mínimo", value: "≥ 94 %" },
            { label: "NIBP Sistólica", value: "90 – 160 mmHg" },
            { label: "NIBP Diastólica", value: "50 – 100 mmHg" },
            { label: "FR alarma", value: "8 – 30 rpm" },
            { label: "Temp alarma", value: "35.5 – 38.5 °C" },
          ]
        },
        {
          title: "⚠️ Alarmas frecuentes",
          type: "alarms",
          alarms: [
            { color: "#ff5c6a", name: "SpO₂ CRÍTICA (< 85%)", desc: "Verificar sensor, posición y perfusión. Administrar O₂." },
            { color: "#ff5c6a", name: "ASISTOLIA / FV", desc: "Verificar electrodos. Iniciar protocolo RCP si confirmado." },
            { color: "#ffd166", name: "FC FUERA DE RANGO", desc: "Evaluar al paciente; puede ser artefacto por movimiento" },
            { color: "#ffd166", name: "NIBP NO MEDIDA", desc: "Verificar manguito, posición y conexión del cable" },
            { color: "#00e5a0", name: "ALARMA TÉCNICA (AZUL)", desc: "Revisión del sensor o cable, no urgencia clínica" },
          ]
        },
        {
          title: "🖨️ Exportar / Imprimir datos",
          steps: [
            { text: "Para imprimir la tira de ritmo: presiona el botón <strong>IMPRIMIR</strong> en el panel frontal o menú Imprimir → Tira ECG." },
            { text: "Para exportar tendencias: menú <strong>Revisión → Tendencias →</strong> selecciona parámetro y rango de tiempo → Exportar a HIS." },
            { text: "Para transferencia a red: verifica que el ícono de red esté activo (esquina superior izquierda). Datos se envían <strong>automáticamente al HIS</strong> cada 5 min." },
            { text: "Para cambio de turno: menú <strong>Paciente → Notas de Enfermería →</strong> registra eventos relevantes antes de la transferencia." },
          ]
        },
      ]
    }
  }
];

// Permite agregar nuevos equipos dinámicamente
function addEquipmentToDb(equipmentObj) {
  EQUIPMENT_DB.push(equipmentObj);
}

// Filtrar por tipo
function getEquipmentByType(type) {
  if (type === 'all') return EQUIPMENT_DB;
  return EQUIPMENT_DB.filter(e => e.type === type);
}

// Obtener por ID
function getEquipmentById(id) {
  return EQUIPMENT_DB.find(e => e.id === id);
}
