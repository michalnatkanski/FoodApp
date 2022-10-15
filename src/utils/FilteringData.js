import React from "react";

const getTypes = (popularData) => {
    const types = popularData.map(item => item.type);
    return types;
}

export { getTypes }