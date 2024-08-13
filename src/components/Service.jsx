import "../styles/Navbar.css";
import "../styles/Service.css";

const Service = () => {
  const show = [
    {
      id: 1,
      name: " Plumbing",

      image:
        "https://www.quailplumbing.com/wp-content/uploads/2016/11/Depositphotos_57384807_l-2015.jpg",
    },

    {
      id: 2,
      name: " Electricity",

      image:
        "https://th.bing.com/th?id=OIP.t2ZUMFDbmKsFYPnFADBvegHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },

    {
      id: 3,
      name: "Home Delivery",

      image:
        "https://th.bing.com/th/id/OIP.X5rGugXUWGQlOZ76VkPaKgHaE7?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div>
      {show.map((series, index) => (
        <div key={index} className="image_list">
          <img className="image" src={series.image} alt={series.name} />
        </div>
      ))}
    </div>
  );
};

export default Service;
