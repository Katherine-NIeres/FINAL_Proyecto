import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author,username,}) {


  return (
    <div className="post">
      <div className="image">
      <Link to={`/post/${_id}`}>
          <img src={'http://localhost:4000/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          {author && <a className="author">{author.username}</a>}
          
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
