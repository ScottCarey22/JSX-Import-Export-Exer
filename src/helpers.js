// random item

function choice(items) {
    let randFruit = Math.floor(Math.random() * items.length);
    return items[randFruit];
};

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

function remove(item, items) {
    for (let i = 0; i < items; items++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export { choice, remove }