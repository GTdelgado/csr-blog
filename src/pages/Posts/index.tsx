import PostComponent from "../../components/Post";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
export type ElementsType = {
  type: "image" | "text";
  content: string;
};

export type PostType = {
  _id: string;
  title: string;
  elements: ElementsType[];
};

export default function Posts() {
  const [data, setData] = useState<PostType[]>();

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get<PostType[]>(
          "https://sa-east-1.aws.data.mongodb-api.com/app/data-zozni/endpoint/posts"
        )
        .then((response) => setData(response.data));
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1 className="font-bold text-3xl text-center">Posts</h1>

      {data?.map((post) => (
        <PostComponent
          _id={post._id}
          title={post.title}
          key={post._id}
          elements={post.elements}
        />
      ))}
    </main>
  );
}
