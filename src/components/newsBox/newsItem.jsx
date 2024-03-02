import defaultImg from "../../assets/Default.png";
const newsItem = ({title, description,src,url}) => {
const imgSrc = src ? src : defaultImg;
  return (
      <div className="card" style={{maxWidth:"315px"}}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <img src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={url} className="btn btn-primary">
            Read more..
          </a>
        </div>
      </div>
  );
};

export default newsItem;



  