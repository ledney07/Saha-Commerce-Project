import React from "react";
import "./directory-component.scss";
import MenuItem from "../menu-item/menu-item-component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          id: 2,
          title: "jackets",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0842/1103/articles/Leather_Jackets_Coloured_4096x.jpg?v=1574826671",
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl:
            "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2016%2F02%2Fnew-balance-ml1980wb-1.jpg?q=75&w=800&cbr=1&fit=max",
        },
        {
          id: 4,
          title: "women",
          imageUrl:
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
          size: "large",
        },
        {
          id: 5,
          title: "men",
          imageUrl:
            "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
