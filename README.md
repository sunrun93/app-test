# Angular Test Basic

最近，项目组的开发工作不算紧张，老大要求去写单元测试，让覆盖率的数字好看一些。虽然从个人角度，对这种功能开发结束再补单元测试的行为嗤之以鼻（偷偷的）， 但也是一个学习了解的机会，于是，开始研究Angular test...

## First Step 
首先从最简单的开始入手，初始化一个最简单的测试项目app-test
```
ng new app-test...
```
项目初始化完成后，直接运行ng test命令，就可以运行默认的测试代码了。
我基于angular cli v6.0.7直接运行出现了关于jasmine和typescript的版本不一致的报错，亲测可行的[解决方案](https://blog.csdn.net/weixin_39987434/article/details/85114060).
解决完报错之后，运行ng test就可以运行单元测试代码了，浏览器会自动打开并显示测试结果，第一次单元测试就算是成功的跑起来啦～～当然，并没有什么卵用。。。

## Angular如何进行单元测试的？
Angular testing主要依赖于以下两者：
* **[Karma](http://karma-runner.github.io/latest/index.html)**
karma是由Angular Team开发的一个测试工具，它的本质是通过启动一个Web服务，运行测试代码和源代码，检查并显示测试结果。通过Angular-cli初始化项目时，会自动下载并安装karma。
在项目的src目录下，会默认生成karma.conf.js文件，其中包含一些配置信息，如默认浏览器、根目录、端口号等等，可根据实际需要自行更改。详情参考[官方介绍](http://karma-runner.github.io/4.0/config/configuration-file.html)。

* **[Jasmine](https://jasmine.github.io/)**
Angular默认的单元测试代码是基于Jasmine测试框架构建的，Jasmine是一种测试javascript代码的行为驱动（behavior-driven）的框架，它能跟Karma很好的结合，同样，Jasmine也是官方推荐的测试框架，项目初始化时会自动下载并安装。

## **.spec测试文件的基本结构**

首先，观察默认生成的app.component.spec.ts文件，除去一些必须的import之后，测试代码的主要内容如下：
```
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
```
### **1. describe**

其最外层是一个名为‘describe’的方法，该方法会创建一个测试用例的集合，方法的声明如下：
```
function describe(description: string, specDefinitions: () => void): void
```
describe方法接受两个参数：第一个参数是一个string类型的，即为该测试集合的名字，会对应显示在浏览器的测试报告中；第二个参数接收一个回调，即要执行的一组测试用例。

### **2. beforeEach**

beforeEach方法可以理解为为每个测试用例准备测试环境，会先于测试用例执行，声明如下：
```
function beforeEach(action: ImplementationCallback, timeout?: number): void (+1 overload)
```
beforeEach是官方API提供的方法；与之类似的还有beforeEach, afterEach, beforeAll, afterAll等方法，其具体的使用方式参照官方[API](https://jasmine.github.io/api/edge/global.html#beforeEach).

### **3. it**

it方法用来定义一个具体的测试用例，通过describe方法定义的测试集合中，至少应包含一个it方法，即至少应有一个测试用例。
```
function it(expectation: string, assertion?: ImplementationCallback, timeout?: number): void (+1 overload)
```
[it方法](https://jasmine.github.io/api/edge/global.html#beforeEach)至少接收一个string类型的参数，通常称之为断言，即为该用例测试内容的描述，同样会显示在测试结果报告中，如上例中的‘should create the app’，即表明该用例的目的是测试app组建被成功的创建。其第二个参数则是具体的测试内容；第三个参数则可以设置其延时执行。

## **写一个最简单的测试用例**

了解清楚测试代码的基本结构之后，尝试来写一个最简单的测试用例，通常来说，对纯方法的测试最简单，因为目前的了解还不充分，为了防止干扰，删除默认的app.component.spec.ts文件，并将app.component.html清空，此时因为整个项目中没有其他的测试文件，运行ng test显示如下：
![](/src/assets/none.png) 

然后，以一个简单的求和方法为例，写一个简单的测试用例。在src/app下，创建一个utils的文件夹，在文件夹下分别创建convert.ts文件和convert.spec.ts文件，分别输入以下内容：

convert.ts

```
export class Convert {
    public static sum(x: number, y:number){
        return x+y;
    }
}
```
convert.spec.ts

```
import { Convert } from './convert';
describe('Convert util testing', ()=>{
    it('should return sum of two',()=>{
        let result = Convert.sum(1, 2);
        expect(result).toEqual(3);
    })
})
```
以上代码，实现了两个number类型数字求和的操作，并以简单的数字测试构建了测试用例。保存修改后运行ng test,查看测试结果：
![](/src/assets/success.png) 

这样，一个最最简单的测试就算成功啦～～

当然，真正的angular testing要复杂的多的多的多的多...官方有比较全面的[文档](https://angular.io/guide/testing)，但想要全部了解清楚还有很长的路要走。
千里之行，基于跬步，希望自己能不断深入，持续更新，修正，未完待续...

## [>> 2. jasmine 语法入门 part I](src/assets/docs/part_1.md)
