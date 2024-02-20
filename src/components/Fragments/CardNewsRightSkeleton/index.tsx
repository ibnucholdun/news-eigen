import { Card, Typography, Tag, Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Title } = Typography;

type Props = {
  loading: boolean;
};

const NewsCard: React.FC<Props> = ({ loading }) => {
  return (
    <Card style={{ width: 320 }} cover={<div style={{ height: 200 }} />}>
      <Skeleton loading={loading} active>
        <Meta
          title={
            <Link to={""}>
              <Title
                level={4}
                style={{
                  textDecoration: "underline",
                  whiteSpace: "wrap",
                }}
                type="secondary">
                {""}
              </Title>
            </Link>
          }
          description={
            <>
              <Tag color="geekblue">{""}</Tag>
              <Tag color="green">{""}</Tag>
            </>
          }
        />
        <p>
          Source:{" "}
          <a href={""} style={{ textDecoration: "underline" }}>
            {""}
          </a>
        </p>
      </Skeleton>
    </Card>
  );
};

export default NewsCard;
