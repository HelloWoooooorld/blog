export type IPostCard = {
  post: IPosts;
  key?: string;
};

export type MainPostType = {
  cursor: string;
  posts: IPosts;
};

export interface IPosts {
  post: any;
  map?: any;
  key: ?string;
  author: IAuthor;
  createdAt: string;
  node: {
    slug;
  };
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
}

export interface IFeaturedPosts {
  title: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  slug: string;
}

export interface IPostsShort {
  slug?: string;
  name?: string;
}

export type AuthorType = {
  author: IAuthor;
};
export interface IAuthor {
  bio: string;
  name: string;
  id: string;
  photo: Photo;
}

export interface Photo {
  url: string;
}

export interface FeaturedImage {
  url: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface IAuthor {
  name: string;
  photo: {
    url: string;
  };
}

export interface IPost {
  post: {
    author: IAuthor;
    slug: string;
    featuredImage: {
      url: string;
    };
    createdAt: string;
    title: string;
  };
}

interface IPostWidget {
  categories: string;
  slug: string;
}


interface IParams extends ParsedUrlQuery {
  slug: string
}