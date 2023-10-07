/*

The name of the article: React Fibre Architecture by acdlite

* What is create root method?
it create a dom like structure to compare main dom and virtual dom and change only those elemsts which need to change.

React Fibre: it is an ongoing reimplementation of react core algorithm. Its headline featureis incremental rendering.

* Key Features of React Fibre:
1. the ability to split rendering work as new update come
2. the ability to assign priority to differnt types of updates
3. the ability to pause, abort, or reuse work as new update come in.
4. the ability to assign priority to different types of updates.

* Hydration: the process of injecting javascript in html is called hydration.

Reconciliation: a high level discription of React's reconcialiation algorithm.
this algorithm is used by react to differentiate one tree with another to determine which parameters to be changed.

* reconciliation is the algorithm behind what is popularly understood as the virtual dom.

why you need keys when traversal of array?
the reason is, in new react fiber algorithm, keys make the iterations stable and improves performance.

*/