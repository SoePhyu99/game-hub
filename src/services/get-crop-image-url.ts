const getCropImageUrl = (image: string) =>{
    const target = '.io/media';
    const index = image.indexOf(target) + (target).length;
    return image.slice(0, index) + '/crop/600/400' + image.slice(index);
}

export default getCropImageUrl;