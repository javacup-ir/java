---
sidebar_position: 6
---

# رکوردها (Records)


- [مقدمه](https://docs.asta.ir/display/JavaCup/Records#Records-مقدمه)
- [نحوه استفاده](https://docs.asta.ir/display/JavaCup/Records#Records-نحوهاستفاده)
- [قواعد](https://docs.asta.ir/display/JavaCup/Records#Records-قواعد)
- [Reflection API](https://docs.asta.ir/display/JavaCup/Records#Records-ReflectionAPI)




## مقدمه

گاهی لازم می‌شود کلاس‌هایی داشته باشیم که فقط حامل داده هستند و قرار نیست  رفتاری داشته باشند. مثلا کلاس‌هایی که برای پارامترهای وروردیِ کوئری‌های دیتابیسی استفاده می‌کنیم. به جای نوشتن و ایجاد یک کلاس به روش معمول و نوشتن فیلدها و سازنده و ... می‌توانیم از این پس از کلاس‌های Record  استفاده کنیم.

کلاس‌های Record، نوع جدیدی از کلاس‌ها در زبان جاوا  هستند. این کلاس‌ها، حامل داده‌های تغییرناپذیر بوده و انتقال داده بین کلاس‌ها و ماژول‌های مختلف را تسهیل می‌کنند.

در نسخه‌های قبل از جاوا ۱۶ و بدون استفاده از کلاس رکورد، کلاس Person برای نگهداری داده‌‌های تغییرناپدیر به شکل زیر تعریف می‌شود: 

```java
public class Person {
    private final String name;
    private final String gender;
    private final int age;

    public Person(String name, String gender, int age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender;
    }

    public int getAge() {
        return age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Person person = (Person) o;
        return age == person.age &&
                Objects.equals(name, person.name) &&
                Objects.equals(gender, person.gender);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, gender, age);
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                '}';
    }
}
```



اما با کمک ویژگی جدید Record، می‌توان Person را به راحتی و در یک خط به شکل زیر تعریف کرد:

```java
public record Person(String name, String gender, int age) {}
```



## نحوه استفاده

```java
RecordDeclaration:
{ClassModifier} `record` TypeIdentifier [TypeParameters] RecordHeader [SuperInterfaces] RecordBody
```



با تعریف یک رکورد به شکل بالا، موارد زیر به صورت خودکار توسط کامپایلر ایجاد می‌شود:

- به ازای هر کامپوننتی که به صورت پارامتر در تعریف رکورد ذکر شده، این دو مورد ایجاد می‌شود:
  - یک فیلد private final با همان اسم و نوع
  - یک متد public برای دسترسی به مقدار آن کامپوننت. نام متد برابر با نام  کامپوننت است. در مثال بالا، دو متد ()name و ()address را خواهیم داشت.
- یک سازنده public که امضایش دقیقا مشابه هدر رکورد است.
- پیاده‌سازی متدهای equals و hashCode به این صورت که اگر دو کلاس رکورد با نوع یکسان و مقادیر یکسان برای فیلدهایشان داشته باشیم، آن دو رکورد با هم برابر  هستند.
- پیاده‌سازی متد toString به طوری که نشان‌دهنده همه فیلدهای رکورد به همراه مقادیرشان است.

## قواعد

هنگام تعریف و استفاده از کلاس رکورد باید در نظر داشت این کلاس‌ها در مقایسه با یک کلاس عادی، ملاحظات و تفاوت‌هایی دارند که باید در نظر گرفته شود.

- کلاس رکورد از هیچ کلاسی نمی‌تواند ارث‌بری کند و عبارت extends نمی‌تواند در تعریف رکورد ظاهر شود.
- کلاس رکورد به صورت ضمنی final است و نمی‌تواند abstract باشد.
- همانطور که قبلا هم گفته شد، فیلدهای رکورد، final و تغییرناپذیر هستند.
- داخل کلاس رکورد نمی‌توان فیلد یا بلاک‌های مقداردهی غیراستاتیک تعریف کرد.

```java
record Rectangle(double length, double width) {
 
    // Field declarations must be static:
    BiFunction<Double, Double, Double> diagonal;
 
    // Instance initializers are not allowed in records:
    {
        diagonal = (x, y) -> Math.sqrt(x*x + y*y);
    }
}
```

البته فیلد، متد و بلاک مقداردهی استاتیک می‌توان تعریف کرد و از این نظر هیچ فرقی با کلاس عادی ندارد.

```java
record Rectangle(double length, double width) {
     
    // Static field
    static double goldenRatio;
 
    // Static initializer
    static {
        goldenRatio = (1 + Math.sqrt(5)) / 2;
    }
 
    // Static method
    public static Rectangle createGoldenRectangle(double width) {
        return new Rectangle(width, width * goldenRatio);
    }
}
```

- اگر متدهای accessor را بخواهیم داخل رکورد پیاده‌سازی کنیم، باید حتما دقت کنیم که نوع بازگشتی  متد مطابق با نوع فیلد در هدر رکورد باشد و identifier هم public باشد. 



```java
public record Rectangle(int width, int length) {
    private int width() {
        return 4;
    }
    // error: invalid accessor method in record Rectangle
    // private int width() {
    //               ^
    // (accessor method must be public)

    public double width() {
        return 4.0;
    }
    // error: invalid accessor method in record Rectangle
    // public double width() {
    //               ^
    //(return type of accessor method width() must match the type of record component width)
}
```

در مورد بازنویسی متدهای hashCode و equals نیز باید این ملاحظات را در نظر گرفت.



علاوه بر محدودیت‌هایی که در بالا ذکر شد، کلاس رکورد مانند یک کلاس عادی کار می‌کند:

۱- نمونه‌های کلاس رکورد با استفاده از کلیدواژه new ساخته می‌شوند. 

۲- کلاس رکورد می‌تواند به شکل سطح بالا (‌‌top level) یا به شکل تودرتو تعریف شود و حتی می‌تواند generic باشد.

۳-  کلاس رکورد می‌تواند متدهای استاتیک، فیلدها و مقداردهی‌های اولیه داشته باشد.

۴- در کلاس رکورد می‌توان روی متدهای غیراستاتیک نیز تعریف کرد.

5- کلاس رکورد می‌تواند یک یا چند اینترفیس را پیاده‌سازی کند. اما نمی‌تواند از یک کلاس ارث‌بری کند چون دارای state می‌شود و فراتر از چیزی است که در بالا توضیح داده شده است. مانند باقی کلاس‌‌ها، می‌توان از یک اینترفیس برای توصیف رفتار چند رکورد استفاده کرد. این  رفتار ممکن است مستقل از دامنه‌ مساله (مثل واسط Compareable) باشند یا مختص دامنه (*domain-specific*) باشد که در این صورت رکوردها می‌توانند بخشی از سلسله مراتب **sealed** باشند.

6- یک کلاس رکورد می‌تواند تایپ‌های تودرتو از جمله رکوردهای تودرتو را اعلان کند. اگر یک کلاس رکورد خودش تودرتو باشد، به طور ضمنی استاتیک است. به این شکل از به وجود آمدن state قابل تغییر جلوگیری می‌شود. 

7-می‌توان برای کلاس‌های رکورد یا اجزای آن حاشیه‌‌نویسی (annotation) قرار داد. 

8- نمونه‌های کلاس رکورد می‌توانند سریالایز و یا دی‌سریالایز شوند. با این حال، این پروسه با استفاده از متدهای  writeObject, readObject, readObjectNoData, writeExternal, readExternal، نمی‌تواند شخصی‌سازی شود. مولفه‌های یک کلاس رکورد، serialization را کنترل می‌کنند‌، درحالی که سازنده‌های متعارف یک کلاس رکورد deserialization را کنترل می‌کنند.





### **Reflection API**

دو متد پابلیک به java.lang.Class اضافه شده است:

```java
    RecordComponent[] getRecordComponents() :
```





یک آرایه از شی‌های java.lang.reflect.RecordComponent بر می‌گرداند. عناصر این آرایه به همان ترتیبی که در تعریف رکورد آمده‌اند، می‌آیند. اطلاعات اضافی مثل نام، حاشیه‌نویسی و توابع دسترسی (accessor) را می‌توان از هر عنصر آرایه استخراج کرد. 

```java
    boolean isRecord():
```



این متد اگر کلاس داده‌شده از نوع رکورد باشد، true بر می‌گرداند (چیزی شبیه به isEnum).





# منابع

https://openjdk.java.net/jeps/395

https://docs.oracle.com/en/java/javase/17/language/records.html

https://weakreference.medium.com/java-16-records-f16c2ecb4b05

https://www.logicbig.com/tutorials/core-java-tutorial/java-16-changes/intro-to-java-records.html
