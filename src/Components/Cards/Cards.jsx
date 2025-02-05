// import React from "react";
// import "./cards.css";

// const Cards = () => {
//   return <div className="cards">Cards Section</div>;

// };

// export default Cards;


import React from "react";
import "./cards.css";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "Mountain View",
      image: "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg",
      description: "A beautiful view of the mountains."
    },
    {
      id: 2,
      title: "Beach Paradise",
      image: "https://www.piclumen.com/wp-content/uploads/2024/10/piclumen-upscale-after.webp",
      description: "Relaxing vibes at the beach."
    },
    {
      id: 3,
      title: "City Lights",
      image: "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
      description: "The vibrant life of the city."
    },
    {
        id: 4,
        title: "City Lights",
        image: "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
        description: "The vibrant life of the city."
      },
      {
        id: 4,
        title: "City Lights",
        image: "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
        description: "The vibrant life of the city."
      }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

