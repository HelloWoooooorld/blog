import React from "react";
import { IAuthor } from "../interfaces/post";
import Image from "next/image";
import { grpahCMSImageLoader } from "../until";

const Author = (author: IAuthor & any): JSX.Element => {
  const { bio, name, photo } = author?.author;

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
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
