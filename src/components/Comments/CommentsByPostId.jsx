import { useCommentsByPostId } from "@/src/hooks/useFetchArray";
import Link from "next/link";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              {comment.id + "："}
              {`${comment.body}`}
              {/* Githubに草が生えないため確認 */}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
