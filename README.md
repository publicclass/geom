# geom

A collection of terse geometry utilities.


## Features

  * __Memory managed__ each utility has a pool of instances accessable using `_X_.make()` and `_X_.free()`. If you don't need pooled instances, simply pass in your own object instead.

  * __State less__ no state is kept within the utilities, it's up to you.


## API

### [geom.mat](https://github.com/publicclass/geom-mat)

  [![Build Status](https://travis-ci.org/publicclass/geom-mat.png)](https://travis-ci.org/publicclass/geom-mat)

### [geom.vec](https://github.com/publicclass/geom-vec)

  [![Build Status](https://travis-ci.org/publicclass/geom-vec.png)](https://travis-ci.org/publicclass/geom-vec)

### [geom.poly](https://github.com/publicclass/geom-poly)

  [![Build Status](https://travis-ci.org/publicclass/geom-poly.png)](https://travis-ci.org/publicclass/geom-poly)


## Example

    var geom = require('geom')
      , vec = geom.vec;

    var v = vec.make(10,10);
    vec.smul(v,10) // => [100,100]


## Links

Here are some resources which was helpful while compiling this collection:

* https://github.com/tmpvar/vec2.js
* https://github.com/jnordberg/geometry.js
* https://github.com/okcupid/node-geom2d/
* https://github.com/STRd6/matrix.js
* http://paulbourke.net/geometry
* http://www.codeproject.com/Articles/15573/2D-Polygon-Collision-Detection
* http://softsurfer.com/algorithm_archive.htm
* https://github.com/polygonal/core
* https://en.wikipedia.org/wiki/Machine_epsilon