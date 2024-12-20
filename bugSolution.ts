function printCoord(pt: { x?: number; y?: number }) {
    // Option 1: Optional Chaining
    console.log("The coordinate's x value is " + (pt.x ?? 'undefined'));
    console.log("The coordinate's y value is " + (pt.y ?? 'undefined'));

    // Option 2: Type Guard (more robust for complex logic)
    // if (pt.x !== undefined && pt.y !== undefined) {
    //     console.log("The coordinate's x value is " + pt.x);
    //     console.log("The coordinate's y value is " + pt.y);
    // } else {
    //     console.log("Incomplete coordinates provided.");
    // }
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});