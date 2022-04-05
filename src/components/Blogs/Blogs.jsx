import React from "react";
import Header from "../Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-5xl font-bold text-center my-4">Blogs</h1>
      <div className="grid grid-cols-3 gap-3 p-4">
        <div className="border-2 rounded-lg bg-slate-200 p-4 hover:shadow-xl">
          <h1 className="text-2xl mb-2">What is Context API?</h1>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. Context API is a
            (kind of) new feature added in version 16.3 of React that allows one
            to share state across the entire app (or part of it) lightly and
            with ease.
          </p>
          <h1 className="text-2xl mb-2">Why we need Context API</h1>
          <p>
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </div>
        <div className="border-2 rounded-lg bg-slate-200 p-4 hover:shadow-xl">
          <h1 className="text-2xl mb-2">What is Semantic tags?</h1>
          <p>
            Semantic HTML elements are those that clearly describe their meaning
            in a human- and machine-readable way. Elements such as header,
            footer and article are all considered semantic because they
            accurately describe the purpose of the element and the type of
            content that is inside them. When we use semantic tags those are
            very much SEO friendly.
          </p>
          <p>
            Some most common semantic tags are: header, footer, main, aside,
            section, article,nav,etc.
          </p>
        </div>
        <div className="border-2 rounded-lg bg-slate-200 p-4 hover:shadow-xl">
          <h1 className="text-2xl mb-2">Inline vs Inline-Block vs Block</h1>
          <p>
            The display property specifics the display behavior of an element.
            It’s a must know for controlling the layout of an element. There’s a
            bunch of property values. But let’s start off with the essential
            inline.
          </p>
          <h1 className="text-xl mb-1">Inline:</h1>
          <p>
            Displays an element as an inline element. Any height and width
            properties will have no effect. inline The element doesn’t start on
            a new line and only occupy just the width it requires. You can’t set
            the width or height.Here are a few elements that have a default
            inline property: span, a, img.
          </p>
          <h1 className="text-xl mb-1">Inline-block:</h1>
          <p>
            Displays an element as an inline-level block container. You CAN set
            height and width values. inline-block It’s formatted just like the
            inline element, where it doesn’t start on a new line. BUT, you can
            set width and height values.
          </p>
          <h1 className="text-xl mb-1">Block:</h1>
          <p>
            Check the length of the string. block The element will start on a
            new line and occupy the full width available. And you can set width
            and height values. Here are a few elements that have a default block
            property: div, h1, p, li, section
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
