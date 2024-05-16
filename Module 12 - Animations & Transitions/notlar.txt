An Important Note on Animated Route Changes
When animating route changes as shown in the previous lecture, there's one important thing you have to keep in mind:

Your route components must NOT have multiple root elements!

For example, if your route component looked like this:

<template>
  <section>
    <h2>Section 1</h2>
  </section>
  <section>
    <h2>Section 2</h2>
  </section>
</template>
The <transition> component would not be able to animate route changes and you would get a warning in the JS console in your browser dev tools.

Why?

Because you must not forget that <transition> needs exactly one child element (with the special exceptions you learned about in this module).

If your route component has multiple root elements, <transition> in the end has multiple children and that is the problem.

Hence, if you want to transition between routes, you need to ensure that your route components have exactly one root element - for example:

<template>
  <div>
    <section>
      <h2>Section 1</h2>
    </section>
    <section>
      <h2>Section 2</h2>
    </section>
  </div>
</template>