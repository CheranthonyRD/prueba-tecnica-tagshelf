### instructions

1. Escriba una implementación de conversión de las siguientes representaciones:
a. RGB a HSV
b. HSV a RGB


Consideraciones tomar en cuenta:
● Sin ramas (evaluaciones de condiciones).
● Preferiblemente utilizando instrucciones de SIMD.
● Que soporte un alto número de conversiones.
● Tenga en cuenta las opciones de diseño específicas para su elección de
hardware.

Ver: http://en.wikipedia.org/wiki/HSV_color_space



#### Formula to convert RGB to HSV

To convert between RGB (Red, Green, Blue) and HSV (Hue, Saturation, Value), you can use the following formulas:

For converting from RGB to HSV:
RGB to HSV conversion formula
The R,G,B values are divided by 255 to change the range from 0..255 to 0..1:

R' = R/255

G' = G/255

B' = B/255

Cmax = max(R', G', B')

Cmin = min(R', G', B')

Δ = Cmax - Cmin

Hue calculation: 

Saturation calculation: 

Value calculation:

V = Cmax


### Formula to convert HSV to RGB

For converting from HSV to RGB:
1. If S is 0, then the color is grayscale and R, G, and B will all be V.
2. Calculate the hue value in terms of the color wheel (H/60).
3. Calculate the intermediate values (X, C, m) using the formulas:
- X = C * (1 - |(H/60) mod 2 - 1|)
- C = V * S
- m = V - C
4. Calculate the RGB values using the formulas:
- If 0 <= H' < 1, then (R, G, B) = (C, X, 0)
- If 1 <= H' < 2, then (R, G, B) = (X, C, 0)
- If 2 <= H' < 3, then (R, G, B) = (0, C, X)
- If 3 <= H' < 4, then (R, G, B) = (0, X, C)
- If 4 <= H' < 5, then (R, G, B) = (X, 0, C)
- If 5 <= H' < 6, then (R, G, B) = (C, 0, X)