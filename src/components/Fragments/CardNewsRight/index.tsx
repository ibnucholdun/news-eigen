import { Card, Image, Tag, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  tag: string;
  source: string;
  image: string;
  link: string;
  date: string;
};

const { Meta } = Card;
const { Title } = Typography;

const CardNewsRight: React.FC<Props> = ({
  title,
  source,
  image,
  tag,
  link,
  date,
}) => {
  return (
    <Card
      style={{ width: 320 }}
      cover={<Image alt={title} src={image} height={200} />}>
      <Meta
        title={
          <Link to={link}>
            <Title
              level={4}
              style={{ textDecoration: "underline", whiteSpace: "wrap" }}
              type="secondary">
              {title}
            </Title>
          </Link>
        }
        description={
          <>
            <Tag color="geekblue">{tag}</Tag>
            <Tag color="green">{date}</Tag>
          </>
        }
      />
      <p>
        Source:{" "}
        <a href={source} style={{ textDecoration: "underline" }}>
          {tag}
        </a>
      </p>
    </Card>
  );
};

export default CardNewsRight;
