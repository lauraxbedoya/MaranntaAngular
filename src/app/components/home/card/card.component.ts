import { Component, Input, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards = [
    {
      id: 0,
      img: 'https://res.cloudinary.com/dream-solutions/image/upload/v1666758574/Marannta/uaize18olnrqhqw7mxyb.jpg',
      nameReference: 'París',
      reference: "Marannta",
      price: 45000
    },
    {
      id: 1,
      img: 'https://res.cloudinary.com/dream-solutions/image/upload/v1666758459/Marannta/bvtztotxydojpzv3prvv.jpg',
      nameReference: 'Tokio',
      reference: "Marannta",
      price: 44000
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dream-solutions/image/upload/v1666758575/Marannta/nkf8wcrgp3ibfu4bpjmk.jpg',
      nameReference: 'Amapola',
      reference: "Marannta",
      price: 56000
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/dream-solutions/image/upload/v1666758574/Marannta/dctvbhhwr0ytac2pqlxm.jpg',
      nameReference: 'Samantha',
      reference: "Marannta",
      price: 50000
    },
  ]
  images = [];
  imageHoverId: number | null = null;

  async onUpload() {
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'Marannta'
      }
    })

    const images = [];
    for (let im of this.images) {
      const formData = new FormData();
      formData.append('file', im);
      formData.append('upload_preset', 'angular_cloudinary');

      const resp = await fetch('https://api.cloudinary.com/v1_1/dream-solutions/upload', {
        body: formData,
        method: 'POST',
      })
      const cargarimagen = await resp.json();
      images.push(cargarimagen.secure_url)
    }
  }

  ngOnInit() {
    this.cards;
    this.onUpload();
  }

  onMouseEnter(id: number) {
    this.imageHoverId = id;
  }

  onMouseOut() {
    this.imageHoverId = null;
  }

  addToBag(id: number) { }
}