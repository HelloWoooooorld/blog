import React from "react";
import { AuthorType, IAuthor } from "../interfaces/post";
import Image from "next/image";
import { graphCMSImageLoader } from "../until";

const Author = (author: AuthorType): JSX.Element => {
  const { bio, name, photo } = author?.author;

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={name}
          height="140"
          width="140"
          className="align-middle rounded-full"
          src={photo.url}
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{name}</h3>
      <p className="text-white text-ls">{bio}</p>
    </div>
  );
};

export default Author;
