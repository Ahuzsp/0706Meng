# Vue面试题



### 1：双向数据绑定原理 （Vue是如何实现响应式的）

Vue通过发布订阅者模式来现实双向数据绑定，Vue通过Observer类对Vue实例的data选项进行数据劫持，为每个data的key绑定一个Dep实例，每次key的getter触发就为Dep添加一个Watcher实例。每次key的setter触发都遍历通知Dep内的所有Watcher实例，对应的Watcher实例触发update方法更新对应视图。



也可以从两个方面回答：

**vue是如何监听数据变化的？**

Vue通过Observer类对Vue实例的data选项进行数据劫持，劫持的底层方法是Object.defineproperty.

每次vue实例的数据变化，都触发对应的setter，从而实现数据监听。

**vue在数据变化后如何通知对应的视图更新？**

Observer类为每个data的key绑定一个Dep实例。

每次key的getter触发就为Dep实例的sub数组添加一个Watcher实例。

每次key的setter触发都遍历通知Dep实例内的所有Watcher实例。

对应的Watcher实例触发对应vue实例的update方法更新对应视图。



### 2：vue如何监听数组操作

在发布订阅者的模式下，利用Object.defineProperty给数组设置getter和setter，然后在getter内通过Dep收集Watcher的依赖。再给监听的数组添加一组自定义的方法覆盖数组原型链上的push，pop，shift，unshift，splice，sort，reverse方法，然后在这些自定义的方法内通过dep.notify通知视图更新。

### 3：Vue的生命周期

创建阶段：beforeCreate（创建前），created（创建后），beforeMount（挂载前），mounted（挂载后）

运行阶段：beforeUpdate（更新前），updated（更新后）

销毁阶段：beforeDestroy （销毁前），destroyed （销毁后）

动态组件特有：activated（激活），deactivated（失活）

1：在哪个生命周期内请求数据？

created和mounted中都可以，推荐和react框架保持一致，在mounted中请求数据。

2：一般在销毁生命周期中做什么？

销毁定时器。

销毁一些组件通过$on绑定的事件

解绑原生DOM事件。



### 4：v-for和v-if哪个优先级高？为什么v-for和v-if不能同时使用。

v-for的优先级更高。

v-for和v-if同时使用会导致不必要的性能浪费。例如一个数组内有100个元素，如果只希望通过v-if只显示其中的一条数据，则其余的99条数据也会执行v-for，导致了不必要的计算。

解决办法，可以通过计算属性把数组转换成1条数据的数组，再列表渲染。



### 5：为什么组件的data必须是一个函数。

为了避免再组件复用时，多个组件共用同一个data。写成函数，则在组件复用时会重新调用函数得到一个新的data。这样就可以保证每个复用的组件使用一个独立的data，避免了组件状态的混用。



### 6：v-if和v-show的区别

v-if根据初始条件决定是否渲染DOM到视图，是惰性的。切换时会有临时的编译和卸载。

v-show不论初始条件是什么都会渲染DOM到视图，切换时通过css的display样式进行切换。

v-if有更高的切换消耗。

v-show有更高的初始渲染消耗。

使用场景：切换频繁用v-show，根据初始条件渲染的，使用v-if。



### 7：组件的通信方式

1：父传子，props。

2：子传父，$on，$emit

3：bus传值。

4：vuex传值。

5：$attrs, $listeners。

6：$children,$parent传值。

7：ref传值。

8：provide，inject组合。

其中，vuex，$children,$parent，ref可以实现通信，但都不适合用于组件通信。

vuex用于状态管理，只是为了组件通信，是不推荐使用vuex的。

$children,$parent,ref实现组件通信，会让组件难以复用，因此也不推荐。



### 8：作用域插槽的作用。

多个组件通过插槽进行父子解耦后，父插槽无法把组件内数据传递给子插槽组件，作用域插槽就是为了解决这个问题。让子插槽组件可以访问父插槽组件的数据。



### 9：MVVM和MVC模式的区别

 MVC的C太复杂和臃肿,分工不明确.

 MVVM弱化了C的作用,我们只需要关心m的变化如何渲染到v上.

传统的前端会将数据手动渲染到页面上, MVVM 模式不需要用户收到操作 dom 元素,将数据绑 定到 viewModel 层上，会自动将数据渲染到页面中，视图变化会通知 viewModel层 更新数据。 ViewModel 就是我们 MVVM 模式中的桥梁.



### 10：computed的特点（computed和watch的区别）

计算属性computed实际上也是watch的另一种写法。

计算属性不能有异步操作，watch可以有异步操作。

计算属性有缓存功能。watch没有缓存功能。

计算属性默认情况会执行一次。watch需要添加 immediate:true 选项才可以默认执行一次。



### 11：Vue视图为什么需要异步更新渲染

一切为了性能。如果视图更新是同步的，在数据的操作逻辑中，每次数据的变化都会引起视图更新，这会极大的浪费系统性能，只有在数据操作结束之后，一次性渲染数据的最终结果，才是合理的渲染过程。要在数据操作结束之后再渲染视图，则需要把渲染视图设计成异步的。



### 12：谈谈你对 keep-alive 的了解？(如何部分缓存组件)

keep-alive 可以实现动态组件的缓存，当组件切换时不会对当前组件进行卸载.用以保存组件状态.

常用的2个属性 include / exclude,可以有选择的缓存一部分组件.

被缓存的动态组件的2个特有生命周期 activated(激活) , deactivated (失活)



### 13：Vuex工作原理.(Vuex的数据流).

视图 -> actions(dispatch) -> mutations (commit) -> state -> 更新view



### 14：actions和mutations的区别.

mutation 是同步更新数据(内部会进行是否为异步方式更新数据的检测) $watch 严格模式下会报 错 

action 异步操作（内容分发），可以获取数据后调佣 mutation 提交最终数据



### 15：Vuex常用的选项属性．（Vuex的计算属性怎么做）

1：strict

2：state

3：mutations

4：actions

5：getters

6：module



### 16：异步组件如何实现性能优化

有了异步路由，就可以通过指定组件异步挂载的顺序实现优先挂载指定组件的效果。



### 17：父组件如何监听子组件的生命周期钩子？

（这个问题还可以扩展为：父组件如何监听子组件数据变化等等）

父组件定义一个方法用于监听子组件行为，并传递给子组件，子组件在指定地方触发父组件的这个方法。即实现了监听。例如，父组件监听子组件mounted，就在子组件的mounted中调用父组件的监听方法即可。

ps：父组件如何传递方法给子组件？

1：通过props传递。2：通过事件传递。（$on和$emit）

















