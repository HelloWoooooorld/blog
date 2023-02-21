import React, { LegacyRef, useEffect, useReducer, useRef } from "react";
import { IPostsShort } from "../interfaces/post";
import { submitComment } from "../services";

type State = {
  error: boolean;
  localStorage: Storage | null;
  showSuccessMessage: boolean | null;
  formData: IFormData;
};

const CommentsForm = ({ slug }: IPostsShort) => {
  const [state, setState] = useReducer(
    (prevState: State, nextState: Partial<State>): State => ({
      ...prevState,
      ...nextState,
    }),
    {
      error: false,
      localStorage: null,
      showSuccessMessage: null,
      formData: {
        name: null,
        email: null,
        comment: null,
        storeData: false,
      },
    }
  );
  const commentEl = useRef<HTMLTextAreaElement & string>(null);
  const nameEl = useRef<HTMLInputElement & string>(null);
  const emailEl = useRef<HTMLInputElement & string>(null);
  const storeDataEl = useRef<HTMLInputElement & string>(null);

  useEffect(() => {
    setState({
      localStorage: window.localStorage,
    });
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setState({
      formData: initalFormData,
    });
  }, []);

  const handleCommentSubmit = () => {
    setState({
      error: false,
    });

    const { value: comment }: any = commentEl?.current;
    const { value: name }: any = nameEl?.current;
    const { value: email }: any = emailEl?.current;
    const { value: storeData }: any = storeDataEl?.current;

    if (!comment || !name || !email) {
      setState({
        error: true,
      });
      return;
    }

    const commentObj: CommentType = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      setState({
        showSuccessMessage: true,
      });
      setTimeout(() => {
        setState({
          showSuccessMessage: false,
        });
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg p-8 mb-12 pb-12 rounded-lg">
      <h3
        className="text-xl mb-8 font-semibold border-b
      pb-4"
      >
        Leave a comment
      </h3>
      <div className="grid grid-cols01 gap-4 mb-4">
        <textarea
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          ref={commentEl}
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols01 gap-4 mb-4">
        <input
          className="py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          ref={nameEl}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          ref={emailEl}
          type="email"
          name="email"
          placeholder="Email"
        />
        <div className="grid grid-cols01 gap-4 mb-4">
          <div>
            <input
              className="mx-3"
              ref={storeDataEl}
              type="checkbox"
              id="storeData"
              name="storeData"
            />
            <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
              Save my email for the next time i comment
            </label>
          </div>
        </div>
        {state.error && (
          <p className="text-sx text-red-500">All fields are required</p>
        )}
        <div className="mt-8">
          <button
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
            type="button"
            onClick={handleCommentSubmit}
          >
            Add Comment
          </button>
          {state.showSuccessMessage && (
            <span className="text-xl font-semibold text-green-500 float-right mt-3 ">
              Comment submited
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
