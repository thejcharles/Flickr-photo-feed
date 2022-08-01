import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState({
    description: "",
    generator: "",
    items: [
      {
        author: "",
        author_id: "",
        date_taken: "",
        description: "",
        link: "",
        media: {},
        published: "",
        tags: "",
        title: ""
      }
    ],
    link: "",
    modified: "",
    title: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("/api");
      const data = await result.json();
      setBackendData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Flickr Public Photo Gallery</h1>
      <div className="row">
        <div>
          <div className="card-group">
            {backendData.items.map(b => (
              <div className="col-3" key={b.link}>
                <div className="card">
                  <img
                    alt={
                      b.title !== " "
                        ? b.title
                        : `image uplaoded by ${b.author} does not contain alternative text`
                    }
                    className="img-thumbnail"
                    style={{ width: "100%", height: "18rem" }}
                    src={b.media.m}
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      <strong>{b.author}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
