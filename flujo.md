```mermaid
flowchart TD

    A[Inicio] --> B[Ingresar Número 1]
    B --> C[Ingresar Número 2]
    C --> D[Realizar Suma]
    D --> E[Mostrar Resultado de Suma]
    E --> F[Realizar Resta]
    F --> G[Mostrar Resultado de Resta]
    G --> H[Realizar Multiplicación]
    H --> I[Mostrar Resultado de Multiplicación]
    I --> J{¿num2 es distinto de 0?}
    J -->|Sí| K[Realizar División]
    J -->|No| L[Mostrar mensaje de error y terminar]
    K --> M[Mostrar Resultado de División]
    M --> N[Realizar Módulo]
    N --> O[Mostrar Resultado de Módulo]
    O --> P[Fin]
