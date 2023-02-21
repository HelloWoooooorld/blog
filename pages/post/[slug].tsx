import React from "react";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { Category, IParams } from "../../interfaces/post";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

const PostDetails = (post: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.post.author} />
          <CommentsForm slug={post.post.slug} />
          <Comments slug={post.post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.post.slug}
              categories={(post.post.categories ?? []).map(
                (category: Category) => category.slug
              )}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as unknown as IParams;

  const data = (await getPostDetails(slug)) || [];

  return {
    props: { post: data },
  };
};


export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostDetails;
