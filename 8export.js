// Named Exports
// You can create named exports two ways. In-line individually, or all at once at the bottom.

export const name = "Jesse";
export const age = 40;
const name2 = "Jesse";
const age2 = 40;

export {name2, age2};



// Default Exports
// Let us create another file, named message.js, and use it for demonstrating default export.

// You can only have one default export in a file.

const message = () => {
    const names = "Jesse";
    const ages = 40;
    return names + ' is ' + ages + 'years old.';
    };
    
    export default message;