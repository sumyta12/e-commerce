import { Col, Row, Spin } from "antd";
import Card from "../../CommonParts/CardDesign/Card";
import UseEffectOfProduct from "./UseEffectOfProduct";
import { filterProduct } from "./FilterCases";

const ProductDisplay = ({ number, select = "" }) => {
  const { product } = UseEffectOfProduct(number);

  console.log(number);

  if (product === null) return <Spin size="large" />;

  const ProductRender = filterProduct(select, product)?.map((item, i) => {
    return (
      <Col
        key={item.id}
        xs={{
          span: 24,
        }}
        lg={{
          span: 6,
        }}>
        <Card {...item} />
      </Col>
    );
  });

  return (
    <Row gutter={[16, 16]} className="w-100 main--product">
      {ProductRender}
    </Row>
  );
};

export default ProductDisplay;
