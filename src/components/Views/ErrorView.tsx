import { Flex, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const ErrorView = () => {
  return (
    <>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Flex justify="center" align="center" vertical>
          <Title style={{ fontSize: "5rem", margin: "0" }}>Error 404</Title>
          <Title level={3} style={{ margin: "0" }}>
            Page not found
          </Title>
          <Link
            to={"/"}
            style={{
              textDecoration: "underline",
              marginTop: "1rem",
              fontSize: "1.5rem",
            }}>
            Go back
          </Link>
        </Flex>
      </Row>
    </>
  );
};

export default ErrorView;
