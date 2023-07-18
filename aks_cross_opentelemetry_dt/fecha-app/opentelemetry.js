// Librerias Open Telemetry para instrumentacion automatica
const opentelemetry = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-proto");
const {
  OTLPMetricExporter
} = require("@opentelemetry/exporter-metrics-otlp-proto");
const {
  PeriodicExportingMetricReader
} = require('@opentelemetry/sdk-metrics');

// Importar la librería para los recursos
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// Configurar el nivel de depuración
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Configurar SDK, export (dynatrace) y agregar propiedades de service
const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'fecha',
    [SemanticResourceAttributes.SERVICE_VERSION]: '1.0.0',
  }),
  traceExporter: new OTLPTraceExporter({
    url: `https://${process.env.DT_TENANT}/api/v2/otlp/v1/traces`,
    headers: {
            Authorization: `Api-Token ${process.env.DT_TOKEN}`
    },
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

// Iniciar entrega de traces por instrumentacion SDK
sdk.start();
