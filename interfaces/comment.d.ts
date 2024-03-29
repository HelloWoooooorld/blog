type CommentType = {
    comment: string | null;
    name: string | null;
    email: string | null;
    slug: string | undefined;
  };
  interface IFormData {
    name: string | null;
    email: string | null;
    comment?: string | null;
    storeData: null | unknown;
  }

  interface ICommentShort {
    name: string;
    createdAt: string;
    comment: string;
  }