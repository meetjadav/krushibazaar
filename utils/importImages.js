const importImages = (r) => {
    let images = {};
    r.keys().map((item) => { images[item] = r(item); });
    return images;
};

export default importImages;
