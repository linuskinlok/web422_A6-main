
import Head from "next/head";
import Image from "react-bootstrap/Image";
// import styles from '../styles/Home.module.css'
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DC</title>
        <meta name="description" content="Generated by Faandome" />
        <link rel="icon" href="/flashicon.ico" />
      </Head>
      <main>
        <h1>Home</h1>
        <Row>
          <Col>
            <Image src="/batman.svg" rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <Image
              alt="Image"
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
              rounded
              fluid
            />
          </Col>
        </Row>
        <Row style={{ marginTop: "20px", fontFamily: "monospace" }}>
          <Col md={6}>
            {/* style={{textAlign: 'center'}} */}
            <p>
              The Metropolitan Museum of Art of New York City, colloquially "the
              Met", is the largest art museum in the Americas. Its permanent
              collection contains over two million works, divided among 17
              curatorial departments. The main building at 1000 Fifth Avenue,
              along the Museum Mile on the eastern edge of Central Park on
              Manhattan's Upper East Side, is by area one of the world's largest
              art museums. A much smaller second location, The Cloisters at Fort
              Tryon Park in Upper Manhattan, contains an extensive collection of
              art, architecture, and artifacts from medieval Europe.
            </p>
            <p>
              The Metropolitan Museum of Art was founded in 1870 with its
              mission to bring art and art education to the American people. The
              museum's permanent collection consists of works of art from
              classical antiquity and ancient Egypt, paintings, and sculptures
              from nearly all the European masters, and an extensive collection
              of American and modern art. The Met maintains extensive holdings
              of African, Asian, Oceanian, Byzantine, and Islamic art. The
              museum is home to encyclopedic collections of musical instruments,
              costumes, and accessories, as well as antique weapons and armor
              from around the world. Several notable interiors, ranging from
              1st-century Rome through modern American design, are installed in
              its galleries.
            </p>
          </Col>
          <Col md={6} style={{ textAlign: "center" }}>
            <p>
              The Fifth Avenue building opened on March 30, 1880. In 2021,
              despite the COVID-19 pandemic in New York City, the museum
              attracted 1,958,000 visitors, ranking fourth on the list of
              most-visited art museums in the world.
            </p>
            <p>this is it</p>
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              alt=""
              target="_blank"
              rel="noreferrer"
            >
              https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
            </a>
          </Col>
        </Row>
      </main>

      <footer>
        <a
          href="https://www.dcfandome.com/?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <br />
            <Image
              src="/superman.svg"
              alt="Superman Logo"
              width={90}
              height={75}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
