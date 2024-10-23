(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{344:function(t,s,a){"use strict";a.r(s);var _=a(8),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"什么是垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是垃圾回收"}},[t._v("#")]),t._v(" 什么是垃圾回收")]),t._v(" "),s("p",[t._v("我们在程序中定义一个变量，会在内存中开辟相应内存空间进行存储，当不需要此变量后，需要手动销毁此对象，并释放内存。而这种对不再使用的内存资源进行自动回收的功能即为"),s("strong",[t._v("垃圾回收（Garbage Collection，缩写为GC），是一种自动内存管理机制")])]),t._v(" "),s("h1",{attrs:{id:"如何识别垃圾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何识别垃圾"}},[t._v("#")]),t._v(" 如何识别垃圾")]),t._v(" "),s("h2",{attrs:{id:"引用计数算法-reference-counting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用计数算法-reference-counting"}},[t._v("#")]),t._v(" 引用计数算法(reference counting)")]),t._v(" "),s("p",[t._v("引用计数通过在对象上增加自己被引用的次数，被其他对象引用时加1，引用自己的对象被回收时减1，引用数为0的对象即为可以被回收的对象，这种算法在内存比较紧张和实时性比较高的系统中使用比较广泛，如php，Python等。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/1.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("方式简单，回收速度快。")])])])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("需要额外的空间存放计数。")])])]),t._v(" "),s("li",[t._v("无法处理循环引用(如a.b=b; b.a=a)。")]),t._v(" "),s("li",[t._v("频繁更新引用计数降低了性能。")])]),t._v(" "),s("h2",{attrs:{id:"追踪式回收算法-tracing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#追踪式回收算法-tracing"}},[t._v("#")]),t._v(" 追踪式回收算法(Tracing)")]),t._v(" "),s("p",[t._v("追踪式算法(可达性分析)的核心思想是判断一个对象是否可达，如果这个对象一旦不可达就可以立刻被GC回收了，那么我们怎么判断一个对象是否可达呢？第一步从根节点开始找出所有的全局变量和当前函数栈里的变量，标记为可达。第二部，从已经标记的数据开始，进一步标记它们可访问的变量，以此类推，专业术语叫传递闭包。当追踪结束时，没有被打上标记的对象就被判定是不可触达。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/2.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("有点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("解决了循环引用的问题")])])]),t._v(" "),s("li",[t._v("占用的空间少了")])]),t._v(" "),s("p",[t._v("和引用计数法相比，有以下缺点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("无法立刻识别出垃圾对象，需要依赖GC线程")])])]),t._v(" "),s("li",[t._v("算法在标记时必须暂停整个程序，即STW(stop the world)，否则其他线程有可能会修改对象的状态从而回收不该回收的对象")])]),t._v(" "),s("h1",{attrs:{id:"如何清理垃圾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何清理垃圾"}},[t._v("#")]),t._v(" 如何清理垃圾")]),t._v(" "),s("h2",{attrs:{id:"标记清除算法-mark-sweep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法-mark-sweep"}},[t._v("#")]),t._v(" 标记清除算法(Mark Sweep)")]),t._v(" "),s("p",[t._v("标记清除算法是最常见的垃圾收集算法，标记清除收集器是跟踪式垃圾收集器，其执行过程可以分成标记(Mark)和清除(Sweep)两个阶段：")]),t._v(" "),s("ol",[s("li",[t._v("标记阶段：暂停应用程序的执行，从根对象触发查找并标记堆中所有存活的对象；")]),t._v(" "),s("li",[t._v("清除阶段：遍历堆中的全部对象，回收未被标记的垃圾对象并将回收的内存加入空闲链表，恢复应用程序的执行；")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/3.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("实现简单。")])])])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("执行期间需要把整个程序完全暂停，不能异步的进行垃圾回收。")])])]),t._v(" "),s("li",[t._v("容易产生大量不连续的内存随便，碎片太多可能会导致后续没有足够的连续内存分配给较大的对象，从而提前触发新的一次垃圾收集动作。")])]),t._v(" "),s("h2",{attrs:{id:"标记复制算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记复制算法"}},[t._v("#")]),t._v(" 标记复制算法")]),t._v(" "),s("p",[t._v("它把内存空间划分为两个相等的区域，每次只使用其中一个区域。在垃圾收集时，遍历当前使用的区域，把存活对象复制到另一个区域中，最后将当前使用的区域的可回收对象进行回收。")]),t._v(" "),s("p",[t._v("实现：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("首先这个算法会把对分成两块，一块是From、一块是To")])])]),t._v(" "),s("li",[t._v("对象只会在From上生成，发生GC之后会找到所有的存活对象，然后将其复制到To区，然后整体回收From区。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/4.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("不用进行大量垃圾对象的扫描：标记复制算法需要从"),s("code",[t._v("GC-root")]),t._v("对象出发，将可达的对象复制到另外一块内存后直接清理当前这块内存即可。")])])]),t._v(" "),s("li",[t._v("解决了内存碎片问题，防止分配大空间对象是提前gc的问题。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("复制成本问题：在可达对象占用内存高的时候，复制成本会很高。")])])]),t._v(" "),s("li",[t._v("内存利用率低：相当于可利用的内存仅有一半。")])]),t._v(" "),s("h2",{attrs:{id:"标记压缩算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标记压缩算法"}},[t._v("#")]),t._v(" 标记压缩算法")]),t._v(" "),s("p",[t._v("在标记可回收的对象后将所有存活的对象压缩到内存的一端，使他们紧凑地排列在一起，然后对边界以外的内存进行回收，回收后，已用和未用的内存都各自一边。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/5.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("避免了内存碎片化的问题。")])])]),t._v(" "),s("li",[t._v("适合老年代算法，老年代对象存活率高的情况下，标记整理算法由于不需要复制对象，效率更高。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[s("ol",[s("li",[t._v("整理过程复杂：需要多次遍历内存，导致STW时间比标记清除算法高。")])])])]),t._v(" "),s("h1",{attrs:{id:"设计原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[t._v("#")]),t._v(" 设计原理")]),t._v(" "),s("h2",{attrs:{id:"三色标记算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三色标记算法"}},[t._v("#")]),t._v(" 三色标记算法")]),t._v(" "),s("p",[t._v("为了解决原始标记清除算法带来的长时间STW, Go从v1.5版本实现了基于三色标记清除的并发垃圾收集器，在不暂停程序的情况下即可完成对象的可达性分析，三色标记算法将程序中的对象分成白色、黑色和灰色三类：")]),t._v(" "),s("ul",[s("li",[t._v("白色对象 - 潜在的垃圾，表示还未搜索到的对象，其内存可能会被垃圾收集器回收；")]),t._v(" "),s("li",[t._v("黑色对象 - 活跃的对象，表示搜索完成的对象，包括不存在任何引用外部指针的对象以及从根对象可达的对象")]),t._v(" "),s("li",[t._v("灰色对象 - 活跃的对象，表示正在搜索还未搜索完的对象，因为存在指向白色对象的外部指针，垃圾收集器会扫描这些对象的子对象；")])]),t._v(" "),s("p",[t._v("三色标记法属于增量式GC算法，回收器首先将所有对象标记成白色，然后从gc root出发，逐步把所有可达的对象变成灰色再到黑色，最终所有的白色对象都是不可达对象。")]),t._v(" "),s("p",[t._v("具体实现：")]),t._v(" "),s("ul",[s("li",[t._v("初始时所有对象都是白色的")]),t._v(" "),s("li",[t._v("从"),s("code",[t._v("gc root")]),t._v("对象出发，扫描所有可达对象标记为灰色，放入待处理队列")]),t._v(" "),s("li",[t._v("从队列取出一个灰色对象并标记为黑色，将其引用对象标记为灰色，放入队列")]),t._v(" "),s("li",[t._v("重复上一步骤，直到灰色对象队列为空")]),t._v(" "),s("li",[t._v("此时剩下的所有白色对象都是垃圾对象")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/6.webp",alt:"img"}})]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("不需要STW")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("如果产生垃圾速度大于回收速度时，可能会导致程序中垃圾对象越来越多而无法及时收集")]),t._v(" "),s("li",[t._v("线程切换和上下文转换的消耗会使得垃圾回收的总体成本上升，从而降低系统吞吐量")])]),t._v(" "),s("p",[t._v("三色标记法存在并发性问题，")]),t._v(" "),s("ul",[s("li",[t._v("可能会出现野指针(指向没有合法地址的指针)，从而造成严重的程序错误")]),t._v(" "),s("li",[t._v("漏标，错误的回收非垃圾对象")])]),t._v(" "),s("h2",{attrs:{id:"三色不变性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三色不变性"}},[t._v("#")]),t._v(" 三色不变性")]),t._v(" "),s("p",[t._v("想要在并发或者增量的标记算法中保证正确性，我们需要达成一下两种三色不变性中的任意一种。")]),t._v(" "),s("ul",[s("li",[t._v("强三色不变性——黑色对象不会指向白色对象，只会指向灰色对象或者黑色对象。"),s("img",{attrs:{src:"/images/go/gc/7.webp",alt:"img"}})]),t._v(" "),s("li",[t._v("弱三色不变性——黑色对象指向的白色对象必须包含一条从灰色对象经由多个白色对象的可达路径。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/8.webp",alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"屏障技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏障技术"}},[t._v("#")]),t._v(" 屏障技术")]),t._v(" "),s("p",[t._v("垃圾收集中的屏障技术更像是一个钩子方法，它是在用户程序读取对象、创建新对象以及更新对象指针时执行的一段代码，根据操作类型的不同，我们可以将它们分成读屏障和写屏障两种，因为读屏障需要在读操作中加入代码片段，对用户程序的性能影响很大，所以编程语言往往都会采用写屏障保证三色不变性。")]),t._v(" "),s("h3",{attrs:{id:"插入写屏障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入写屏障"}},[t._v("#")]),t._v(" 插入写屏障")]),t._v(" "),s("p",[t._v("当一个对象引用另外一个对象时，将另外一个对象标记为灰色，以此满足强三色不变性，不会存在黑色对象引用白色对象。")]),t._v(" "),s("h3",{attrs:{id:"删除写屏障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除写屏障"}},[t._v("#")]),t._v(" 删除写屏障")]),t._v(" "),s("p",[t._v("在灰色对象删除对白色对象的引用时，将白色对象置为灰色，其实就是快照保存旧的引用关系，这叫STAB(snapshot-at-the-beginning),以此满足弱三色不变性。")]),t._v(" "),s("h3",{attrs:{id:"混合写屏障"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合写屏障"}},[t._v("#")]),t._v(" 混合写屏障")]),t._v(" "),s("p",[t._v("v1.8版本之前，运行时会使用插入写屏障保证强三色不变性；")]),t._v(" "),s("p",[t._v("在v1.8中，组合插入写屏障和删除写屏障构成了混合写屏障，保证弱三色不变性；该写屏障会将覆盖的对象标记成灰色(删除写屏障)并在当前栈没有扫描时将新对象也标记成灰色(插入写屏障)：")]),t._v(" "),s("p",[t._v("写屏障会将被覆盖的指针和新指针都标记成灰色，而所有新建的对象都会被直接标记成黑色。")]),t._v(" "),s("h1",{attrs:{id:"执行周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行周期"}},[t._v("#")]),t._v(" 执行周期")]),t._v(" "),s("p",[t._v("Go语言的垃圾收集可以分成清除终止、标记、标记终止和清除四个不同阶段：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/go/gc/9.webp",alt:"img"}})]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("清理终止阶段")])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("暂停程序，所有的处理器在这时会进入安全点(safe point)；")])])]),t._v(" "),s("li",[s("p",[t._v("如果当前垃圾收集循环是强制触发的，我们还需要处理还未清理的内存管理单元；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("标记阶段")])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("将状态切换至"),s("code",[t._v("_GCmark")]),t._v("、开启写屏障、用户程序协助("),s("code",[t._v("Mutator Assists")]),t._v(")并将根对象入队；")])])]),t._v(" "),s("li",[s("p",[t._v("恢复执行程序，标记进程和用于协助的用户程序会开始并发标记内存中的对象，写屏障会将被覆盖的指针和新指针都标记成灰色，而所有新创建的对象都会被直接标记成黑色；")])]),t._v(" "),s("li",[s("p",[t._v("开始扫描根对象，包括所有"),s("code",[t._v("Goroutine")]),t._v("的栈、全局对象以及不在堆中的运行时数据结构，扫描"),s("code",[t._v("Goroutine")]),t._v("栈期间会暂停当前处理器；")])]),t._v(" "),s("li",[s("p",[t._v("依次处理灰色队列中的对象，将对象标记成黑色并将它们指向的对象标记成灰色；")])]),t._v(" "),s("li",[s("p",[t._v("使用分布式的终止算法检查剩余的工作，发现标记阶段完成后进入标记终止阶段；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("标记终止阶段")])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("暂停程序、将状态切换至"),s("code",[t._v("_GCmarktermination")]),t._v("并关闭辅助标记的用户程序；")])])]),t._v(" "),s("li",[s("p",[t._v("清理处理器上的线程缓存；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("清理阶段")])])]),t._v(" "),s("li",[s("ol",[s("li",[t._v("将状态切换至"),s("code",[t._v("_GCoff")]),t._v(" 开始清理阶段、初始化清理状态并关闭写屏障；")])])]),t._v(" "),s("li",[s("p",[t._v("恢复用户程序，所有新创建的对象会标记成白色；")])]),t._v(" "),s("li",[s("p",[t._v("后台并发清理所有的内存管理单元，当"),s("code",[t._v("Goroutine")]),t._v("申请新的内存管理单元时就会触发清理；")])])]),t._v(" "),s("h1",{attrs:{id:"gc触发时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc触发时机"}},[t._v("#")]),t._v(" GC触发时机")]),t._v(" "),s("p",[t._v("当满足触发垃圾收集的基本条件：允许垃圾收集、程序没有崩溃并且没有处于垃圾循环；")]),t._v(" "),s("p",[t._v("注：运行时会通过如下所示的"),s("code",[t._v("runtime.gcTrigger.test")]),t._v("方法决定是否需要触发垃圾收集，该方法会根据三种不同方式触发进行不同的检查。")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t gcTrigger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("memstats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enablegc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" panicking "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" gcphase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" _GCoff "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kind "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" gcTriggerHeap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" memstats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap_live "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" memstats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gc_trigger\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" gcTriggerTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" gcpercent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tlastgc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("atomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("memstats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_gc_nanotime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" lastgc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lastgc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" forcegcperiod\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" gcTriggerCycle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cycles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("ul",[s("li",[t._v("超过内存大小阙值，分配内存时，当前已分配内存与上一次"),s("code",[t._v("GC")]),t._v("结束时存活对象的内存达到某个比例时就触发"),s("code",[t._v("GC")]),t._v("。(默认配置会在堆内存达到上一次垃圾收集的2倍时，触发新一轮的垃圾收集，可以通过环境变量"),s("code",[t._v("GOGC")]),t._v("调整，在默认情况下他的值为100，即增长100%的堆内存才会触发"),s("code",[t._v("GC")]),t._v(")；比如一次回收完毕后，内存的使用量为5M，那么下次回收的机制则是内存分配达到10M的时候，也就是说，并不是内存分配越多，垃圾回收频率越高。")]),t._v(" "),s("li",[t._v("如果一直达不到内存大小的阙值，"),s("code",[t._v("sysmon")]),t._v("检测出一段时间内（由"),s("code",[t._v("runtime.forcegcperiod")]),t._v("变量控制，默认为2分钟）没有触发过"),s("code",[t._v("GC")]),t._v("，就会触发新的GC。")]),t._v(" "),s("li",[t._v("调用"),s("code",[t._v("runtime.GC()")]),t._v("强制触发"),s("code",[t._v("GC")])])]),t._v(" "),s("h1",{attrs:{id:"gc调优"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gc调优"}},[t._v("#")]),t._v(" GC调优")]),t._v(" "),s("p",[t._v("减少堆内存的分配是最好的优化方式。比如合理重复利用对象；避免"),s("code",[t._v("string")]),t._v("和"),s("code",[t._v("byte[]")]),t._v("之间的转化等，两者发生转换的时候，底层数据结构会进行复制，因此导致gc效率会变低，少量使用"),s("code",[t._v("+")]),t._v("连接"),s("code",[t._v("string")]),t._v("，Go里面"),s("code",[t._v("string")]),t._v("是最基础的类型，是一个只读类型，针对他的每一个操作都会创建一个新的"),s("code",[t._v("string")]),t._v("，如果是少量小文本拼接，用"),s("code",[t._v("“+”")]),t._v("就好，如果是大量小文本拼接，用"),s("code",[t._v("strings.Join")]),t._v(";如果是大量大文本拼接，用"),s("code",[t._v("bytes.Buffer")]),t._v("。")]),t._v(" "),s("p",[t._v("优化努力的方向：")]),t._v(" "),s("ul",[s("li",[t._v("尽可能保持最小的堆内存")]),t._v(" "),s("li",[t._v("最佳的GC频率")]),t._v(" "),s("li",[t._v("保持每次垃圾收集的内存大小")]),t._v(" "),s("li",[t._v("最小化每次垃圾收集的STW和Mark Assist的持续时间")])])])}),[],!1,null,null,null);s.default=v.exports}}]);