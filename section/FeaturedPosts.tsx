import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const FeaturedPosts = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((res) => setPosts(res));
    setDataLoaded(true);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div className="mb-8">
      <Carousel
        infinite
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          posts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
