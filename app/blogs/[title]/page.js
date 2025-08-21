export default function showBlogPage(props){
    console.log(props);
    return (
        <div>
            <h1>
                show single blog
            </h1>
                        <h1>
                {props.params.title}
            </h1>
        </div>
    );
}