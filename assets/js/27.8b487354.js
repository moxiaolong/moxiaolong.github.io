(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{343:function(s,n,a){"use strict";a.r(n);var t=a(8),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("在GMP中各个元素在调度器的调度下其实有各种不同的状态转换，比如goroutine就定义了比如_Gidle、_Grunnable、_Grunning、_Gsyscall和_Gwaiting这些状态，在不同的场景中实现这些状态进行不同的转换。\n")]),s._v(" "),n("h2",{attrs:{id:"g状态转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#g状态转换"}},[s._v("#")]),s._v(" G状态转换")]),s._v(" "),n("p",[s._v("goroutine的状态在runtime/runtime2.go中，_Gidle中被定义为"),n("strong",[s._v("iota")]),s._v("，声明为一个无类型整数序号 0，其他定义的枚举逐步进行递增。")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// _Gidle means this goroutine was just allocated and has not\n// yet been initialized.\n_Gidle = iota // 0\n\n_Grunnable // 1\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("Goroutine 枚举的这些状态有以下几种：")]),s._v(" "),n("ol",[n("li",[s._v("_Gidle = 0 goroutine刚刚被分配并且还没有被初始化")]),s._v(" "),n("li",[s._v("_Grunnable = 1 没有执行代码，没有栈的所有权，存储在运行队列中")]),s._v(" "),n("li",[s._v("_Grunning = 2 可以执行代码，拥有栈的所有权，被赋予了内核线程 M 和处理器 P")]),s._v(" "),n("li",[s._v("_Gsyscall = 3 正在执行系统调用，没有执行用户代码，拥有栈的所有权，被赋予了内核线程 M 但是不在运行队列上")]),s._v(" "),n("li",[s._v("_Gwaiting = 4 由于运行时而被阻塞，没有执行用户代码并且不在运行队列上，但是可能存在于 Channel 的等待队列上。若需要时执行ready()唤醒")]),s._v(" "),n("li",[s._v("_Gdead = 6 没有被使用，可能刚刚退出，或在一个freelist；也或者刚刚被初始化；没有执行代码，可能有分配的栈也可能没有；G和分配的栈（如果已分配过栈）归刚刚退出G的M所有或从free list 中获取")])]),s._v(" "),n("p",[s._v("其中有几个状态是不用去理会的：_Genqueue_unused（目前未使用）_Gcopystack=8 （不在运行队列上） _Gpreempted=9 （没有执行用户代码） _Gscan=10 GC （没有执行代码，可以与其他状态同时存在 ）")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/go/gmp/gmp_status1.webp",alt:"img"}})]),s._v(" "),n("p",[s._v("G状态流转")]),s._v(" "),n("h2",{attrs:{id:"m状态转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#m状态转换"}},[s._v("#")]),s._v(" M状态转换")]),s._v(" "),n("p",[s._v("M本身其实是无状态的，不过我们可以根据M是否空闲，执行代码，休眠等这些情况将M的列举一些当前行为。")]),s._v(" "),n("ol",[n("li",[s._v("自旋中：(spinning) M正在从运行队列中获取G，这个时候M拥有一个P")]),s._v(" "),n("li",[s._v("执行代码：M正在执行go代码，此时M拥有一个P")]),s._v(" "),n("li",[s._v("执行原生代码中：M正在执行原生代码或者阻塞的syscall，此时的M不会拥有P")]),s._v(" "),n("li",[s._v("休眠中：M发现无待运行的G时会进入休眠，并添加到空闲M链表中")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/go/gmp/gmp_status2.webp",alt:"img"}})]),s._v(" "),n("p",[s._v("M状态")]),s._v(" "),n("h2",{attrs:{id:"p状态转换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p状态转换"}},[s._v("#")]),s._v(" P状态转换")]),s._v(" "),n("p",[s._v("p的底层结构和状态枚举跟g在同一个文件中，主要定义了一下几种状态：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const (\n   _Pidle = iota\n   _Prunning\n   _Psyscall \n   _Pgcstop\n   _Pdead\n)\n\ntype p struct {\n   id          int32\n   status      uint32 // one of pidle/prunning/...与状态相关  \n   ...\n   runq     [256]guintptr //p本地队列 默认容量为256个G\n   runnext guintptr  //下一个将要运行的G\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("ul",[n("li",[s._v("Pidle：当前p尚未与任何m关联，处于空闲状态")]),s._v(" "),n("li",[s._v("Prunning：当前p已经和m关联，并且正在运行g代码")]),s._v(" "),n("li",[s._v("Psyscall：当前p正在执行系统调用")]),s._v(" "),n("li",[s._v("Pgcstop：当前p需要停止调度，一般在GC前或者刚被创建时")]),s._v(" "),n("li",[s._v("Pdead：当前p已死亡，不会再被调度")])]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/go/gmp/gmp_status3.webp",alt:"img"}})]),s._v(" "),n("p",[s._v("P状态流转")]),s._v(" "),n("p",[s._v("在P创建之初或结束gc后，会被置为Pgcstop状态，在完成初始化之后，会进入Pidel状态，进入该状态后的P可被调度器调度，当P与某个M相关联时，会进入到Prunning状态，当其执行系统调用时，会进入到Psyscall状态，当P应为全局P列表的缩小而被删除时会进入Pdead状态，不会再进行状态流转和调度。当正在执行的P由于某些原因停止调度时，会统一流转成Pidle空闲状态，等待调度，避免线程饥饿。")])])}),[],!1,null,null,null);n.default=e.exports}}]);