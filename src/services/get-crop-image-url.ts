import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCropImageUrl = (image: string) =>{
    if(!image) return noImage;
    const target = '.io/media';
    const index = image.indexOf(target) + (target).length;
    return image.slice(0, index) + '/crop/600/400' + image.slice(index);
}

export default getCropImageUrl;