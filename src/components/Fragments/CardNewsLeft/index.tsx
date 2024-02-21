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
  description: string;
};

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const CardNewsLeft: React.FC<Props> = ({
  title,
  source,
  image,
  tag,
  link,
  date,
  description,
}) => {
  return (
    <Card
      style={{ width: "100%" }}
      cover={<Image alt={title} src={image} height={400} />}>
      <Meta
        title={
          <Link to={link}>
            <Title
              level={4}
              style={{
                textDecoration: "underline",
                whiteSpace: "wrap",
                cursor: "pointer",
              }}>
              {title}
            </Title>
          </Link>
        }
        description={
          <>
            <Tag color="geekblue">{tag}</Tag>
            <Tag color="green">{date}</Tag>
            <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
          </>
        }
      />
      <p>
        Source:{" "}
        <a href={source} style={{ textDecoration: "underline" }}>
          {title}
        </a>
      </p>
    </Card>
  );
};

export default CardNewsLeft;
