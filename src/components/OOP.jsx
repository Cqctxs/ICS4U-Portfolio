import React from 'react'
import {styles} from "../styles.js";
import Code from "./Code.jsx";
import Heading from "./Heading.jsx";

const OOP = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row items-start gap-5 pb-32`}>
                <div>
                    <p className={`${styles.sectionHeadText} whitespace-nowrap`}>Object Oriented Programming</p>
                    <p className={`${styles.sectionText}`}>
                        First introduced by Alan Kay in 1966, object-oriented programming (OOP) is a programming
                        structure that organizes code into reusable pieces using classes and objects. Many popular
                        programming languages, such as C++, Java, JavaScript, and Python, incorporate OOP concepts into
                        their design.
                    </p>
                    <Heading text={`Classes`}/>
                    <p className={`${styles.sectionText}`}>A class is like a blueprint or template that's used to create
                        specific types of objects. Within
                        a class, you can define the attributes (variables) that an object of that type will have, as
                        well as the behaviors (methods) that the object can perform. These attributes and behaviors are
                        defined by the programmer, who creates the class.</p>

                    <Heading text={`Objects`}/>
                    <p className={`${styles.sectionText}`}>
                        In Java, an object is an <span className={`${styles.sectionBold}`}>instance</span> of a class
                        that has its own set of attributes and behaviors. When you create a new object, you use
                        the <span className={`${styles.sectionBold}`}>new</span> keyword and specify the name of the
                        class that you want to create an instance of.
                    </p>

                    <Heading text={`Classes In Java`}/>
                    <p className={`${styles.sectionText}`}>Here is the basic structure of a class in Java:</p>
                    <Code text={`
public class ClassName {
    //body
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Example cat class:</p>
                    <Code text={`
public class Cat {
    //body
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Class attributes in Java are in the form of <span
                        className={`${styles.sectionBold}`}>variables</span>. A variable is a container which holds a
                        value while the Java program is executed. Variables can change A variable has a name, type and a
                        value. In Java, the convention for variable names are in camel-case notation, where there are no
                        spaces and new words are indicated with the first letter being uppercase.</p>
                    <p className={`${styles.sectionText}`}>Example cat class with variables:</p>
                    <Code text={`
public class Cat {
    private String name = "Mittens";
    private String breed = "Tabby";
    private String color = "Grey";
    private double weight = 4.3;
    private boolean isHungry = false;
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Other than attributes, classes also have behaviours.
                        Behaviours in Java are in the form of <span className={`${styles.sectionBold}`}>methods</span>.
                        A method in Java is a block of code that, when called, performs specific actions mentioned in
                        it. Methods in Java have four main parts which are the method name, parameter list, return type
                        and body. The method name is used to get access the method, similar to a variable. The parameter
                        list is the list of parameters which are inputted into the method, which are then used inside of
                        the code. The return type is what the method outputs, and can be any datatype or void (nothing).
                        The body of the method is the code that is run.</p>
                    <p className={`${styles.sectionText}`}>Example cat class with variables and methods:</p>
                    <Code text={`
public class Cat {
    private String name = "Mittens";
    private String breed = "Tabby";
    private String color = "Grey";
    private double weight = 4.3;
    private boolean isHungry = false;
    
    public String meow() {
        return "Meow!";
    }
    
    public void feed(int foodAmt) {
        if (foodAmt > 10) isHungry = true;
        weight += 1;
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>The cat class now has two methods, as well as the
                        variables from before. The method meow() takes no parameters and returns the String "Meow!".
                        The method feed() takes in the parameter <span className={'italic'}>foodAmt</span> and
                        returns nothing. These are just some examples of methods in Java, but the possibilities are
                        endless.</p>

                    <p className={`${styles.sectionText}`}>Constructors in Java are special methods that are used to
                        create new objects and initialize their attributes with specific values. When you create a
                        constructor for a class, it is called automatically when a new object of that class is
                        created. Constructors have the <span className={`${styles.sectionBold}`}>same name</span> as
                        the class and have no return type. They can take parameters, which are used to set the
                        initial attribute values of the object. If you don't define a constructor for a class, Java
                        will provide a default constructor that takes no parameters and does nothing.</p>
                    <Code text={`
public class Cat {
    private String name;
    private String breed;
    private String color;
    private double weight;
    private boolean isHungry;
    
    //Default no-argument constructor
    public Cat() {
        name = "";
        breed = "";
        color = "";
        weight = 0.0;
        isHungry = false;
    }
    
    //Constructor with parameters
    public Cat(String name, String breed, String color, double weight) {
        this.name = name;
        this.breed = breed;
        this.color = color
        this.weight = weight;
        isHungry = false;
    }
    //More methods not shown
}
                    `}/>
                    <p className={`${styles.sectionText}`}>This class has two constructors: one with no parameters and
                        one with parameters. The no argument constructor sets all of the variables to equal default
                        values, while the constructor with parameters sets each of the variables to its respective
                        parameter. The <span className={`${styles.sectionBold}`}>this</span> keyword in Java refers to
                        the current object instance. It is often used when you have a parameter or variable with the
                        same name as an attribute of the class, in order to clarify which one you're referring to.</p>
                    <Heading text={`Access Modifiers and Encapsulation`}/>
                    <p className={`${styles.sectionText}`}>In Java, access modifiers are keywords that define the
                        accessibility of classes, methods, variables, and constructors. They control the level of
                        visibility and availability of these elements to other parts of the program. Java provides four
                        types of access modifiers:</p>
                    <ol className={`${styles.sectionText} list-decimal ${styles.paddingX}`}>
                        <li className={'mt-4'}><span className={`${styles.sectionBold}`}>Public:</span> Public access
                            modifier allows unrestricted access to the
                            associated class, method, variable, or constructor. It can be accessed from anywhere within
                            the program.
                        </li>
                        <li className={'mt-4'}><span className={`${styles.sectionBold}`}>Private:</span> Private access
                            modifier restricts the access of the associated
                            class, method, variable, or constructor to only within the same class. It cannot be accessed
                            from outside the class.
                        </li>
                        <li className={'mt-4'}><span className={`${styles.sectionBold}`}>Protected:</span> Protected
                            access modifier allows access to the associated
                            class, method, variable, or constructor within the same class, its subclasses, and other
                            classes in the same package. It is similar to the default access modifier within the package
                            but provides additional access to subclasses outside the package.
                        </li>
                        <li className={'mt-4'}><span
                            className={`${styles.sectionBold}`}>Default (no modifier):</span> If no access modifier is
                            specified, it is
                            considered as default or package-private access. It allows access within the same package
                            but restricts access from outside the package.
                        </li>
                    </ol>
                    <p className={`${styles.sectionText}`}>Encapsulation is a principle in object-oriented programming
                        that hides the internal state (data) of an object from the outside. It provides access to the
                        data only through publicly exposed methods, known as getters and setters. The encapsulation
                        mechanism allows you to control the access to the data, protecting it from being directly
                        manipulated by other classes.</p>
                    <p className={`${styles.sectionText}`}>By encapsulating data, you can ensure that the internal state
                        of an object remains consistent and can be modified only through well-defined methods. This
                        helps in maintaining data integrity, improves code maintainability, and provides a way to hide
                        the complexity of implementation from the user of the class.</p>
                    <p className={`${styles.sectionText}`}>In Java, encapsulation is achieved by declaring the class
                        variables as private and providing public getter and setter methods to access and modify the
                        private data. This way, the internal state of an object is protected and can be accessed and
                        modified only through the defined methods, ensuring data encapsulation.</p>
                    <Heading text={`Inheritance`}/>
                    <p className={`${styles.sectionText}`}>Inheritance is a fundamental concept in object-oriented
                        programming (OOP) that allows one class to inherit the properties and behaviors (methods and
                        fields) of another class. The class that is being inherited from is called the "superclass" or
                        "parent class," and the class that inherits from it is called the "subclass" or "child
                        class."</p>
                    <p className={`${styles.sectionText}`}>Inheritance provides a way to create hierarchical
                        relationships between classes, where subclasses can inherit and extend the functionality of the
                        superclass. The subclass inherits all the non-private members (methods and fields) of the
                        superclass, including its public, protected, and default (package-private) members.</p>
                    <p className={`${styles.sectionText}`}>By using inheritance, you can reuse code and avoid
                        duplicating common functionality across multiple classes. The subclass can add its own
                        additional methods and fields or override the inherited ones to customize their behavior. This
                        promotes code reusability, modularity, and allows for the creation of more specialized classes
                        based on more general ones. One thing to note is that constructors are not inherited.</p>
                    <p className={`${styles.sectionText}`}>In Java, the "extends" keyword is used to establish an
                        inheritance relationship between classes. The syntax for defining a subclass is as follows:</p>
                    <Code text={`
public class Subclass extends Superclass {
    //body
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Example Scottish Fold class:</p>
                    <Code text={`
public class ScottishFold extends Cat {
    //body
}
                    `}/>
                    <p className={`${styles.sectionText}`}>The subclass can access the inherited members of the
                        superclass using the appropriate access modifiers. For example, if a superclass has a protected
                        method, the subclass can directly invoke that method or override it with a modified
                        implementation.</p>
                    <p className={`${styles.sectionText}`}>Java supports single inheritance, which means a subclass can
                        inherit from only one superclass. However, it allows multiple levels of inheritance, where a
                        subclass can become a superclass for another class, forming an inheritance hierarchy.</p>
                    <Heading text={`Variables and Methods`}/>
                    <p className={`${styles.sectionText}`}>A subclass can have its own variables and methods in addition
                        to inheriting variables and methods from its superclass. In addition to this, a subclass can
                        also alter the functionality of methods from the superclass, which is known as overriding. </p>
                    <p className={`${styles.sectionText}`}>When overriding a method, the <span
                        className={`${styles.sectionBold}`}>@Override</span> annotation is often used. This indicates to
                        the compiler that the method is being overriden. However, including this annotation does not
                        change the functionality of the code, and is used for debugging and stylistic purposes.</p>
                    <p className={`${styles.sectionText}`}>Here is an example of inheritance and overriding with the Cat
                        and Scottish Fold example:</p>
                    <Code text={`
public class ScottishFold extends Cat {
    private boolean isFoldedEars;
    
    //Constructors not shown
    
    @Override
    public void meow() {
        return "Purr-meow!";
    }
    
    //Assume getters and setters are implemented
    @Override
    public void feed(int foodAmt) {
        if (foodAmt > 25) setHunger(true);
        setWeight(getWeight() + 2.5);
    }
    
    // New method specific to ScottishFold
    public String showEarsStatus() {
        if (isFoldedEars) {
            return "This Scottish Fold has folded ears.";
        } else {
            return "This Scottish Fold does not have folded ears.";
        }
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>In the <span
                        className={`${styles.sectionBold}`}>ScottishFold</span> class is a subclass of the <span
                        className={`${styles.sectionBold}`}>Cat</span> class. It inherits the <span
                        className={`${styles.sectionBold}`}>name, breed, weight, and isHungry</span> variables from the
                        Cat class. Additionally, the ScottishFold class introduces its own variable called <span
                            className={`${styles.sectionBold}`}>isFoldedEars</span>. The ScottishFold class overrides
                        both the <span className={`${styles.sectionBold}`}>meow()</span> method and the <span
                            className={`${styles.sectionBold}`}>feed()</span> method to have different implementations
                        in the superclass. The overridden feed method also demonstrates <span
                            className={`${styles.sectionBold}`}>encapsulation</span>, as private variables cannot be
                        accessed in the subclass. Additionally, the ScottishFold class also has a new method
                        called <span className={`${styles.sectionBold}`}>showEarsStatus()</span>, which returns a String
                        message based on the value of isFoldedEars.</p>
                    <p className={`${styles.sectionText}`}>An <span
                        className={`${styles.sectionBold}`}>is-a</span> relationship can be understood as a statement
                        that says "a subclass is a type of its superclass." For example, in the example above, we can
                        say that a ScottishFold <span className={`${styles.sectionBold}`}>is a</span> Cat. However, we
                        cannot say that a Cat <span className={`${styles.sectionBold}`}>is a</span> ScottishFold, as not
                        all cats are Scottish Folds.</p>
                    <Heading text={`The 'super' Keyword`}/>
                    <p className={`${styles.sectionText}`}>The <span
                        className={`${styles.sectionBold}`}>super</span> keyword is used to refer to the superclass,
                        allowing you to access and invoke superclass members (methods, variables, and constructors) from
                        within a subclass. Here are the key uses of the super keyword:</p>
                    <ol className={`${styles.sectionText} list-decimal ${styles.paddingX}`}>
                        <li className={'mt-4'}><span className={`${styles.sectionBold}`}>Calling superclass constructors:</span> The
                            super keyword can be used to call a constructor in the superclass from within the subclass
                            constructor. This is useful when you want to reuse the initialization logic of the
                            superclass. <span className={`${styles.sectionBold}`}>super()</span> is used to call the
                            no-argument constructor of the superclass. <span
                                className={`${styles.sectionBold}`}>super(params)</span> is used to call the superclass
                            constructors with parameters. When using the superclass constructor, you must call super on
                            the first line of the constructor. If you don't use the superclass constructor, the compiler
                            will insert the call to the default superclass constructor on the first line.
                        </li>
                        <li className={'mt-4'}><span
                            className={`${styles.sectionBold}`}>Accessing superclass members:</span> You can use super
                            to access and use the members (methods and variables) of the superclass from within the
                            subclass. This is especially useful when the subclass has overridden a method and wants to
                            call the superclass implementation. This is done by using <span
                                className={`${styles.sectionBold}`}>super.</span>someMethod() or <span
                                className={`${styles.sectionBold}`}>super.</span>someVariable.
                        </li>
                    </ol>
                    <p className={`${styles.sectionText}`}>Here is a full implementation of the ScottishFold Class:</p>
                    <Code text={`
public class ScottishFold extends Cat {
    private boolean isFoldedEars;
    
    //Default no-argument constructor
    public ScottishFold() {
        super();
        isFoldedEars = true;
    }
    
    //Constructor with parameters
    public ScottishFold(String name, String color, double weight, boolean isFoldedEars) {
        super(name, "Scottish Fold", color, weight);
        this.isFoldedEars = isFoldedEars;
    }
    
    @Override
    public void meow() {
        return "Purr-meow!";
    }
    
    //Assume getters and setters are implemented
    @Override
    public void feed(int foodAmt) {
        super.feed(foodAmt); //Calling the superclass method
        if (getHunger()) {
            System.out.println(getName() + " is full and content.");
        } else {
            System.out.println(getName() + " is still hungry.");
        }
    }
    
    // New method specific to ScottishFold
    public String showEarsStatus() {
        if (isFoldedEars) {
            return "This Scottish Fold has folded ears.";
        } else {
            return "This Scottish Fold does not have folded ears.";
        }
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>This new implementation of the <span
                        className={`${styles.sectionBold}`}>ScottishFold</span> class includes constructors which call
                        the superclass constructors of <span className={`${styles.sectionBold}`}>Cat</span>. The <span
                            className={`${styles.sectionBold}`}>feed()</span> method has been updated to call the
                        superclass method and determine the hunger afterwards.</p>
                    <Heading text={`Polymorphism`}/>
                    <p className={`${styles.sectionText}`}>Polymorphism in Java allows for code that is more flexible,
                        modular, and scalable. It facilitates the creation of code that can work with different types of
                        objects without needing to know their specific implementations. This promotes code reuse,
                        maintainability, and extensibility in object-oriented systems.</p>
                    <p className={`${styles.sectionText}`}>When a subclass inherits from a superclass, it inherits all
                        the attributes and operations of the superclass. This means that a subclass object can perform
                        all the same actions and have access to the same features as a superclass object. The key
                        concept is that a subclass instance can be used in place of a superclass instance, and
                        everything will still function correctly.</p>
                    <p className={`${styles.sectionText}`}>A key polymorphism concept is the concept of <span
                        className={styles.sectionBold}>Upcasting and Downcasting</span>. Upcasting refers to the process
                        of assigning a reference of a subclass object to a superclass reference variable. It is an
                        implicit and safe operation because a subclass object inherently possesses all the
                        characteristics of its superclass. Upcasting allows treating an object of a subclass as an
                        object of its superclass, enabling polymorphism. Downcasting refers to the process of assigning
                        a reference of a superclass to a subclass reference variable. It is an explicit operation that
                        requires casting and may result in a <span
                            className={`${styles.sectionBold}`}>ClassCastException</span> at runtime if the actual
                        object is not compatible with the subclass. Downcasting is used when there is a need to access
                        the specific members or behaviors defined in the subclass.</p>
                    <p className={`${styles.sectionText}`}>Java has an additional binary operator <span
                        className={`${styles.sectionBold}`}>instanceof</span> which may be used to check if an object is
                        an instance of a specific class.</p>
                    <p className={`${styles.sectionText}`}>Here is an example of polymorphism, upcasting and
                        downcasting, as well as the use of the instanceof operator:</p>
                    <Code text={`
public static void main(String[] args) {
    Cat[] cats = new Cat[3];
    
    cats[0] = new Cat("Whiskers", "Siamese", "Grey", 5.7);
    cats[1] = new ScottishFold("Mango", "Orange", 5.0, true); //Upcasting
    cats[2] = new Cat("Mittens", "Tabby", "Beige", 3.5);
    
    //Assume getters and setters are implmented
    for (Cat cat : cats) {
        System.out.print(cat.getName() + ", " + cat.getBreed() + ": ");
        System.out.println(cat.meow()); // Polymorphic method invocation
        
        if (cat instanceof ScottishFold) {
            ScottishFold scottishFold = (ScottishFold) cat; //Downcasting
            System.out.println(scottishFold.showEarsStatus()); //Subclass method invocation
        }
        System.out.println();
    }
}
                    `}/>
                    <Code text={`
Output:
Whiskers, Siamese: Meow!

Mango, Scottish Fold: Purr-meow!
This Scottish Fold has folded ears.

Mittens, Tabby: Meow!
                    `}/>
                    <p className={`${styles.sectionText}`}>This code segment demonstrates polymorphism using an array of
                        Cats. Since a ScottishFold <span className={`${styles.sectionBold}`}>is a</span> Cat, upcasting
                        applies. By looping through all cats, we can get all of the cats to meow. When the code is run,
                        since, the cat "Mango" was an instance of a ScottishFold, polymorphism makes sure the correct
                        meow() method is called. This also demonstrates the use of the instanceof operator and
                        downcasting. Since the cat "Mango" is an instance of the ScottishFold class, the expression
                        evaluates to true. The cat is then downcast into a ScottishFold, and then a method in the
                        ScottishFold class is called.</p>
                    <Heading text={`Abstract Classes and Interfaces`}/>
                    <p className={`${styles.sectionText}`}>Abstract classes and interfaces are used to define common
                        behavior and provide a blueprint for classes to implement or inherit from.</p>
                    <p className={`${styles.sectionText}`}>An abstract class is a class that cannot be instantiated but
                        serves as a base for subclasses to inherit from. It can contain a combination of abstract
                        methods (methods without implementation) and concrete methods (methods with implementation).
                        Abstract classes may also have instance variables, constructors, and other features similar to
                        regular classes. Subclasses of an abstract class must either implement all the abstract methods
                        defined in the abstract class or be declared as abstract themselves. Abstract classes are useful
                        when you want to provide a common interface or partial implementation for a set of related
                        classes.</p>
                    <p className={`${styles.sectionText}`}>An interface is a collection of abstract methods that define
                        a contract for classes to implement. Unlike abstract classes, interfaces cannot have instance
                        variables or constructors. They only declare method signatures. Classes that implement an
                        interface must provide implementations for all the methods declared in the interface. An
                        interface can be implemented by multiple classes, allowing them to share common behavior.
                        Interfaces are useful when you want to define a contract or set of capabilities that classes
                        should adhere to, irrespective of their inheritance hierarchy.</p>
                    <p className={`${styles.sectionText}`}>Here is an example of an abstract class being used to
                        create a new Animal class:</p>
                    <Code text={`
public abstract class Animal {
    private String species;
    private boolean isVertebrate;
    
    //Constructors not shown
    
    public abstract String sound();
}

public class Cat extends Animal {
    private String name;
    private String breed;
    private String color;
    private double weight;
    private boolean isHungry;
    
    @Override
    public String sound() {
        return "Meow!";
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>Here is the same example using interfaces:</p>
                    <Code text={`
public interface Animal {
    String sound();
}

public class Cat implements Animal {
    private String name;
    private String breed;
    private String color;
    private double weight;
    private boolean isHungry;
    
    @Override
    public String sound() {
        return "Meow!";
    }
}
                    `}/>
                    <p className={`${styles.sectionText}`}>In both of the examples, a general behaviour was defined for
                        Animals. The behaviour is then implemented by the subclasses that inherit/implement from the
                        superclass.</p>
                    <Heading text={`Common Mistakes`}/>
                    <ul className={`${styles.sectionText} list-disc ${styles.paddingX}`}>
                        <li className={'mt-4'}>
                            Creating classes that are too large or have too many responsibilities.
                        </li>
                        <li className={'mt-4'}>
                            Overusing inheritance, creating a complex and inflexible class hierarchy. This could also
                            lead to code duplication, as well as difficulties in maintainance and extensibility.
                        </li>
                        <li className={'mt-4'}>
                            Failing to properly encapsulate data by using access modifiers (e.g., public, private,
                            protected) can lead to data integrity issues and make it harder to maintain and reason about
                            the code.
                        </li>
                        <li className={'mt-4'}>
                            Neglecting to use interfaces or abstract classes when appropriate can limit code flexibility
                            and hinder the implementation of polymorphism.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OOP