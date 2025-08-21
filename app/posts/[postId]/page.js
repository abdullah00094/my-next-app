import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDetailsPage({params}){
    const postId = params.postId;
    return(
        <div>
            <h1>post Details </h1>
            <Suspense>
            <PostDetails postId={postId}/>
            </Suspense>
        </div>
    );
}