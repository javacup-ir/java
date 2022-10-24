---
sidebar_position: 2
---

# متدهای سازنده Collectionها

## مقدمه 

چارچوب کالکشن‌های جاوا یکی از امکانات خوب و کاربردی آن محسوب می‌شود و در طیف وسیعی از برنامه‌ها کاربردی خواهد بود. اما یکی از امکاناتی که جاوا از نبود آن رنج می‌بُرد وجود یک سینتکس مخصوص برای مقدار‌دهی اولیه به کالکشن‌هاست. 

برای مثال دو سینتکس زیر برای مقداردهی به آرایه‌ها در جاوا استفاده می‌شوند: 

```java
int[] arr = {1,2,3,4}
int[] arr = new int[]{1,2,3,4}
```



اما زمانی که به کالکشن‌ها می‌رسد مثلا برای لیست (List) یا مپ (Map) یا مجموعه (Set) چنین امکانی وجود ندارد. 



راه‌های جایگزینی که وجود دارد مقداردهی معمولا با فراخوانی‌های پیاپی متد `add` است مثلا: 

```java
Set<String> set = new HashSet<>();
set.add("a");
set.add("b");
set.add("c");
```



و یا البته بسیاری از برنامه‌نویسان از روش دو کروشه (یا همان Double Brace initialization) استفاده می‌کردند که توصیه نمی‌شود.

```java
Set<String> set = new HashSet<String>() {{
     add("a"); 
     add("b"); 
     add("c");
}};
```

و یا روش‌های دیگری مثل استفاده از `Stream` یا `Arrays.asList` وجود دارد ولی هیچ کدام مختصر و مفید نیستند. 



## آشنایی با متدهای کارخانه‌ای 

از نسخه‌ی ۹ جاوا به بعد، طبق [JEP 269](https://openjdk.org/jeps/269)، متد‌های استاتیکی به اینترفیس‌های کالکشن اصلی جاوا اضافه شده‌اند. با کمک این متدها و با کمترین مقدار کد می‌توانید نمونه‌ای غیرقابل تغییر (immutable) از این اینترفیس‌ها بسازید. 



برای لیست و مجموعه می‌توانید از این سینتکس استفاده کنید: 

```java
List.of(a, b, c);
Set.of(d, e, f, g);
```
دقت داشته باشیم که تعداد آرگومان‌های ورودی در لیست و مجموعه محدودیتی ندارد. 



اما برای ساخت مپ قضیه کمی متفاوت است، روش ساخت به شکل زیر است: 

```java
Map.of()
Map.of(k1, v1)
Map.of(k1, v1, k2, v2)
Map.of(k1, v1, k2, v2, k3, v3)
```

در اینجا می‌توان تا ۱۰ کلید-مقدار داشت اما در صورتی که تعداد بیشتر مدنظر باشد می‌توان به ازای هر زوج مقدار یک Entry ساخت و از متد ofEntries استفاده کرد:


```java
Map.ofEntries(
     entry(k1, v1),
     entry(k2, v2),
     entry(k3, v3),
     // ...
     entry(kn, vn));
```


## غیرقابل تغییر بودن

همان‌طور که در متن اشاره شد، این کالکشن‌ها، immutable بوده و بنابراین بعد از ساخت امکان تغییر آن‌ها وجود ندارد.

البته می‌دانیم که هر سه interface‌ یعنی List و Set و Map متدهایی برای تغییر  کالکشن مربوطه دارند و این نمونه‌های ساخته‌شده نیز این اینترفیس‌ها را پیاده‌سازی می‌کنند. پس چه اتفاقی می‌افتد؟ 

با توجه به وجود متدها در اینترفیس‌های گفته‌شده،‌ تایپ‌سیستم جاوا جلوی ما را نمی‌گیرد، ولی در صورتی که صدا زده شوند، استثنای `UnsupportedOperationException` پرتاب می‌شود.

```java
jshell> Set<Integer> s = Set.of(1,2,3);
s ==> [1, 2, 3]
​
jshell> s.add(1)
|  Exception java.lang.UnsupportedOperationException
|     at ImmutableCollections.uoe (ImmutableCollections.java:142)
|     at ImmutableCollections$AbstractImmutableCollection.add (ImmutableCollections.java:147)
|     at (#15:1)
```



این رفتار مشابه متدهای unmodofiable در کلاس Collections است. در صورت استفاده از این متدها نیز یک نمونه جدید از کالکشن برای ما بر می‌گشت که امکان تغییر آن وجود نداشت. برای مثال: 

```java
jshell> Set<Integer> s =Collections.unmodifiableSet(new HashSet<Integer>());
s ==> []

jshell> s.add(1)
|  Exception java.lang.UnsupportedOperationException
|     at Collections$UnmodifiableCollection.add (Collections.java:1067)
|     at (#17:1)
```


## منابع 

- معرفی jep 269 در سایت [openjdk.org](https://openjdk.org/jeps/269) 
- معرفی unmodifiableCollectionها در سایت [codersdesks](https://www.codersdesks.com/how-to-make-collection-unmodifiable/)

[Like](https://docs.asta.ir/pages/viewpage.action?pageId=75924457)Be the first to like this
