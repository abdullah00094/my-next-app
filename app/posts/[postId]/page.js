import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDetailsPage({params}){
    const postId = params.postId;
    const loadingJsx = (
        <div>
            <h1>Wait a second...</h1>
        </div>
    );
    return(
        <div>
            <h1>post Details </h1>
            <Suspense fallback={loadingJsx}>
            <PostDetails postId={postId}/>
            </Suspense>
        </div>
    );
}