import p1_img from '../assets/p3.avif'
import p2_img from '../assets/p8.webp'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/women5.webp'

let data_product= [
     {
            id: 1,
            name: "Kurta-Set",
            category: "women",
            image: p1_img,
            new_price: 90.0,
            old_price: 130.0
        },
    
        { id: 8, name: "Leggings", category: "women", image:p2_img, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Saree", category: "women", image:p3_img, new_price: 70.0, old_price: 100.0 },
        { id: 10, name: "Jumpsuit", category: "women", image: p4_img, new_price: 50.0, old_price: 90.0 }
]

export default data_product;