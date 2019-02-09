
React: setState()
--------

{ a: 0, b: 0 } // initial state

setState({ a: 100 });

{ a: 100, b: 0 }

Redux: reducer() 
---------

{ a: 0, b: 0 } // initial state

const reducer = (state, action) => {
  return { ...state, a: 100 };
};

{ a: 100, b: 0 }