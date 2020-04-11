import React, { useEffect } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { RegionSelect } from "@components/VolunteerForm/Fields/Select";
import { formItemLayout, tailFormItemLayout } from "./layout";

const { TextArea } = Input;
import { MobileField, AddressField, PinField, NameField } from "./Fields/Input";

const RequestForHelpForm = (props) => {
  const [form] = Form.useForm();
  const { resetFields } = form;

  useEffect(() => {
    resetFields();
  }, [props.reset]);

  return (
    <div>
      <Form
        form={form}
        {...formItemLayout}
        initialValues={props.initialValues}
        onFinish={props.handleSubmit}
      >
        <NameField />
        <MobileField />
        <AddressField />

        <Form.Item
          label="Area"
          name="area"
          rules={[
            {
              required: true,
              message: "Area is required.",
            },
          ]}
        >
          <Row gutter={8}>
            <Col span={20}>
              <Input placeholder="Enter area/locality" />
            </Col>
          </Row>
        </Form.Item>

        <RegionSelect options={props.options} />

        <PinField />

        <Form.Item
          label="Description"
          name="desc"
          rules={[
            {
              required: true,
              message: "Description is required.",
            },
          ]}
        >
          <Row gutter={8}>
            <Col span={20}>
              <TextArea
                type="textarea"
                rows={4}
                placeholder="Please enter description."
              />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RequestForHelpForm;