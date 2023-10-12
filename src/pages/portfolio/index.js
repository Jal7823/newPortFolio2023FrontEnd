import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Portfolio = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const req = async () => {
      const data = await fetch("https://jalberth.pythonanywhere.com/projects/");
      const res = await data.json();
      console.log(res);
      setProjects(res);
    };
    req();
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {Projects.map((data, i) => {
            return (
              <div>
                <div key={i} className="po_item">
                  <img src={data.image} alt="" />
                  <div className="content">
                    <p>{data.description}</p>
                    <a target="_blank" href={data.url}>
                      view project
                    </a>
                  </div>
                </div>
                <div className="info">
                  <p>{data.name}</p>
                </div>
                <div className="icons_flow">
                  <a target="_blank" href={data.github}><FaGithub /></a>
                  <a target="_blank" href={data.url}><FaLinkedin/></a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
