# GLSL Snippets

Painting by numbers was never so easy...


## Index

- [Macros](#macro)
- [Constructors](#constructor)
- [Functions](#function)
- [Uniforms](#uniform)
- [Blend Modes](#blend-mode)
- [Blurs](#blur)
- [Colors](#color)
- [Composites](#composite)
- [Curves](#curve)
- [Environments](#environment)
- [Filters](#filter)
- [Hashs](#hash)
- [Interpolations](#interpolation)
- [Lightings](#lighting)
- [Lights](#light)
- [Maths](#math)
- [Marchs](#march)
- [Cameras](#camera)
- [View Matrixs](#view-matrix)
- [Renderers](#renderer)
- [Noises](#noise)
- [Palettes](#palette)
- [SDF 2Ds](#sdf-2d)
- [SDFs](#sdf)
- [SDF Booleans](#sdf-boolean)
- [SDF Operations](#sdf-operation)
- [Spheres](#sphere)
- [Texture Maps](#texture-map)
- [Bump Maps](#bump-map)
- [Normal Maps](#normal-map)
- [Vector 2s](#vector-2)
- [Vector 3s](#vector-3)
- [Shaders](#shader)
## Reference

| Prefix | Name | Description |
| - | - | - |
| `main func` | Main Function | Entry function called upon shader initialization. |
| `Fractal Teapot Credit` | Fractal Teapot Credit | Deep breath... And... Begin. |
## Macros

| Prefix | Name | Description |
| - | - | - |
| `*rnd S` | Small Random Float | Base 10 random number of form 0.000######. |
| `*rnd`, `*rnd float` | Random Float | Base 10 random number of form 0.######. |
| `*rnd L` | Large Random Float | Base 10 random number of form ######.######. |
| `*rnd 2`, `*rnd vec2` | Random Vector 2 | Pair of base 10 random numbers, each of form 0.######. |
| `*rnd 3`, `*rnd vec3` | Random Vector 3 | Triplet of base 10 random numbers, each of form 0.######. |
| `*rnd 4`, `*rnd vec4` | Random Vector 4 | Quadruplet of base 10 random numbers, each of form 0.######. |
## Constructors

| Prefix | Name | Description |
| - | - | - |
| `vec2`, `-v2` | vec2 | Constructs a vec2 object. |
| `vec3`, `-v3` | vec3 | Constructs a vec3 object. |
| `vec4`, `-v4` | vec4 | Constructs a vec4 object. |
| `mat2`, `-m2` | mat2 | Constructs a mat2 object. |
| `mat3`, `-m3` | mat3 | Constructs a mat3 object. |
## Functions

| Prefix | Name | Description |
| - | - | - |
| `mix`, `-x` | mix | mix(start, end, value) |
## Uniforms

| Prefix | Name | Description |
| - | - | - |
| `_tex0` | tex0 | Uniform variable. |
| `_texBB` | texBB | Uniform variable. |
| `_p1` | param1 | Uniform variable. |
| `_p[1-4]` | param[1-4] | Uniform variable. |
| `_p[1-8]` | param[1-8] | Uniform variable. |
| `_p[1-16]` | param[1-16] | Uniform variable. |
| `_pos1` | pos1 | Uniform variable. |
| `_vpos1` | vpos1 | Uniform variable. |
| `_apos1` | apos1 | Uniform variable. |
| `_uRes` | uRes | Uniform variable. |
| `_uSeed` | uSeed | Uniform variable. |
| `_uTime` | uTime | Uniform variable. |
| `_color1` | color1 | Uniform variable. |
## Blend Modes

| Prefix | Name | Description |
| - | - | - |
| `All Blend Modes` | All | Additive blend mode. |
| `Add Blend Mode` | Add | Additive blend mode. |
| `Average Blend Mode` | Average | Average blend mode. |
| `Color Burn Blend Mode` | Color Burn | Color burn blend mode. |
| `Color Dodge Blend Mode` | Color Dodge | Color dodge blend mode. |
| `Darken Blend Mode` | Darken | Darken blend mode. |
| `Difference Blend Mode` | Difference | Difference blend mode. |
| `Exclusion Blend Mode` | Exclusion | Exclusion blend mode. |
| `Glow Blend Mode` | Glow | Glow blend mode. |
| `Hard Light Blend Mode` | Hard Light | Hard light blend mode. |
| `Hard Mix Blend Mode` | Hard Mix | Hard mix blend mode. |
| `Lighten Blend Mode` | Lighten | Lighten blend mode. |
| `Linear Burn Blend Mode` | Linear Burn | Linear burn blend mode. |
| `Linear Dodge Blend Mode` | Linear Dodge | Linear dodge blend mode. |
| `Linear Light Blend Mode` | Linear Light | Linear light blend mode. |
| `Multiply Blend Mode` | Multiply | Multiply blend mode. |
| `Negation Blend Mode` | Negation | Negation blend mode. |
| `Normal Blend Mode` | Normal | Normal blend mode. |
| `Overlay Blend Mode` | Overlay | Overlay blend mode. |
| `Phoenix Blend Mode` | Phoenix | Phoenix blend mode. |
| `Pin Light Blend Mode` | Pin Light | Pin light blend mode. |
| `Reflect Blend Mode` | Reflect | Reflect blend mode. |
| `Screen Blend Mode` | Screen | Screen blend mode. |
| `Soft Light Blend Mode` | Soft Light | Soft light blend mode. |
| `Subtract Blend Mode` | Subtract | Subtract blend mode. |
| `Vivid Light Blend Mode` | Vivid Light | Vivid light blend mode. |
## Blurs

| Prefix | Name | Description |
| - | - | - |
| `2 Pass Smoothstep Blur` | 2 Pass Smoothstep | Entry function called upon shader initialization. |
## Colors

| Prefix | Name | Description |
| - | - | - |
| `Film Grading - ACES` | ACES Film Grading | Academy Color Encoding System. |
| `Film Grading - Reinhard` | Reinhard Film Grading | Academy Color Encoding System. |
| `Blackbody Temperature to Color` | Blackbody | Converts a temperature to a color. http://www.physics.sfasu.edu/astro/color/blackbody.html |
| `Expand Colors`, `_expandColors` | Expand Colors | Expands color range from limited [16-235] to full [0-255]. |
| `HSV to RGB Color Space`, `_hsv2rgb` | HSV to RGB | Converts from HSV to RGB color space. |
| `HSV to RGB Color Space Smoothed`, `_hsv2rgb_smooth` | HSV to RGB Smooth | Converts from HSV to RGB color space with smoother color distrubution. https://www.shadertoy.com/view/MsS3Wc |
| `RGB to HSV Color Space` | RGB to HSV | Converts from HSV to RGB color space. |
| `Linear sRGB to sRGB Color Space` | Linear sRGB to sRGB | Converts from linear sRGB to sRGB color space. |
| `sRGB to Linear sRGB Color Space` | sRGB to Linear sRGB | Converts from sRGB to linear sRGB color space. |
| `Linear sRGB to Oklab Color Space` | Linear sRGB to Oklab | Converts from linear sRGB to Oklab color space. |
| `Oklab to Linear sRGB Color Space` | Oklab to Linear sRGB | Converts from Oklab color space to linear sRGB. |
## Composites

| Prefix | Name | Description |
| - | - | - |
| `Composite Straight Alpha` | Straight | With straight alpha, the RGB components represent the color of the object or pixel, disregarding its opacity. |
| `Composite Premultiplied Alpha` | Premultiply | With premultiplied alpha, the RGB components represent the emission of the object or pixel, and the alpha represents the occlusion. |
## Curves

| Prefix | Name | Description |
| - | - | - |
| `Gaussian Curve 2D` | Gaussian | With straight alpha, the RGB components represent the color of the object or pixel, disregarding its opacity. |
## Environments

| Prefix | Name | Description |
| - | - | - |
| `Sky Environment` | Sky | Generates basic sky toning for a given ray direction. |
## Filters

| Prefix | Name | Description |
| - | - | - |
| `Edge Detection Filter` | Edge Detection w/ Width | Draws edges along sharp transitions. |
## Hashs

| Prefix | Name | Description |
| - | - | - |
| `Hash 1 to 1` | 1 to 1 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 1 to 2` | 1 to 2 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 1 to 3` | 1 to 3 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 1 to 4` | 1 to 4 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 2 to 1` | 2 to 1 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 2 to 2` | 2 to 2 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 2 to 3` | 2 to 3 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 2 to 4` | 2 to 4 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 3 to 1` | 3 to 1 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 3 to 2` | 3 to 2 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 3 to 3` | 3 to 3 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 3 to 4` | 3 to 4 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Hash 4 to 4` | 4 to 4 | Hash without sine by Dave Hoskins: https://www.shadertoy.com/view/4djSRW |
| `Trigonmetric Hash 2D`, `Trigonmetric Random 2D` | Dirty Trig 2D | Basic random - probably don't use. |
| `Trigonmetric Hash 1D (vec3)`, `Trigonmetric Random 1D (vec3)` | Dirty Trig 1D - 3 Component | Basic trig hash. |
| `Golden Hash 2D` | Golden 2D (dcerisano) | Noise based on the Golden Ratio. Uniform normalized distribution. Fastest static noise generator function (also runs at low precision). |
| `Integer Hash 1D`, `Integer Random 3D` | Integer Hash 1D (Hugo Elias) | Integer hash noise functions by Hugo Elias via IQ. |
| `Integer Hash 1D Implementation`, `Integer Random 1D Implementation` | Integer Hash Implementation 1D  (Hugo Elias) | Example of a Hugo Elias integer hash noise call. |
| `Integer Hash 3D IQ`, `Integer Random 3D IQ` | Integer 3D (IQ) | 3D Integer hash noise function by IQ. |
| `Integer Hash 1D (IQ)`, `Integer Random 1D (IQ)` | Integer 1D (IQ) | 1D Integer hash noise function by IQ. |
| `Integer Hash 1D Low Bias 32`, `Integer Random 1D Low Bias 32` | Integer 1D Low Bias 32 | High quality integer hash discovered by Chris Wellons https://nullprogram.com/blog/2018/07/31/. |
| `Integer Hash 1D Triple 32`, `Integer Random 1D Low Bias 32` | Integer Triple 32 | Statistically indistinguishable from a random permutation of all 32-bit integers. Discovered by Chris Wellons https://nullprogram.com/blog/2018/07/31/. |
| `Integer Hash 1D Triple 32`, `Integer Random 1D Low Bias 32` | Tileable | Noise that tiles by a scale parameter. By Dave Hoskins: https://www.shadertoy.com/view/4dlGW2 |
## Interpolations

| Prefix | Name | Description |
| - | - | - |
| `Double Smoothstep Interpolation`, `Double Smoothstep Mix` | Double Smoothstep | Double smoothstep with midpoint. |
| `Catmull Rom Interpolation`, `Catmull Rom Mix` | Catmull Rom | Centripetal Catmull–Rom spline interpolatation between 4 values. |
| `Oklab Interpolation`, `Oklab Mix` | Oklab Mix | Cosine interpolatation between two values. |
| `Trigonometric Interpolation`, `Trigonometric Mix` | Trigonometric | Cosine interpolatation between two values. |
| `Cubic Interpolation`, `Cubic Mix` | Cubic | Cosine interpolatation between two values. |
| `Spline Interpolation`, `Spline Mix` | Spline | Third order spline interpolatation between 4 values. |
## Lightings

| Prefix | Name | Description |
| - | - | - |
| `Ambient Occlusion Calculation` | Ambient Occlusion | Ambient Occlusion by IQ. |
| `Soft Shadow Calculation` | Soft Shadow | Soft Shadow by IQ. http://iquilezles.org/www/articles/rmshadows/rmshadows.htm |
## Lights

| Prefix | Name | Description |
| - | - | - |
| `Phong Light` | Phong | Phong light model (https://en.wikipedia.org/wiki/Phong_reflection_model). |
| `Phong Rig Example` | Phong Rig Example | Two phong lights rotating around. |
## Maths

| Prefix | Name | Description |
| - | - | - |
| `Complex Divide`, `Imaginary Divide`, `Math` | Complex Divide | Divide one complex number by another. |
| `Complex Multiply`, `Imaginary Multiply`, `Math` | Complex Multiply | Multiple two complex numbers. |
| `Complex Power`, `Imaginary Power`, `Math` | Complex Power | Raise a complex number to a (real) power. |
| `Complex Square Root`, `Imaginary Square Root`, `Math` | Complex Square Root | Square root of a complex number. |
| `Complex Conjugate Root`, `Imaginary Conjugate Root`, `Math` | Complex Conjugate | The complex conjugate. |
| `Remap`, `Math` | Remap | Remap a {type} value from an input range to an output range. |
| `Remap From 0-1`, `Math` | Remap From [0 - 1] | Remap a float value from an input range to an output range of [0 - 1]. |
| `Remap To 0-1`, `Math` | Remap To [0 - 1] | Remap a float value from an input range to an output range of [0 - 1]. |
## Marchs

| Prefix | Name | Description |
| - | - | - |
| `Estimate Normal` | Calculate Normal | Estimate normal at a point on a signed distance field. Assumes scene function is labelled 'map'. |
| `Estimate Normal 2` | Calculate Normal 2 | Estimate normal at a point on a signed distance field. Assumes scene function is labelled 'map'. |
| `Estimate Normal 3` | Calculate Normal 3 | 'Tetrehedral' normal by IQ. Estimate normal at a point on a signed distance field. Assumes scene function is labelled 'map'. |
| `Estimate Normal wo. Unroll` | Calculate Normal wo. Unroll | Estimate normal at a point on a signed distance field. IQ: 'inspired by klems - a way to prevent the compiler from inlining map() 4 times'. Assumes scene function is labelled 'map'. |
| `Ray March Distance`, `Ray March Intersect` | Distance | March along a ray. Returns the shortest distance from a position to the scene of a sfd along a marching direction. |
## Cameras

| Prefix | Name | Description |
| - | - | - |
| `Cylinder Ray Direction` | Cylinder | Cylindrical camera projection. |
| `Fulldome Ray Direction` | Fulldome | Hemispherical camera projection from texture coordinate. (Previously the normalize was missing, this is now fixed.) |
| `Simple Perspective Ray Direction` | Perspective | Perspective ray direction from texture coordinate. |
## View Matrixs

| Prefix | Name | Description |
| - | - | - |
| `LookAt View Matrix` | LookAt | Lookat view matrix. |
## Renderers

| Prefix | Name | Description |
| - | - | - |
| `Basic Renderer Example` | Example Basic Marching | A simple ray marching renderer setup. |
## Noises

| Prefix | Name | Description |
| - | - | - |
| `Fractal Brownian Motion Noise`, `FBM Noise` | Fractal Brownian Motion | Fractal Brownian Motion |
| `Gradient Noise 1D` | Glitch 3D | 3D Glitch noise by DJDoomz: https://www.shadertoy.com/view/ltXyD4 |
| `Gradient Noise 1D` | Gradient 1D | Gradient noise 1D by IQ |
| `Gradient Noise 2D` | Gradient 2D | Gradient noise 2D by IQ - https://www.shadertoy.com/view/XdXGW8. |
| `Gradient Noise 2D + Derivatives` | Gradient 2D + Derivatives | Gradient noise 2D with derivatives by IQ -https://www.shadertoy.com/view/XdXBRH. |
| `Gradient Noise 3D` | Gradient 3D | Gradient noise 3D by IQ - https://www.shadertoy.com/view/Xsl3Dl. |
| `Gradient Noise 3D + Derivatives` | Gradient 3D + Derivatives | Gradient noise 3D with derivatives by IQ - https://www.shadertoy.com/view/4dffRH. |
| `Simplex Noise 2D` | Simplex 2D | Simplex noise 2D by IQ - https://www.shadertoy.com/view/Msf3WH. |
| `Value Noise 2D` | Value 2D | Value noise 2D by IQ - https://www.shadertoy.com/view/lsf3WH. |
| `Value Noise 2D + Derivatives` | Value 2D + Derivatives | Value noise 2D with derivatives by IQ - https://www.shadertoy.com/view/4dXBRH. |
| `Value Noise 3D` | Value 3D | Value noise 3D by IQ - https://www.shadertoy.com/view/4sfGzS. |
| `Value Noise 3D + Derivatives` | Value 3D + Derivatives | Value noise 3D with derivatives by IQ - https://www.shadertoy.com/view/XsXfRH. |
| `Vernoni Noise 2D` | Vernoni Noise 2D (IQ) | Veroni noise 2D by IQ - https://iquilezles.org/www/articles/voronoise/voronoise.htm |
| `Wave Noise 2D` | Wave 2D | Wave noise 2D by IQ - https://www.shadertoy.com/view/tldSRj. |
## Palettes

| Prefix | Name | Description |
| - | - | - |
| `Color Palettes from IQ` | IQ | Some color palettes by IQ. |
## SDF 2Ds

| Prefix | Name | Description |
| - | - | - |
| `SDF Circle` | Circle | Signed distance field of a circle. |
| `SDF Equilateral Triangle` | Equilateral Triangle  | Signed distance field of an equilateral triangle . |
| `SDF Line Segment` | Line Segment | Signed distance field of a line segment. |
| `SDF Parallelogram` | Parallelogram  | Signed distance field of a parallelogram . |
| `SDF Polygon` | Polygon | Signed distance field of an n-sided star / polygon. |
| `SDF Polystar`, `SDF Star` | Polygon / Star | Signed distance field of an n-sided star / polygon. |
| `SDF Isosceles Trapezium` | Isosceles Trapezium | Signed distance field of an isosceles trapezium. |
| `SDF Isosceles Triangle` | Isosceles Triangle | Signed distance field of a isosceles triangle. |
| `SDF Rectangle` | Rectangle | Signed distance field of a rectangle. |
| `SDF Rectangle` | Rectangle w. Orientation | Signed distance field of a rectangle with arbitary orientation. |
| `SDF Rounded Rectangle` | Rectangle - Rounded | Signed distance field of a rounded rectangle. |
| `SDF 2D Rhombus` | Rhombus | Signed distance field of a rhombus. |
| `SDF Triangle` | Triangle | Signed distance field of a triangle. |
## SDFs

| Prefix | Name | Description |
| - | - | - |
| `SDF Map Empty Function` | Map | Empty function for the total scene of signed distance field operations. |
| `SDF Empty` | Empty | A combined group of signed distance field operations. |
| `SDF Box Primitive`, `Signed Distance Field`, `Cuboid Primitive` | Box | Signed distance field of a box. |
| `SDF Wireframe Box Primitive`, `Signed Distance Field` | Box Wireframe | Signed distance field of a bounding box / box wireframe. |
| `SDF Rounded Box Primitive`, `Signed Distance Field` | Box - Rounded | Signed distance field of a rounded box. |
| `SDF Capsule Primitive`, `SDF Line Primitive`, `Signed Distance Field` | Capsule | Signed distance field of a vertial capsule |
| `SDF Capsule Primitive`, `SDF Line Primitive`, `Signed Distance Field` | Capsule w. Orientation | Signed distance field of a capsule at an arbitary orientation. |
| `SDF Chain Link Primitive`, `Signed Distance Field` | Chain Link | Signed distance field of a hexagonal prism. |
| `SDF Cone Primitive`, `Signed Distance Field` | Cone | Signed distance field of a vertical cone. |
| `SDF Capped Cone Primitive`, `Signed Distance Field` | Cone - Capped | Signed distance field of a capped cone. |
| `SDF Capped Cone Primitive`, `Signed Distance Field` | Cone - Capped w. Orientation | Signed distance field of a capped cone at an arbitary orientation. |
| `SDF Infinite Cone Primitive`, `Signed Distance Field` | Cone - Infinite | Signed distance field of an infinite cone. |
| `SDF Fast Cone Primitive`, `Signed Distance Field` | Cone - Not Exact | Signed distance field of a cone (not exact). |
| `SDF Rounded Cone Primitive`, `Signed Distance Field` | Cone - Rounded | Signed distance field of a round cone. |
| `SDF Rounded / Tilted Cone Primitive`, `Signed Distance Field` | Cone - Rounded & Tilted | Signed distance field of a round cone. |
| `SDF Cylinder Primitive`, `Signed Distance Field` | Cylinder | Signed distance field of a vertical cylinder. |
| `SDF Infinite Cylinder Primitive`, `Signed Distance Field` | Cylinder - Infinite | Signed distance field of an infinite cylinder. |
| `SDF Rounded Cylinder Primitive`, `Signed Distance Field` | Cylinder - Rounded | Signed distance field of a rounded cylinder. |
| `SDF Rotated Cylinder Primitive`, `Signed Distance Field` | Cylinder w. Orientation | Signed distance field of a vertical cylinder at an arbitary orientation. |
| `SDF Ellipsoid Primitive`, `Signed Distance Field` | Ellipsoid | Signed distance field (approx) of an ellipsoid. |
| `SDF Hexagonal Prism Primitive`, `Signed Distance Field` | Hexagonal Prism | Signed distance field of a hexagonal prism. |
| `SDF Menger Fractal Cube` | Menger Cube | Signed distance field of a menger cube. IQ: https://www.shadertoy.com/view/4sX3Rn |
| `SDF Octagonal Prism Primitive`, `Signed Distance Field` | Octagonal Prism | Signed distance field of a octagonal prism. |
| `SDF Octahedron Primitive`, `Signed Distance Field` | Octahedron | Signed distance field of an octahedron. |
| `SDF Fast Octahedron Primitive`, `Signed Distance Field` | Octahedron - Not Exact | Signed distance field of an octahedron (not exact). |
| `SDF Plane Primitive`, `Signed Distance Field` | Plane | Signed distance field of a plane. |
| `SDF Rotated Plane Primitive`, `Signed Distance Field` | Plane w. Orientation | Signed distance field of a plane  at an arbitary orientation. |
| `SDF Quad Primitive`, `Signed Distance Field` | Quad | Signed distance field of a quad. |
| `SDF 3D Rhombus Primitive`, `Signed Distance Field` | Rhombus | Signed distance field of a rhombus. |
| `SDF Solid Angle Primitive`, `Signed Distance Field` | Solid Angle | Signed distance field of a solid angle. |
| `SDF Sphere Primitive`, `Signed Distance Field` | Sphere | Signed distance field of a sphere. |
| `SDF Square Pyramid Primitive`, `Signed Distance Field` | Square Pyramid | Signed distance field of a square based pyramid. |
| `SDF Torus Primitive`, `SDF Doughnut Primitive`, `Signed Distance Field` | Torus | Signed distance field of a torus. |
| `SDF Capped Torus Primitive`, `SDF Capped Doughnut Primitive`, `Signed Distance Field` | Torus Capped | Signed distance field of a capped torus. |
| `SDF Triangle Primitive`, `Signed Distance Field` | Triangle | Signed distance field of a triangle. |
| `SDF Triangular Prism Primitive`, `Signed Distance Field` | Triangular Prism | Signed distance field of a triangular prism. |
| `SDF Tunnel Primitive`, `SDF Tube Primitive`, `Signed Distance Field` | Tunnel | Signed distance field of a vertical cylinder. |
## SDF Booleans

| Prefix | Name | Description |
| - | - | - |
| `SDF Boolean Intersection`, `Signed Distance Field Intersection` | Intersection | Calculate the intersection of two signed distance fields. |
| `SDF Boolean Smooth Intersection`, `Signed Distance Field Smooth Intersection` | Intersection - Smooth | Calculate the smooth intersection of two signed distance fields. |
| `SDF Boolean Subtraction`, `Signed Distance Field Subtraction` | Subtraction | Calculate the subtraction of two signed distance fields. |
| `SDF Boolean Smooth Subtraction`, `Signed Distance Field Smooth Subtraction` | Subtraction - Smooth | Calculate the smooth subtraction of two signed distance fields. |
| `SDF Boolean Union`, `Signed Distance Field Union` | Union | Calculate the union of two signed distance fields. |
| `SDF Boolean Smooth Union`, `Signed Distance Field Smooth Union` | Union - Smooth | Calculate the smooth union of two signed distance fields. |
## SDF Operations

| Prefix | Name | Description |
| - | - | - |
| `SDF Operation Elongate` | Elongate | Elongate a signed distance field. |
| `SDF Operation Extrude` | Extrude | Elongate a signed distance field. |
| `SDF Operation Onion` | Onion | Calculate onion skins of a signed distance field. |
| `SDF Operation Repeat Radially`, `SDF Operation Array 3D` | Repeat Radial | Radially repeat a signed distance field around the y-zis. |
| `SDF Operation Repeat 3D`, `SDF Operation Array 3D` | Repeat 3D | Infinitely repeat a signed distance field periodically across a domain. |
| `SDF Operation Repeat 2D`, `SDF Operation Array 2D` | Repeat 2D | Infinitely repeat a signed distance field periodically across a domain. |
| `SDF Operation Repeat 1D`, `SDF Operation Array 1D` | Repeat 1D | Infinitely repeat a signed distance field periodically across a domain. |
| `SDF Operation Repeat (Bound)`, `SDF Operation Array (Bound)` | Repeat Bound | Repeat a signed distance field periodically within a bound domain. |
| `SDF Operation Revolve` | Revolve | Elongate a signed distance field. |
| `SDF Operation Round`, `SDF Operation Smooth` | Round | Round a signed distance field. |
## Spheres

| Prefix | Name | Description |
| - | - | - |
| `Sphere Ambient Occulsion Analytic` | Ambient Occulsion (Analytic) | Calculate the ambient occulsion of a sphere analytically. |
| `Sphere Density Analytic` | Density (Analytic) | Calculates the density of a sphere analytically. |
| `Sphere Intersection Analytic` | Intersection (Analytic) | Calculates the intersection of a sphere with a ray analytically. |
| `Sphere Motion Blur Analytic` | Motion Blur (Analytic) | Calculate the motion blur of a sphere analytically. |
| `Sphere Projection Analytic` | Projection (Analytic) | Analytically project a sphere onto a camera view. |
| `Sphere Soft Shadow Analytic` | Soft Shadow (Analytic) | Calculate the soft shadow of a sphere analytically. |
| `Sphere Visibility Analytic` | Visibility (Analytic) | Calculate the overlap between two spheres analytically. |
## Texture Maps

| Prefix | Name | Description |
| - | - | - |
| `Tri-Planar Texture Map` | Tri-Planar | Tri-Planar blending function by Shane - 'Based on an old Nvidia tutorial'. |
## Bump Maps

| Prefix | Name | Description |
| - | - | - |
| `Tri-Planar Bump Map` | Tri-Planar | Tri-Planar bump map by Shane. |
## Normal Maps

| Prefix | Name | Description |
| - | - | - |
| `Normal Map from Bump` | From Bump | Tri-Planar bump map by Shane. |
## Vector 2s

| Prefix | Name | Description |
| - | - | - |
| `Affine Transform` | Affine Transform | Correctly scale an image texture. |
| `Scale Image Coordinates` | Scale Image | Correctly scale an image texture. |
| `Scale Image Coordinates Centered` | Scale Image Centered | Correctly scale an image texture. |
| `2D Rotatation Matrix` | Rotation Matrix | 2D Rotation matrix. |
## Vector 3s

| Prefix | Name | Description |
| - | - | - |
| `Spherical Coordinates` | Cartesian to Spherical | Convert cartesian coordinates to spherical coordinates |
| `Rotate 3D` | Rotate Axes | Efficiently rotates a point around an arbitary axis using Rodrigues' rotation formula. https://en.m.wikipedia.org/wiki/Rodrigues%27_rotation_formula |
| `X Rotate 3D` | Rotate X | Rotate a point around the X axis by an angle. |
| `Y Rotate 3D` | Rotate Y | Rotate a point around the Y axis by an angle. |
| `Z Rotate 3D` | Rotate Z | Rotate a point around the Z axis by an angle. |
| `X Rotatation Matrix` | Rotation Matrix X | Rotation matrix around the X axis. |
| `Y Rotatation Matrix` | Rotation Matrix Y | Rotation matrix around the Y axis. |
| `Z Rotatation Matrix` | Rotation Matrix Z | Rotation matrix around the Z axis. |
## Shaders

| Prefix | Name | Description |
| - | - | - |
| `Boilderplate Ray March Scene` | Ray March Scene | Boilderplates a complete ray march scene with lighting rig and simple sdf. |
