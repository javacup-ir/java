---
sidebar_position: 3
---

# تشخیص نوع متغییرهای محلی (Local-Variable Type Inference)



# استنتاج نوع متغیرهای محلی



- [مقدمه](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-مقدمه)
- [فایده](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-فایده)
- [محل استفاده](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-محلاستفاده)
- [مثال](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-مثال)
- [استفاده‌های نادرست](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-استفاده‌هاینادرست)
- [توصیه](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-توصیه)
- [نکته](https://docs.asta.ir/display/JavaCup/Local-Variable+Type+Inference#LocalVariableTypeInference-نکته)



## مقدمه

تا قبل از اینکه این ویژگی در نسخه ۱۰ جاوا منتشر شود، همواره در تعریف  متغیرهای محلی باید نوع متغیر را قبل از نام متغیر به صورت صریح ذکر می‌کردیم. اما با استفاده از این ویژگی، می‌توانیم هنگام تعریف متغیرهای  محلی به جای ذکر صریح نوع متغیر، از واژه رزروشده var استفاده کنیم.  کامپایلر نوع متغیر را بر اساس مقداردهی‌ای که برای آن انجام شده (سمت راست '=')، استنتاج می‌کند.



برای مثال بدون استفاده از کلیدواژه‌ی var چنین چیزی داشتیم:

```java
HashMap<String,ArrayList<ByteArrayOutputStream>> map =
      new HashMap<String, ArrayList<ByteArrayOutputStream>>();
```

اما با این امکان جدید جاوا به سادگی می‌توان نوشت: 

```java
var map = new HashMap<String, ArrayList<ByteArrayOutputStream>>();
```

که خود جاوا دقیقا همان تایپ بالا را استنباط می کند.



در ادامه مطلب با چگونگی استفاده از این ویژگی، باید و نبایدها و فواید آن بیشتر آشنا می‌شویم.

## فایده

از جمله فواید استفاده از این ویژگی، می‌توان به موارد زیر اشاره کرد:

- کمک به افزایش خوانایی کد
- خلوت شدن کد
- صرفه‌جویی در وقت (کد کمتری لازم است تایپ کنیم)

این فواید همگی نشات‌گرفته از این موضوع است که لازم نیست هنگام تعریف و مقداردهی متغیر، نوع متغیر را دو بار تکرار کنیم.

## محل استفاده

باید دقت داشت که این ویژگی فقط برای متغیرهای محلی قابل استفاده است.



جاهایی که می‌توان از var استفاده کرد:

- تعریف متغیر داخل متدها
- تعریف متغیر داخل بلاک‌های کد مثل:
  - بلاک‌های مقداردهی اولیه (initializer code block)
  - ایندکس‌ در حلقه‌های for سنتی و پیشرفته (for each)
  - متغیرهای resource در عبارات try-with-resources

جاهایی که **نمی‌توان** از var استفاده کرد:

- به عنوان فیلد کلاس
- به عنوان پارامتر ورودی متد
- به عنوان نوع بازگشتی متد

## مثال

```java
var str = "Java 10"; // infers String
var list = new ArrayList<String>(); // infers ArrayList<String>
var stream = list.stream();         // infers Stream<String>
 
try (var books = dbconn.executeQuery(query)) {
    return books.map(...)
                    .filter(...)
                    .findAny();
}
 
var bos = new ByteArrayOutputStream();
```



## استفاده‌های نادرست

```java
Main.java:81: error: cannot infer type for local
variable x
        var x;
            ^
  (cannot use 'val' on variable without initializer)
```
بدون مقداردهی به یک متغیر جاوا نمی‌تواند تایپ آن را حدس بزند.



```java
 
Main.java:82: error: cannot infer type for local
variable f
        var f = () -> { };
            ^
  (lambda expression needs an explicit target-type)
```
برای عبارات لامبدا نیز باید تایپشان تصریح شود تا جاوا قادر به استنباط نوع باشد.



```java
Main.java:83: error: cannot infer type for local
variable g
        var g = null;
            ^
  (variable initializer is 'null')
```
چون null مقدار معتبر برای همه‌ی تایپ‌های غیراولیه است، جاوا نمی‌تواند با مقداردهی متغیر به null، تایپ آن را استنباط کند.



```java
Main.java:84: error: cannot infer type for local
variable c
        var c = l();
            ^
  (inferred type is non denotable)
```
برخی تایپ‌های خاص جاوا که امکان نوشتن اسمشان را به شکل صریح نداریم (مثلا کلاس‌های داخلی بی‌نام) قابلیت استنباط تایپ ندارند. مطالعه بیشتر در [این لینک](https://developer.oracle.com/java/jdk-10-local-variable-type-inference.html).



```java 
Main.java:195: error: cannot infer type for local variable m
        var m = this::l;
            ^
  (method reference needs an explicit target-type)
```
مانند لامبداها، رفرنس به متد‌ها نیز باید تایپشان توسط برنامه‌نویس مشخص شود. 



```java 
Main.java:199: error: cannot infer type for local variable k
        var k = { 1 , 2 };
            ^
  (array initializer needs an explicit target-type)
```

برای مقداردهی آرایه نیز باید تایپ اعضای آرایه مشخص باشد. مثلا کد زیر قابل قبول است: 

```java
var k = new int[]{ 1 , 2 };
```





## توصیه

- استفاده از var نباید منجر به پیچیده‌شدن کد و کاهش خوانایی آن شود.

خواننده کد باید بتوانید با دیدن یک متغیری که با var تعریف شده و نگاه انداختن به استفاده‌‌ای که از آن متغیر شده، تقریبا بلافاصله نوع اصلی متغیر را متوجه شود. در واقع همان یک تکه‌کد باید به صورت کامل برای خواننده قابل فهم  باشد و خواننده مجبور نباشد به چند جای مختلف مراجعه کند تا بفهمد قضیه از  چه قرار است. اگر چنین موقعیتی پیش آمد، نشان‌دهنده این است که احتمالا  بهتر است آن‌جا از var استفاده نکنیم. البته ممکن است کلا کد نیاز به  بازآرایی داشته باشد. چرا که کد خوب، باید به راحتی و بدون نیاز به هیچ کمک و ابزاری قابل فهم باشد.

- هنگام استفاده از var همراه با عملگر الماسی (diamond operator) یا متدهای generic، دقت کنید.

ویژگی‌های var و عملگر الماسی هر دو این اجازه را به ما می‌دهند که اگر «نوع» از سایر  اطلاعات به راحتی قابل استنتاج است، آن را تصریح نکنیم. اما آیا می‌توانیم  در تعریف یک متغیر هم‌زمان از هر دو ویژگی استفاده کنیم؟

مثال زیر را در نظر بگیرید:



```java
PriorityQueue<Item> itemQueue = new PriorityQueue<Item>();
```



با استفاده از var یا عملگر الماسی می‌توانیم به صورت زیر این عبارت‌ را کوتاه‌تر کنیم و هم‌چنان نوع متغیر را به راحتی تشخیص دهیم:



```java
// OK: both declare variables of type PriorityQueue<Item>
PriorityQueue<Item> itemQueue = new PriorityQueue<>();
var itemQueue = new PriorityQueue<Item>();
```



مجازیم که از هر دو ویژگی به صورت هم‌زمان  استفاده کنیم و خطای کامپایل نمی‌گیریم. اما دقت کنید که «نوع» استنتاج‌شده متفاوت خواهد بود.



```java
// DANGEROUS: infers as PriorityQueue<Object>
var itemQueue = new PriorityQueue<>();
```



برای استنتاج و تشخیص نوع متغیر وقتی از  عملگر الماسی استفاده می‌کنیم، یا به نوع متغیر در سمت چپ عبارت نگاه می‌شود یا به نوع آرگومان‌های سازنده (constructor). اگر هیچ کدام از این اطلاعات در دسترس نباشد (مانند کد بالا)، آنقدر به عقب می‌رود تا نوع مناسب را که  معمولا Object است، پیدا کند. البته که معمولا Object استنتاج صحیحی نیست و «نوع» مورد نظر چیز دیگری است.

[مطالعه بیشتر در این مورد](https://openjdk.java.net/projects/amber/guides/lvti-style-guide#G6) 



## نکته

- با وجود var، جاوا هم‌چنان یک زبان برنامه‌نویسی نوع‌ثابت (statically typed) حساب می‌شود و باید اطلاعات کافی برای استنتاج نوع در کد وجود داشته باشد. در غیر این صورت، کامپایلر خطا می‌دهد.
- کلیدواژه var در جاوا ۱۰،  مشابه کلیدواژه auto در ++C، کلیدواژه var در #C و اسکالا و  کاتلین و عملگر =: در زبان برنامه‌نویسی  Go است.
- یک چیزی که مهم است بدانیم، این است که هر چند var به  عنوان یک کلیدواژه به نظر می‌رسد، اما واقعا یک کلیدواژه نیست و صرفا یک  کلمه رزروشده برای نام نوع است. به این معنی که کدی که از var به عنوان اسم متغیر، متد یا بسته استفاده می‌کند، تحت تاثیر قرار نخواهد گرفت. اما اگر  در نام‌گذاری کلاس‌ها و واسط‌ها از var استفاده کرده باشیم، به خطا  می‌خوریم.
  - البته که نام‌گذاری کلاس یا واسط با عنوان var، بر خلاف قواعد معمول نام‌گذاری در جاوا است و تعداد چنین مواردی بسیار کم خواهد بود.





# منابع:

https://openjdk.java.net/jeps/286

https://openjdk.java.net/projects/amber/guides/lvti-style-guide

https://openjdk.java.net/projects/amber/guides/lvti-faq

https://dzone.com/articles/finally-java-10-has-var-to-declare-local-variables
