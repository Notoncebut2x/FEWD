![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - More Layout

---

##Agenda

* Layout Challenge Part 1
* Floats
* Nested Floats
* Clearfix
* Layout Challenge Part 2
* Relaxr Blog - How to Start

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Layout Challenge Part 1

---

##Floats

The CSS Float Property allows you to position block-level elements on your page. Naturally, other block and in-line elements, as well as text, will flow around your float.

![](https://css-tricks.com/wp-content/csstricks-uploads/web-text-wrap.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##Floats

Floats can be used to create entire layouts.

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##Float Values

* Left - positions your block on the left of the page.
* Rigt - positions your block on the right of the page.
* None - positions your block in the natural document flow.
* Inherit - Your block will inherit the same float that its parent has.

--

##Content Flows Around Floats

When you float a block or a series of blocks, you'll see other content naturally flows around it to fill any space not occupied by the float. In some cases, you might not want this to happen.


![](https://css-tricks.com/wp-content/csstricks-uploads/unclearedfooter.png)

Note:
Image from Chris Coyier's CSS-Tricks

---

##Float's Sister Property is Clear

It specifies whether an element can be next to floating elements that precede it or must be below them. The clear property applies to both floating and non-floating elements.


![](https://css-tricks.com/wp-content/csstricks-uploads/clearedfooter.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##Clear Property Values

* Both - Clears floats from either direction, forcing a block to a new line.
* Left - Clears only floats from the left.
* Right - Clears only floats from the right.
* None - Removes a clear.


![](https://css-tricks.com/wp-content/csstricks-uploads/directionalclearing.png)

Note:
Image from Chris Coyier's CSS-Tricks

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Nested Floats

---

##Nested Elements and Floats

Remember our DOM trees. Sometime, elements are floated inside a parent element (aka their container). 



If this parent element contained nothing but floated elements, the height of it would literally collapse to nothing. 

--

##Enter the Great Collapse

![](https://css-tricks.com/wp-content/csstricks-uploads/collapse.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##Enter the Great Collapse

![](https://css-tricks.com/wp-content/csstricks-uploads/whywecollapse.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##How to Fix Collapsing

Collapsing almost always needs to be dealt with to prevent strange layout and cross-browser problems. 


We fix it by adding overflow or a clearfix to the parent container.

* Overflow (aka `.clear` class)
* Clearfix

--

##Clear - As a Class

Solves parent collapse issues. Less agressive than clearfix, but might not always work.

```
.clear {
  overflow: auto;
}
```

--

##Clearfix

Resolves parent element collapse issues by inserting invisible content. 

```
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Layout Challenge Part 2

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Relaxr Blog Page - How to Start?

---
##Homework

* Finish the [Relaxr blog homework assignment](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_03_Layout/Assignment).
* [Practice your layout skills by working through Learn Layout](http://learnlayout.com/)
* [Read about background images](https://css-tricks.com/perfect-full-page-background-image/) 

--

##Exit Survey - More Layout
Goodnight!

