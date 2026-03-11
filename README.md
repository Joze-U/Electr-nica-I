## Diagrama de flujo

```mermaid
flowchart TD

A([Inicio]) --> B[Solicitar número de jugadores]
B --> C[Leer numeroJugadores]
C --> D[i = 0]

D --> E{¿i < numeroJugadores?}

E -->|Sí| F[Solicitar identificación]
F --> G[Leer identificación]

G --> H[Solicitar nombre]
H --> I[Leer nombre]

I --> J[Solicitar partidas jugadas]
J --> K[Leer partidas]

K --> L[Solicitar victorias]
L --> M[Leer victorias]

M --> N[Solicitar empates]
N --> O[Leer empates]

O --> P[Solicitar derrotas]
P --> Q[Leer derrotas]

Q --> R[Guardar datos en arreglos]

R --> S[i = i + 1]
S --> E

E -->|No| T[i = 0]
T --> U[totalPuntosMes = 0]

U --> V{¿i < numeroJugadores?}

V -->|Sí| W[Calcular puntosJugador = (victorias × 3) + empates]
W --> X[totalPuntosMes = totalPuntosMes + puntosJugador]

X --> Y[i = i + 1]
Y --> V

V -->|No| Z[Mostrar totalPuntosMes]

Z --> AA([Fin])
---
# Gestión de resultados de un torneo local de TCG

## Enunciado del ejercicio

Me han contratado como desarrollador de software para crear una aplicación para un torneo local de **Pokémon TCG**.  
La primera parte del torneo tomará un mes, en donde cada jugador tratará de conseguir la mayor cantidad de puntos para clasificar.

La aplicación debe registrar:

- Identificación de cada jugador
- Nombre del jugador
- Partidas jugadas
- Puntos conseguidos durante el mes

---

## Aclaraciones

- Cada jugador puede participar en diferente cantidad de partidas.
- Solo se calculan los resultados correspondientes en un único mes.
- El cálculo corresponde únicamente al total de puntos obtenidos.
- Para este ejercicio no es obligatorio almacenar los datos de manera permanente.

---

# Historia de Usuario

**Título:** Cálculo y visualización de nómina mensual  

**Como:** Coordinador de Nómina  
**Quiero:** Ingresar los datos de los jugadores (identificación, nombre, número de partidas jugadas, puntos obtenidos)  
**Para:** Calcular automáticamente el total de puntos por jugador y un ranking ordenado de mayor a menor.

### Descripción

El sistema debe permitir registrar múltiples jugadores, calcular el total de puntos por jugador y mostrar el total acumulado del mes.

---

## Requisitos

La herramienta permite registrar los siguientes datos de cada jugador:

- Identificación del jugador
- Nombre del jugador
- Número de partidas jugadas en el mes
- Número de victorias
- Número de empates
- Número de derrotas

---

## Reglas de Cálculo

Los puntos se asignan de la siguiente manera:

- **3 puntos** por cada victoria
- **1 punto** por cada empate
- **0 puntos** por cada derrota

### Fórmula

---

## Criterios de aceptación

- Permite registrar **1 o más jugadores**.
- Permite ingresar el **número de victorias, empates y derrotas**.
- Calcula correctamente los puntos usando la **fórmula establecida**.
- Permite visualizar un **ranking ordenado de mayor a menor puntaje**.

---

# Diagrama UML: Caso de Uso

## Caso de uso extendido

**Nombre:** Calcular Ranking de puntos de Pokémon TCG  

**Actores:** Coordinador de torneo  

**Propósito:** Registrar y calcular el total de puntos de los jugadores para el ranking del mes.

---

## Curso de eventos

1. El coordinador de torneo ingresa la cantidad de jugadores a procesar.
2. Para cada jugador:
   - Ingresa la identificación.
   - Ingresa el nombre.
   - Ingresa la cantidad de partidas jugadas.
   - Ingresa la cantidad de partidas **ganadas, empatadas y perdidas**.
3. La aplicación registra los datos ingresados.

Una vez registrados todos los jugadores:

- El sistema recorre la información almacenada.
- Calcula los **PT (Puntos Totales)** de cada jugador usando la operación:

- Acumula cada resultado en una variable que representa el **total de puntos del mes**.
- La aplicación muestra en pantalla el **total consolidado de puntos**.

**Postcondición:** El total de PT ha sido calculado y mostrado al usuario.

---

# Pseudocódigo

```text
Inicio

Caracteres: identificaciones[50], nombres[50]
Entero: partidasJugadas[50], victorias[50], empates[50], derrotas[50]

Caracteres: identificacion, nombre
Entero: numeroJugadores, i
Entero: puntosJugador[50]

Entero: totalPuntosMes <- 0

Imprimir: "Digite el número de jugadores:"
Asignar: numeroJugadores

Para i = 0 hasta numeroJugadores - 1

    Imprimir: "Digite la identificación del jugador:"
    Asignar: identificacion

    Imprimir: "Digite el nombre del jugador:"
    Asignar: nombre

    Imprimir: "Digite el número de partidas jugadas:"
    Asignar: partidas

    Imprimir: "Digite el número de victorias:"
    Asignar: v

    Imprimir: "Digite el número de empates:"
    Asignar: e

    Imprimir: "Digite el número de derrotas:"
    Asignar: d

    identificaciones[i] <- identificacion
    nombres[i] <- nombre
    partidasJugadas[i] <- partidas
    victorias[i] <- v
    empates[i] <- e
    derrotas[i] <- d

FinPara

Para i = 0 hasta numeroJugadores - 1

    puntosJugador[i] <- (victorias[i] * 3) + empates[i]
    totalPuntosMes <- totalPuntosMes + puntosJugador[i]

FinPara

Imprimir: "El total de puntos acumulados del mes es: " + totalPuntosMes

Fin

---

