import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery } from './Services/post'
import { useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from './Services/post';


function App() {



  const responseInfo = useGetAllPostQuery();
  const responseInfoId = useGetPostByIdQuery(14);
  const responseInfoByLimit = useGetPostByLimitQuery(4);
  const [deletePost, responseDelete] = useDeletePostMutation();
  const [createPost, responseCreate] = useCreatePostMutation();
  const [updatePost, responseYpdate] = useUpdatePostMutation();

  const updatePostData = {
    id: 1,
    title: 'This is updated title',
    body: 'This is updated body',
    userId: 1
  }


  // console.log(deletePost);
  // console.log(responseDelete);
  console.log("Delete Success : ", responseDelete.isSuccess)
  console.log("Create Success : ", responseCreate.isSuccess)



  // console.log(responseInfoByLimit.data);

  const { data, isError, isLoading, isSuccess } = responseInfo;
  // console.log("Response Data : ", data);
  // console.log("isSuccess Data : ", isSuccess);
  // console.log("isError Data : ", isError);
  // console.log("isLoading Data : ", isLoading);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>An error occured : {responseInfo.error.error}</div>

  return (
    <>
      <h1>Hello RTK query</h1>
      {/* get all data */}
      {/* {
        data.map((post,i) =>
          <div key={i}>
          <h4>{post.id+" : "+ post.title}</h4>
          <p>{post.body}</p>
          </div>
        )
      } */}

      {/* get single data */}
      {/* <h4>{responseInfoId.data.id+" : "+responseInfoId.data.title}</h4>
       <p>{responseInfoId.data.body}</p> */}

      {/* get limited data */}
      {
        responseInfoByLimit.data.map((post, i) =>
          <div key={i}>
            <h4>{post.id + " : " + post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
      }

      {/* delete post  */}
      <button onClick={() => { deletePost(1) }}>Delete post</button>

      {/* delete post  */}
      <button onClick={() => { createPost({ title: 'New post', body: 'This is new post', userId: 1 }) }}>Create post</button>

      {/* update post  */}
      <button onClick={() => { updatePost(updatePostData) }}>Update post</button>

    </>
  );
}

export default App;
