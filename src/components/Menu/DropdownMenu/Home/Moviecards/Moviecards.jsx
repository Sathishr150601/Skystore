import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import "../../MenuItem.css";

export default function Moviecards() {
  const max = 1000;

  const [data, getData] = useState([]);
  const [limit, setLimit] = useState(120);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchData();
    console.log(limit);
  }, [limit]);

  const fetchData = () => {
    if (count === 0) {
      setLoading(true);
    }

    fetch("https://api.tvmaze.com/shows?_limit=50")
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        setTimeout(() => {
          getData(response);
          setLoading(false);
          setCount(count + 1);
        }, 1500);
      });
  };

  const goTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  const handleLimit = () => {
    if (limit <= max) {
      setLimit(limit + 12);
    }
  };

  return (
    <div className="new">
      <Container>
        <div className="heading">
          <h1>Latest Movies & TV</h1>
        </div>
        <Row>
          {data.slice(96, limit).map((img, key) => {
            return (
              <div className="card-wrapper" key={key}>
                <Link to={"Details/" + img.id}>
                  <a href="" className="card-content">
                    <div className="image-container">
                      <img
                        src={img.image.original}
                        alt=""
                        className="cardimg"
                      />
                    </div>
                    <p className="movieTitle">{img.name}</p>
                  </a>
                </Link>
              </div>
            );
          })}
        </Row>
        <div className="button-wrapper">
          <div className="button">
            <Button onClick={handleLimit}>Show More</Button>
          </div>
          <a onClick={goTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-compact-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
              />
            </svg>{" "}
            <h> Back to top</h>
          </a>
        </div>
      </Container>
    </div>
  );
}
