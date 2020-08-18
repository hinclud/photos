import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

export default function() {


const IMAGES =
[{
        src: "https://images.financialexpress.com/2017/07/India-Pakistan.jpg",
        thumbnail: "https://images.financialexpress.com/2017/07/India-Pakistan.jpg",
        thumbnailWidth: 800,
        thumbnailHeight: 500,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/anushka_virat_0.png?yTf2BkaIHPX3_GUi545rrkbUuOQJcoQw&size=770:433",
        thumbnail: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/anushka_virat_0.png?yTf2BkaIHPX3_GUi545rrkbUuOQJcoQw&size=770:433",
        thumbnailWidth: 800,
        thumbnailHeight: 500,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/09/1552561678_i_xLvmDxd_X2.jpg",
        thumbnail: "https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/09/1552561678_i_xLvmDxd_X2.jpg",
        thumbnailWidth: 800,
        thumbnailHeight: 500,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 800,
        thumbnailHeight: 500
}
]

return(<Gallery rowHeight={600} enableLightbox={true} enableImageSelection={false} images={IMAGES}/>)
}