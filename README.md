# 知乎编辑器

知乎的Web编辑器，从iOS客户端（4.13.0）搞出来的。知乎的工程师应该是不小心把 sourcemap 文件也一同打进了客户端中，今天不小心被我发现了……

知乎的iOS客户端所用的编辑器应该跟Web是一样的(基于[Draft](https://github.com/facebook/draft-js)改造)，值得研究的是 zhihu-hybrid 和 zhihu-bridge 这两个package，可以看出知乎也在Hybrid的路上不断摸索。  

知乎在线下分享中提到了他们的安卓客户端有在用[RxJava](https://github.com/ReactiveX/RxJava.git)，他们在 zhihu-hybrid 和 zhihu-bridge 中也有在用[RxJS](https://github.com/Reactive-Extensions/RxJS)，他们应该是Rx的真爱粉……
